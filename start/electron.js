import * as path from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

import isDev from "electron-is-dev";
import { BrowserWindow, app } from "electron";

let electron = null;

// It need to use this If electron running on development.
const DEV_URL = "http://localhost:5173";

class CreateWindow extends BrowserWindow {
  constructor(width, height, options) {
    super({ width, height, ...options });
  }

  setScreen() {
    if (isDev) {
      this.loadURL(DEV_URL);
      this.webContents.openDevTools({ mode: "detach" });
    } else {
      this.loadFile(path.join(__dirname, "../dist/index.html"));
    }
  }
}

function createWindow() {
  electron = new CreateWindow(1200, 900, {
    devTools: isDev,
    nodeIntegration: true,
    preload: path.join(__dirname, "preload.js"),
    resizable: true,
  });

  electron.setScreen();
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (CreateWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

process.on("uncaughtException", function (err) {
  console.log(err);
});

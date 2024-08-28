import * as path from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

import isDev from "electron-is-dev";
import { BrowserWindow, WebPreferences, app } from "electron";

let electron: CreateWindow | null = null;

class CreateWindow extends BrowserWindow {
  DEV_URL: string;
  PROD_URL: string;

  constructor(width: number, height: number, options: WebPreferences) {
    super({ width, height, ...options });

    this.DEV_URL = "http://localhost:5173";
    this.PROD_URL = path.join(__dirname, "../build/index.html");
  }

  setScreen(isDev: boolean) {
    if (isDev) {
      this.loadURL(this.DEV_URL);
      this.webContents.openDevTools({ mode: "detach" });
    } else {
      this.loadFile(this.PROD_URL);
    }
  }
}

function createWindow() {
  electron = new CreateWindow(1200, 900, {
    devTools: isDev,
    preload: path.join(__dirname, "preload.js"), // It can't use the nodeJS enviroment from electron 20.x onwards.
    nodeIntegration: true,
  });

  electron.setResizable(true);
  electron.setScreen(isDev);
}

function windowAllClosed() {
  if (process.platform !== "darwin") {
    app.quit();
  }
}

function activate() {
  if (CreateWindow.getAllWindows().length === 0) {
    createWindow();
  }
}

function start() {
  createWindow();
  app.on("activate", activate);
}

app.whenReady().then(start);
app.on("window-all-closed", windowAllClosed);

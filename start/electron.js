import * as path from "path";
import isDev from "electron-is-dev";
import { app, BrowserWindow } from "electron";

let electron = null;

class CreateWindow extends BrowserWindow {
  constructor(options) {
    super(options);
  }

  setLoadUrl(array) {
    this.loadURL(array[isDev ? 0 : 1]);
  }

  setDevTools(mode) {
    if (isDev) {
      this.webContents.openDevTools({ mode });
    }
  }
}

app.on("ready", () => {
  createWindow();
});

app.on("activate", () => {
  if (electron === null) createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

const closed = () => {
  electron = null;
  app.quit();
};

const LOCAL = "http://localhost:5173";
const PROD = `file://${path.join(path.resolve(), "../dist/index.html")}`;

function createWindow() {
  electron = new CreateWindow({
    width: 900,
    height: 680,
    webPreferences: {
      nodeIntegration: true,
      devTools: isDev,
    },
  });

  electron.setLoadUrl([LOCAL, PROD]);
  electron.setResizable(true);
  electron.setDevTools("detach");
  electron.on("closed", closed);
  electron.focus();
}

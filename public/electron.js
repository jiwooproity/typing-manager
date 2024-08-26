import path from "path";
import electron from "electron";
import isDev from "electron-is-dev";

let mainWindow;
let __dirname = path.resolve();

function createWindow() {
  mainWindow = new electron.BrowserWindow({
    width: 900,
    height: 680,
    webPreferences: {
      nodeIntegration: true,
      devTools: isDev,
    },
  });

  const local = "http://localhost:5173";
  const production = `file://${path.join(__dirname, "../dist/index.html")}`;

  mainWindow.loadURL(isDev ? local : production);

  if (isDev) mainWindow.webContents.openDevTools({ mode: "detach" });

  mainWindow.setResizable(true);

  mainWindow.on("closed", () => {
    mainWindow = null;
    electron.app.quit();
  });

  mainWindow.focus();
}

electron.app.on("ready", createWindow);

electron.app.on("activate", () => {
  if (mainWindow === null) createWindow();
});

electron.app.on("window-all-closed", () => {
  if (process.platform !== "darwin") electron.app.quit();
});

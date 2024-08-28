import * as path from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import isDev from "electron-is-dev";
import { BrowserWindow, app } from "electron";
let electron = null;
class CreateWindow extends BrowserWindow {
    constructor(width, height, options) {
        super(Object.assign({ width, height }, options));
        this.DEV_URL = "http://localhost:5173";
        this.PROD_URL = path.join(__dirname, "../build/index.html");
    }
    setScreen(isDev) {
        if (isDev) {
            this.loadURL(this.DEV_URL);
            this.webContents.openDevTools({ mode: "detach" });
        }
        else {
            this.loadFile(this.PROD_URL);
        }
    }
}
function createWindow() {
    electron = new CreateWindow(1200, 900, {
        devTools: isDev,
        // preload: path.join(__dirname, "preload.js"),
        nodeIntegration: true,
    });
    electron.setResizable(true);
    electron.setScreen(isDev);
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

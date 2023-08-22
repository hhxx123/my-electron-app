const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,

    webPreferences: {
      devTools: true,
      // 集成网页和 Node.js，也就是在渲染进程中，可以调用 Node.js 方法
      nodeIntegration: true,
      contextIsolation: false
    }
  })
  win.loadURL(`${process.env['VITE_DEV_SERVER_URL']}`);
  win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow()
})
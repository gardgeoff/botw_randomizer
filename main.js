const { app, BrowserWindow } = require('electron')
const path = require('path')
function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: "./gui/images/ranhdomized20.png",
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    }
  })

  win.loadFile('./gui/html/index.html')
}
app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
      win.webContents.openDevTools()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
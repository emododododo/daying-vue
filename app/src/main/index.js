'use strict'

import { app, BrowserWindow } from 'electron'
import path from 'path'

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:${require('../../../config').port}`
  : `file://${__dirname}/index.html`

function createWindow (url, options) {
  /**
   * Initial window options
   */
  const loadURL = url || winURL
  mainWindow = new BrowserWindow(Object.assign({
    height: 640,
    width: 980,
    webPreferences: {
      plugins: true
    }
  }, options))

  mainWindow.loadURL(loadURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  // eslint-disable-next-line no-console
  console.log('mainWindow opened')
}

let ppapiFlashPath
if (process.platform === 'win32') {
  ppapiFlashPath = path.join(__dirname, './plugins/pepflashplayer.dll')
} else if (process.platform === 'linux') {
  ppapiFlashPath = path.join(__dirname, './plugins/libpepflashplayer.so')
} else if (process.platform === 'darwin') {
  ppapiFlashPath = path.join(__dirname, './plugins/PepperFlashPlayer.plugin')
}

app.commandLine.appendSwitch('ppapi-flash-path', ppapiFlashPath)
app.commandLine.appendSwitch('ppapi-flash-version', '27.0.0.130')
app.on('ready', () => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

global.services = {
  createWindow,
  winURL
}

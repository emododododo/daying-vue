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
  console.log(loadURL)
  mainWindow = new BrowserWindow(Object.assign({
    height: 600,
    width: 800
  }, options))

  mainWindow.loadURL(loadURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  // eslint-disable-next-line no-console
  console.log('mainWindow opened')
}
// app.commandLine.appendSwitch('ppapi-flash-path', '/path/to/PepperFlashPlayer.plugin')

// Specify flash version, for example, v17.0.0.169 设置版本号
// app.commandLine.appendSwitch('ppapi-flash-version', '17.0.0.169')
const libDirectory = path.join(__dirname, '../path')

let ppapiFlashPath

if (process.platform === 'win32') {
  ppapiFlashPath = path.join(libDirectory, 'pepflashplayer.dll')
} else if (process.platform === 'linux') {
  ppapiFlashPath = path.join(libDirectory, 'libpepflashplayer.so')
} else if (process.platform === 'darwin') {
  ppapiFlashPath = path.join(libDirectory, 'PepperFlashPlayer.plugin')
}
console.log(ppapiFlashPath)
app.commandLine.appendSwitch('ppapi-flash-path', ppapiFlashPath)
app.commandLine.appendSwitch('ppapi-flash-version', '23.0.0.205')

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

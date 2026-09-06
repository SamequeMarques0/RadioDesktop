const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 380,
    height: 180,
    resizable: false,
    transparent: true,
    frame: false, // Opcional: remove as bordas padrão do Windows para um visual limpo
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
// chargement de deux modules Electron
const { app, BrowserWindow } = require('electron')
// si j'avais lié avec un fichier et non une url :
// const path = require('path');


// puis, ajoutons une fonction createWindow() qui charge index.html dans une nouvelle instance BrowserWindow.
function createWindow() {
    // Création de la fenêtre de navigateur.
    const win = new BrowserWindow({

        width: 800,

        height: 600,

        webPreferences: {

            nodeIntegration: true
        }
    })

    // adresse de l'appli :
    win.loadURL('https://organisez-vos-voyages.onrender.com/')
    // win.loadURL('http://localhost:4200')
    
    // pour les outils:
    win.webContents.openDevTools()

}



// Appelons la fonction createWindow(), ci dessus, pour ouvrir notre fenêtre.
// Cette méthode sera appelée quand Electron aura fini de s'initialiser et sera prêt à créer des fenêtres de navigation.
// Certaines APIs peuvent être utilisées uniquement quant cet événement est émit.
  app.on('ready', () => {
    createWindow()

    app.on('activate', () => {
      // Sur macOS il est commun de re-créer une fenêtre  lors 
      // du click sur l'icone du dock et qu'il n'y a pas d'autre fenêtre ouverte.
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
      }
    })

  })
  
  
  // Quitter quand toutes les fenêtres sont fermées, SAUF SUR macOS. Dans ce cas il est courant que les applications et barre de menu restent actives jusqu'à ce que l'utilisateur quitte de manière explicite par Cmd + Q.
  app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
          app.quit()
      }
  })
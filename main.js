
const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow, Menu, ipcMain } = electron;

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
    width: 600,
    height: 600,
    resizable: false,
    frame: false,
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "main.html"),
      protocol: "file:",
      slashes: true,
    })
  );
  const mainMenuTemplate = [
    {
      label: "File ",
      submenu: [
        {
          label: "Exit",
          accelerator: process.platform == "darwin" ? "Command+Q" : "Ctrl+Q",
          role: "quit",
        },
      ],
    },
  ];
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(mainMenu);

  ipcMain.on("key:close", () => {
    app.quit();
  });
  // NEW WİNDOW
 /* 
 ipcMain.on("key:newWindow1", () => {
    createWindow1();
  });
  ipcMain.on("key:newWindow2", () => {
    createWindow2();
  });
  ipcMain.on("key:newWindow3", () => {
    createWindow3();
  });
  ipcMain.on("key:newWindow4", () => {
    createWindow4();
  });
  ipcMain.on("key:newWindow5", () => {
    createWindow5();
  });*/
});
/*
function createWindow1() {
  var currentWindow = BrowserWindow.getFocusedWindow();
  addWindow = new BrowserWindow({
    width: 600,
    height: 600,
    title: "New Window",
    frame: false,
    autoHideMenuBar: true,
    resizable: false,
  });

  addWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "income_entry.html"),
      protocol: "file:",
      slashes: true,
    })
  );

  addWindow.on("ready-to-show", () => {
    currentWindow.close();
  });

  addWindow.on("close", () => {
    addWindow = null;
  });
}
function createWindow2() {
  var currentWindow = BrowserWindow.getFocusedWindow();
  addWindow = new BrowserWindow({
    width: 600,
    height: 600,
    title: "New Window",
    frame: false,
    autoHideMenuBar: true,
    resizable: false,
  });

  addWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "expense_entry.html"),
      protocol: "file:",
      slashes: true,
    })
  );

  addWindow.on("ready-to-show", () => {
    currentWindow.close();
  });

  addWindow.on("close", () => {
    addWindow = null;
  });
}
function createWindow3() {
  var currentWindow = BrowserWindow.getFocusedWindow();
  addWindow = new BrowserWindow({
    width: 600,
    height: 600,
    title: "New Window",
    frame: false,
    autoHideMenuBar: true,
    resizable: false,
  });

  addWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "investments.html"),
      protocol: "file:",
      slashes: true,
    })
  );

  addWindow.on("ready-to-show", () => {
    currentWindow.close();
  });

  addWindow.on("close", () => {
    addWindow = null;
  });
}
function createWindow4() {
  var currentWindow = BrowserWindow.getFocusedWindow();
  addWindow = new BrowserWindow({
    width: 600,
    height: 600,
    title: "New Window",
    frame: false,
    autoHideMenuBar: true,
    resizable: false,
  });

  addWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "expense_statement.html"),
      protocol: "file:",
      slashes: true,
    })
  );

  addWindow.on("ready-to-show", () => {
    currentWindow.close();
  });

  addWindow.on("close", () => {
    addWindow = null;
  });
}
function createWindow5() {
  var currentWindow = BrowserWindow.getFocusedWindow();
  addWindow = new BrowserWindow({
    width: 600,
    height: 600,
    title: "New Window",
    frame: false,
    autoHideMenuBar: true,
    resizable: false,
  });

  addWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "wish_list.html"),
      protocol: "file:",
      slashes: true,
    })
  );

  addWindow.on("ready-to-show", () => {
    currentWindow.close();
  });

  addWindow.on("close", () => {
    addWindow = null;
  });
}
// bu fonksiyon yeni bir main açıyor fakat butonları geçersiz kılıyor
function createWindow6() {
  var currentWindow = BrowserWindow.getFocusedWindow();

  addWindow = new BrowserWindow({
    width: 600,
    height: 600,
    title: "New Window",
    frame: false,
    autoHideMenuBar: true,
  });

  addWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "main.html"),
      protocol: "file:",
      slashes: true,
    })
  );

  addWindow.on("ready-to-show", () => {
    currentWindow.close();
  });
  addWindow.on("close", () => {
    addWindow = null;
  });
}*/
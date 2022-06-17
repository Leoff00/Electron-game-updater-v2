"use strict";
import { app, BrowserWindow } from "electron";
import * as path from "path";
import { format as formatUrl } from "url";

// eslint-disable-next-line no-unused-vars
let mainWindow;

function createMainWindow() {
  const window = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
    width: 800,
    height: 600,
    transparent: true,
    frame: true,
    fullscreenable: false,
    maximizable: false,
    resizable: false,
  });

  let url = formatUrl({
    pathname: path.join(__dirname, "index.html"),
    protocol: "file",
    slashes: true,
  });

  window.on("error", (error) => {
    console.error({
      error,
    });
  });

  window.on("closed", () => {
    mainWindow = null;
  });

  window.loadURL(url);

  return window;
}

function runApp() {
  mainWindow = createMainWindow();
}

app.on("ready", () => {
  runApp();
});

if (module.hot) {
  module.hot.accept();
}

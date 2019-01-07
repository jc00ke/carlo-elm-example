#!/usr/bin/env node

'use strict';

const carlo = require('carlo');

(async() => {
  const app = await carlo.launch({
      title: "Carlo + Elm",
      width: 300,
      height: 300,
      top: 100,
      left: 100
  })
  app.on("exit", () => process.exit())
  app.on("window", window => window.load("index.html"))
  app.serveFolder(__dirname)
  await app.load("index.html")
})();

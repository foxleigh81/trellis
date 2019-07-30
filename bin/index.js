#!/usr/bin/env node

const path = require('path')
const fs = require('fs')

const config = require('nconf')
const chalk = require('chalk')

const getLists = require("../lib/getLists")
const configGen = require("../lib/configGen")

var configDir = path.resolve(configGen.homePath(), ".trellis");
var configPath = path.resolve(configDir, "config.json");

// Load config
config.file(configPath);

if (!fs.existsSync(configPath)) {
  console.log(chalk.red("config.json does not exist."), chalk.blue("trying to create new one."))
  configGen.createEmptyConfig(configDir);
  process.exit(1);
}

const configData = JSON.parse(fs.readFileSync(configPath, 'utf8'));

getLists(configData)



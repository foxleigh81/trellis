#!/usr/bin/env node

require('dotenv').config()

const path = require('path')
const fs = require('fs')
const Trello = require('trello')
const config = require('nconf')
const chalk = require('chalk')
const terminalLink = require('terminal-link')

// TODO: Add error state if token is rejected

const configGen = require("./configGen")

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

const trello = new Trello(configData.appKey, configData.appToken)
const listNameArray = configData.getLists

trello.makeRequest('get', '/1/members/me/boards', {}, function(err, boards) {
  boards.forEach(board => {
    if (!board.closed) {
      trello.getListsOnBoard(board.id, function(err, lists) {
        lists.forEach((list) => {
          trello.getCardsOnList(list.id, function(err, cards) {
            // Only return the lists we are interested in and skip over lists with no cards
            if ( listNameArray.includes(list.name) && cards.length > 0) {
              const boardLink = terminalLink(board.name, board.shortUrl)
              console.log(' ')
              console.log(`${chalk.bgGreen.black.bold(' ✔ ')}${chalk.bgWhite(` ${chalk.red(list.name)} ${chalk.black(`on`)} ${chalk.blue(boardLink)} `)}`)
              console.log(' ')
              cards.map(card => {
                const cardLink = terminalLink(card.name, card.shortUrl)
                console.log(' ', cardLink)
              })
            }
          })
        })
      })
    }
  })
})

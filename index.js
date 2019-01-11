#!/usr/bin/env node

require('dotenv').config()

const Trello = require('trello')
const chalk = require('chalk')
const terminalLink = require('terminal-link')

const trello = new Trello(process.env.API_KEY, process.env.APP_TOKEN)
const listNameArray = ['Todo']
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

#!/usr/bin/env node

require('dotenv').config()

const Trello = require('trello')
const chalk = require('chalk')

const trello = new Trello(process.env.API_KEY, process.env.APP_TOKEN)
// TODO: Add ability to specify user (by user name) and to select which boards and lists to return
trello.getBoards('535286eaaebdc2101ba65b2a', function(err, boards) {
  boards.forEach(board => {
    if (!board.closed) {
      trello.getListsOnBoard(board.id, function(err, lists) {
        lists.forEach((list) => {
          trello.getCardsOnList(list.id, function(err, cards) {
            if (list.name === 'Todo' && cards.length > 0) {
              console.group(chalk.red(list.name), 'on', chalk.blue(board.name))
              cards.map(card => {
                console.log(card.name)
              })
              console.groupEnd(chalk.red(list.name))
            }
          })
        })
      })
    }
  })
})

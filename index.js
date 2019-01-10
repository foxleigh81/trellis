#!/usr/bin/env node

require('dotenv').config()

const Trello = require('trello')
const chalk = require('chalk')

const trello = new Trello(process.env.API_KEY, process.env.APP_TOKEN)

trello.getListsOnBoard('8kYSHWCy', function(err, lists) {
  // TODO: Make list sorted by 'pos'
  lists.forEach(list => {
    trello.getCardsOnList(list.id, function(err, cards) {
      if (list.name !== 'Done' && list.name !== 'Inbox') {
        console.group(chalk.red(list.name))
        cards.map(card => {
          console.log(card.name)
        })
        console.groupEnd(chalk.red(list.name))
      }
    })
  })
})

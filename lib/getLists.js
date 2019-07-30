const terminalLink = require('terminal-link')
const Trello = require('trello')
const argv = require('yargs').argv
const chalk = require('chalk')

module.exports = (configData) => {
  const trello = new Trello(configData.appKey, configData.appToken)
  const listNameArray = (argv.list) ? [argv.list] : configData.getLists
  trello.makeRequest('get', '/1/members/me/boards', {}, function(err, boards) {
    if (err) throw new Error (err)
    boards.forEach(board => {
      if (!board.closed) {
        trello.getListsOnBoard(board.id, function(err, lists) {
          if (err) throw new Error (err)
          lists.forEach(list => {
            trello.getCardsOnList(list.id, function(err, cards) {
              if (err) throw new Error (err)
              // Only return the lists we are interested in and skip over lists with no cards
              if ( listNameArray.includes(list.name) && cards.length > 0) {
                const boardLink = terminalLink(board.name, board.shortUrl)
                console.log(' ')
                console.log(`${chalk.bgGreen.black.bold(' ✔ ')}${chalk.bgWhite(` ${chalk.red(list.name)} ${chalk.black(`on`)} ${chalk.blue(boardLink)} `)}`)
                console.log(' ')
                cards.map(card => 
                  console.log(' ', terminalLink(card.name, card.shortUrl))
                )
              }
            })
          })
        })
      }
    })
  })  
}

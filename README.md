# Trellis

[![npm version](http://img.shields.io/npm/v/@foxleigh81/trellis.svg?style=flat)](https://npmjs.org/package/@foxleigh81/trellis "View this project on npm")

A node cli app which takes a list of cards from a trello list

## Installation instructions

in your command line, type `npm install -g @foxleigh81/trellis`

Visit http://trello.com/app-key and get your API key and App Token (manually generated)

Back in the command line type:

`trellis`

This will initialise the config file, which you will be able to find in your home directory under the `.trellis` folder (If you are on mac, you can find this file at `~/.trellis/config.json`).

Edit `config.json` and add your `API_KEY` and `APP_TOKEN` which you retreived earlier. At this point, you can also add any lists you would like to appear in `getLists`, please note that they need to match your Trello lists perfectly, make sure you preserve case, spacing and any punctuation/symbols your list may use.

## Usage

In your command line type `trellis`.

By default it will only look for lists named `Todo`. However you can edit the `getLists` area in `~/.trellis/config.json` to add, edit or delete any lists you like.

### One shot list view

If you want to look at a specific set of lists but you don't want to see them all the time (for example you want to see all of your "Backlog" lists just this once) then you can specify the list using the `--list` flag.

e.g. `trellis --list "Backlog"`

Note: The quotation marks are not strictly needed if the list name is only one word.

### Excluding boards

The default operation of Trellis is to show all of your boards which have lists matching the 'getLists' array, however you can limit the output of trellis by excluding boards from the results, this is done by added the name of your board to `excludedBoards` in `~/.trellis/config.json`. As before; case, spacing and punctuation/symbols must be exact.

## Example

![Screenshot](example.png)

## Roadmap and Issues

This is a pretty new project and is still unfinished and buggy. If you spot any issues, please log them here:

https://github.com/foxleigh81/trellis/issues

This is also a good place to go if you are interested in seeing what features I'm planning next.

## Thanks and Acknowledgements

Inspiration and some of the configuration code for this project came from https://github.com/mheap/trello-cli
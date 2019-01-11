# Trellis

[![npm version](http://img.shields.io/npm/v/@foxleigh81/trellis.svg?style=flat)](https://npmjs.org/package/@foxleigh81/trellis "View this project on npm")

A node cli app which takes a list of cards from a trello list

## Installation instructions

in your command line, type `npm install -g @foxleigh81/trellis`

Then navigate to your global `node_modules` folder and copy `sample.env` renaming it to just `.env`

Visit http://trello.com/app-key and get your API key and App Token (manually generated) and update the keys in your new .env file

## Usage

In your command line type `trellis`.

By default it will only look for lists named `Todo`. However you can edit the `listNameArray` variable in `index.js` to add, edit any lists you like (case-sensitive)

## Roadmap

1. Create a config file, this will make installation easier and make specifying lists easier as it will all be done in the config file
2. Show a useful error message if the auth token isn't valid / has expired. Currently it just errors out the app
3. Allow users to exclude boards
4. Create a version which outputs a JSON object instead of a console.log
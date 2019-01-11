# Trellis

[![npm version](http://img.shields.io/npm/v/@foxleigh81/trellis.svg?style=flat)](https://npmjs.org/package/@foxleigh81/trellis "View this project on npm")

A node cli app which takes a list of cards from a trello list

> **PLEASE NOTE**  
> This package is currently failing, please take a look at our [github issue](https://github.com/foxleigh81/trellis/issues/5) for more updates

## Installation instructions

in your command line, type `npm install -g @foxleigh81/trellis`

Then navigate to your global `node_modules` folder and copy `sample.env` renaming it to just `.env`

Visit http://trello.com/app-key and get your API key and App Token (manually generated) and update the keys in your new .env file

## Usage

In your command line type `trellis`.

By default it will only look for lists named `Todo`. However you can edit the `listNameArray` variable in `index.js` to add, edit any lists you like (case-sensitive)

## Example

![Screenshot](example.png)

## Roadmap and Issues

This is a pretty new project and is still unfinished and buggy. If you spot any issues, please log them here:

https://github.com/foxleigh81/trellis/issues

This is also a good place to go if you are interested in seeing what features I'm planning next.
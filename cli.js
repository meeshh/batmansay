#!/usr/bin/env node
require('dotenv').config() // this loads env vars

const yargs = require('yargs')
  .usage(
    `
Usage: $0 [--think] [-f character] [-l] text
		
If any command-line arguments are left over after all switches have been processed, they become the character's message.
		
If the program is invoked as batmanthink then the character will think its message instead of saying it.
`
  )
  .options({
    f: {
      type: 'string',
    },
    l: {
      type: 'boolean',
    },
    think: {
      type: 'boolean',
    },
  })
  .describe({
    h: 'Display this help message',
    f: 'Specifies a character to use from the list.',
    l: 'List all characters available',
    think: 'Think the message instead of saying it aloud.',
  })
  .help()
  .alias('h', 'help')
  .alias('v', 'version')

const { argv } = yargs

function say() {
  const module = require('./index')
  const think = /think$/.test(argv.$0) || argv.think
  return think ? module.think(argv) : module.say(argv)
}

function listCharacters() {
  require('./index').list((err, list) => {
    if (err) throw new Error(err)
    console.log(list.join('  '))
  })
}

if (argv.l) {
  listCharacters()
} else if (argv._.length) {
  say()
} else {
  require('get-stdin')().then((data) => {
    argv._ = [require('strip-final-newline')(data)]
    say()
  })
}

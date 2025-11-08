#!/usr/bin/env node
import 'dotenv/config'; // this loads env vars
import getStdin from 'get-stdin';
import stripFinalNewline from 'strip-final-newline';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import * as batmansay from './index.js';

const yargsInstance = yargs(hideBin(process.argv))
  .usage(
    `
Usage: $0 [--think] [-f character] [-l] text
		
If any command-line arguments are left over after all switches have been processed, they become the character's message.
		
If the program is invoked as batmanthink then the character will think its message instead of saying it.
`,
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
  .alias('v', 'version');

const { argv } = yargsInstance;

function say() {
  const think = /think$/.test(argv.$0) || argv.think;
  return think ? batmansay.think(argv) : batmansay.say(argv);
}

function listCharacters() {
  batmansay.list((err, list) => {
    if (err) throw new Error(err);
    console.log(list.join('\n'));
  });
}

if (argv.l) {
  listCharacters();
} else if (argv._.length) {
  say();
} else {
  getStdin().then((data) => {
    argv._ = [stripFinalNewline(data)];
    say();
  });
}

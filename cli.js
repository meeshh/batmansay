#!/usr/bin/env node
import { text } from 'node:stream/consumers';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import * as batmansay from './index.js';

const yargsInstance = yargs(hideBin(process.argv))
  .usage(
    `
Usage: $0 [--think] [-f character] [-r] [-l] [-n | -W column] text

If any command-line arguments are left over after all switches have been processed, they become the character's message.

If the program is invoked as batmanthink then the character will think its message instead of saying it.
`,
  )
  .options({
    f: {
      type: 'string',
      describe: 'Specifies a character to use from the list.',
    },
    l: {
      type: 'boolean',
      describe: 'List all characters available',
    },
    r: {
      type: 'boolean',
      describe: 'Use a random character, ignoring rarity weights.',
    },
    n: {
      type: 'boolean',
      describe: 'Do not wrap the message.',
    },
    W: {
      type: 'number',
      describe: 'Wrap the message at this column.',
    },
    think: {
      type: 'boolean',
      describe: 'Think the message instead of saying it aloud.',
    },
  })
  .help()
  .alias('h', 'help')
  .alias('v', 'version');

const { argv } = yargsInstance;

function say() {
  const think = /think$/.test(argv.$0) || argv.think;
  return think ? batmansay.think(argv) : batmansay.say(argv);
}

if (argv.l) {
  console.log((await batmansay.list()).join('\n'));
} else {
  if (!argv._.length) {
    // On a TTY there is nothing piped in, so fall back to a random quote.
    const input = process.stdin.isTTY ? '' : await text(process.stdin);
    argv._ = [input.replace(/\r?\n$/, '')];
  }
  await say();
}

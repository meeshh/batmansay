import chalk from 'chalk';
import characters from './characters.js';
import { say as balloonSay, think as balloonThink } from './lib/balloon.js';
import * as chars from './lib/characters.js';

const DEFAULT = 'batman';

const chooseRandom = (data) => {
  let total = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const char of data) {
    total += char[1];
  }

  const threshold = Math.random() * total;
  total = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < data.length - 1; ++i) {
    total += data[i][1];
    if (total >= threshold) {
      return data[i];
    }
  }

  return data[data.length - 1];
};

const [chosenCharacter, chosenWeight] = chooseRandom(characters);

let quotes;

async function buildCharacter(options) {
  let ofCharacter;
  if (options.f !== 'default' && chars.listSync().indexOf(options.f) !== -1) {
    ofCharacter = options.f;
  } else if (options.f === 'default' || chosenCharacter === 'default') {
    ofCharacter = DEFAULT;
  } else {
    ofCharacter = chosenCharacter;
  }
  const quotesModule = await import(`./quotes/${ofCharacter}.js`);
  quotes = quotesModule.default;

  const stars = options.f
    ? '* NOT AVAILABLE WITH -f option'
    : 11 - chosenWeight;

  // eslint-disable-next-line no-param-reassign
  options.f =
    chars.listSync().indexOf(options.f) !== -1 ? options.f : chosenCharacter;
  console.log(
    chalk.bgRed.white(
      options.f === 'default'
        ? ` ${DEFAULT.toUpperCase()} `
        : ` ${options.f.toUpperCase()} `,
    ),
    chalk.bgYellow.black(
      ` ${Number.isNaN(stars) ? stars : '⭐'.repeat(stars)} `,
    ),
  );
  return options;
}

export const list = chars.list;

function selectQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

async function doIt(options, sayAloud) {
  let charFile;

  if (options.r) {
    const charsList = chars.listSync();
    charFile = charsList[Math.floor(Math.random() * charsList.length)];
  } else {
    charFile = options.f || 'default';
  }

  const charModule = await import(`./characters/${charFile}.js`);
  const char = charModule.default;
  const face = { thoughts: sayAloud ? chalk.white('\\') : chalk.grey('o') };

  // handle the selected quote.
  const myQuote = selectQuote();

  const filledBalloon = sayAloud
    ? balloonSay(
        options._.join(' ') || myQuote.trim() || options.text,
        options.n ? null : options.W,
      )
    : balloonThink(
        options._.join(' ') || myQuote.trim() || options.text,
        options.n ? null : options.W,
      );

  return filledBalloon + char(face);
}

export async function say(options) {
  const res = await doIt(await buildCharacter(options), true);
  console.log(res);
}

export async function think(options) {
  const res = await doIt(await buildCharacter(options), false);
  console.log(res);
}

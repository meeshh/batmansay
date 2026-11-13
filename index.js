import chalk from 'chalk';
import characters from './characters.js';
import { say as balloonSay, think as balloonThink } from './lib/balloon.js';
import * as chars from './lib/characters.js';

const DEFAULT = 'batman';

const chooseRandom = (data) => {
  let total = 0;
  for (const char of data) {
    total += char[1];
  }

  const threshold = Math.random() * total;
  total = 0;
  for (let i = 0; i < data.length - 1; i += 1) {
    total += data[i][1];
    if (total >= threshold) {
      return data[i];
    }
  }

  return data[data.length - 1];
};

const [chosenCharacter, chosenWeight] = chooseRandom(characters);

function pickCharacter(options) {
  const available = chars.listSync();
  if (options.r) {
    return available[Math.floor(Math.random() * available.length)];
  }
  return available.includes(options.f) ? options.f : chosenCharacter;
}

async function buildCharacter(options) {
  const name = pickCharacter(options);
  // The default character has no quotes of its own and borrows batman's.
  const displayName = name === 'default' ? DEFAULT : name;
  const quotesModule = await import(`./quotes/${displayName}.js`);

  const stars =
    options.f || options.r
      ? '* NOT AVAILABLE WITH -f OR -r OPTIONS'
      : '⭐'.repeat(11 - chosenWeight);

  console.log(
    chalk.bgRed.white(` ${displayName.toUpperCase()} `),
    chalk.bgYellow.black(` ${stars} `),
  );
  return { name, quotes: quotesModule.default };
}

export const list = chars.list;

function selectQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

async function doIt(options, sayAloud) {
  const { name, quotes } = await buildCharacter(options);
  const charModule = await import(`./characters/${name}.js`);
  const char = charModule.default;
  const face = { thoughts: sayAloud ? chalk.white('\\') : chalk.grey('o') };

  const text =
    options._.join(' ') || selectQuote(quotes).trim() || options.text;
  const wrap = options.n ? null : options.W;
  const filledBalloon = sayAloud
    ? balloonSay(text, wrap)
    : balloonThink(text, wrap);

  return filledBalloon + char(face);
}

export async function say(options) {
  console.log(await doIt(options, true));
}

export async function think(options) {
  console.log(await doIt(options, false));
}

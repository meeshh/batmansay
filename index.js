const balloon = require('./lib/balloon');
const chars = require('./lib/characters');

const characters = require('./characters');
const chalk = require('chalk');

const chooseRandom = (data) => {
  let total = 0;
  for (let i = 0; i < data.length; ++i) {
      total += data[i][1];
  }

  const threshold = Math.random() * total;
  total = 0;
  for (let i = 0; i < data.length - 1; ++i) {
      total += data[i][1];
      if (total >= threshold) {
          return data[i][0];
      }
  }

  return data[data.length - 1][0];
}

const chosenCharacter = chooseRandom(characters)

let quotes;

function buildCharacter(options) {
  quotes = require(`./quotes/${
    options.f != 'default' && chars.listSync().indexOf(options.f) !== -1
      ? options.f
      : options.f === 'default' || chosenCharacter === 'default'
      ? 'batman'
      : chosenCharacter
  }`);

  options.f =
  chars.listSync().indexOf(options.f) !== -1 ? options.f : chosenCharacter;

  console.log(
    chalk.bgRed.white(
      options.f === 'default'
        ? ' ' + 'batman'.toUpperCase() + ' '
        : ' ' + options.f.toUpperCase() + ' '
    )
  );
  return options;
}

exports.say = function (options) {
  return doIt(buildCharacter(options), true);
};

exports.think = function (options) {
  return doIt(buildCharacter(options), false);
};

exports.list = chars.list;

function doIt(options, sayAloud) {
  let charFile;

  if (options.r) {
    const charsList = chars.listSync();
    charFile = charsList[Math.floor(Math.random() * charsList.length)];
  } else {
    charFile = options.f || 'default';
  }

  const char = require(`./characters/${charFile}.js`);
  const face = { thoughts: sayAloud ? chalk.white('\\') : chalk.grey('o') };
  const action = sayAloud ? 'say' : 'think';

  let filledBalloon = balloon[action](
    options._.join(' ') ||
      quotes[Math.floor(Math.random() * quotes.length)] ||
      options.text,
    options.n ? null : options.W
  );

  return filledBalloon + char(face);
}

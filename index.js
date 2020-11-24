const balloon = require('./lib/balloon');
const chars = require('./lib/characters');

const characters = require('./characters');
const chosenCharacter =
  characters[Math.floor(Math.random() * characters.length)];

let quotes;

exports.say = function (options) {
  quotes = require(`./quotes/${
    options.f != 'default' ? options.f : chosenCharacter
  }`);
  options.f = options.f != 'default' ? options.f : chosenCharacter;
  console.log('%c' + options.f.toUpperCase(), 'color: blue;');
  return doIt(options, true);
};

exports.think = function (options) {
  quotes = require(`./quotes/${
    options.f != 'default' ? options.f : chosenCharacter
  }`);
  options.f = options.f != 'default' ? options.f : chosenCharacter;
  return doIt(options, false);
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

  const char = chars.get(charFile);
  const face = { thoughts: sayAloud ? '\\' : 'o' };

  const action = sayAloud ? 'say' : 'think';
  return (
    balloon[action](
      quotes[Math.floor(Math.random() * quotes.length)] ||
        options.text ||
        options._.join(' '),
      options.n ? null : options.W
    ) +
    '\n' +
    char(face)
  );
}

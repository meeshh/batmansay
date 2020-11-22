const balloon = require('./lib/balloon');
const cows = require('./lib/cows');
const faces = require('./lib/faces');

const characters = require('./characters');
const chosenCharacter =
  characters[Math.floor(Math.random() * characters.length)];

const quotes = require(`./quotes/${chosenCharacter}`);

exports.say = function (options) {
  options.f = chosenCharacter;
  return doIt(options, true);
};

exports.think = function (options) {
  options.f = chosenCharacter;
  return doIt(options, false);
};

exports.list = cows.list;

function doIt(options, sayAloud) {
  let cowFile;

  if (options.r) {
    const cowsList = cows.listSync();
    cowFile = cowsList[Math.floor(Math.random() * cowsList.length)];
  } else {
    cowFile = options.f || 'default';
  }

  const cow = cows.get(cowFile);
  const face = faces(options);
  face.thoughts = sayAloud ? '\\' : 'o';

  const action = sayAloud ? 'say' : 'think';
  return (
    balloon[action](
      quotes[Math.floor(Math.random() * quotes.length)] ||
        options.text ||
        options._.join(' '),
      options.n ? null : options.W
    ) +
    '\n' +
    cow(face)
  );
}

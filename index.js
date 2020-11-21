var balloon = require('./lib/balloon');
var cows = require('./lib/cows');
var faces = require('./lib/faces');

var characters = require('./characters');
var chosenCharacter = characters[Math.floor(Math.random() * characters.length)];

var quotes = require(`./quotes/${chosenCharacter}`);

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
  var cowFile;

  if (options.r) {
    var cowsList = cows.listSync();
    cowFile = cowsList[Math.floor(Math.random() * cowsList.length)];
  } else {
    cowFile = options.f || 'default';
  }

  var cow = cows.get(cowFile);
  var face = faces(options);
  face.thoughts = sayAloud ? '\\' : 'o';

  var action = sayAloud ? 'say' : 'think';
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

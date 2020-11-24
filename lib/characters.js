const path = require('path');
const fs = require('fs');
const replacer = require('./replacer');

const textCache = {};
const charactersPath = path.join(__dirname, '../characters');

function characterNamesFromFiles(files) {
  return files.map(function (character) {
    return path.basename(character, '.cow');
  });
}

exports.get = function (character) {
  let text = textCache[character];

  if (!text) {
    let filePath;

    if (character.match(/\\/) || character.match(/\//)) {
      filePath = character;
    } else {
      filePath = path.join(__dirname, '/../characters', character) + '.cow';
    }
    text = fs.readFileSync(filePath, 'utf-8');
    textCache[character] = text;
  }

  return function (options) {
    return replacer(text, options);
  };
};

exports.list = function (callback) {
  return new Promise(function (resolve, reject) {
    fs.readdir(charactersPath, function (err, files) {
      if (err) {
        reject(err);
        callback(err);
      } else {
        resolve(files);
        callback(null, characterNamesFromFiles(files));
      }
    });
  });
};

exports.listSync = function () {
  return characterNamesFromFiles(fs.readdirSync(charactersPath));
};

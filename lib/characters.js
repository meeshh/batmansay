const path = require('path');
const fs = require('fs');

const charactersPath = path.join(__dirname, '../characters');

function characterNamesFromFiles(files) {
  return files.map(function (character) {
    return path.basename(character, '.js');
  });
}

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

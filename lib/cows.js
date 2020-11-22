const path = require('path');
const fs = require('fs');
const replacer = require('./replacer');

const textCache = {};
const cowsPath = path.join(__dirname, '../cows');

function cowNamesFromFiles(files) {
  return files.map(function (cow) {
    return path.basename(cow, '.cow');
  });
}

exports.get = function (cow) {
  let text = textCache[cow];

  if (!text) {
    let filePath;

    if (cow.match(/\\/) || cow.match(/\//)) {
      filePath = cow;
    } else {
      filePath = path.join(__dirname, '/../cows', cow) + '.cow';
    }
    text = fs.readFileSync(filePath, 'utf-8');
    textCache[cow] = text;
  }

  return function (options) {
    return replacer(text, options);
  };
};

exports.list = function (callback) {
  return new Promise(function (resolve, reject) {
    fs.readdir(cowsPath, function (err, files) {
      if (err) {
        reject(err);
        callback(err);
      } else {
        resolve(files);
        callback(null, cowNamesFromFiles(files));
      }
    });
  });
};

exports.listSync = function () {
  return cowNamesFromFiles(fs.readdirSync(cowsPath));
};

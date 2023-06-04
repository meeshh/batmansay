const path = require('path')
const fs = require('fs')

const charactersPath = path.join(__dirname, '../characters')

function characterNamesFromFiles(files) {
  return files.map((character) => {
    return path.basename(character, '.js')
  })
}

exports.list = function list(callback) {
  return new Promise((resolve, reject) => {
    fs.readdir(charactersPath, (err, files) => {
      if (err) {
        reject(err)
        callback(err)
      } else {
        resolve(files)
        callback(null, characterNamesFromFiles(files))
      }
    })
  })
}

exports.listSync = () => {
  return characterNamesFromFiles(fs.readdirSync(charactersPath))
}

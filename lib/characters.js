import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const charactersPath = path.join(__dirname, '../characters');

function characterNamesFromFiles(files) {
  return files.map((character) => {
    return path.basename(character, '.js');
  });
}

export function list(callback) {
  return new Promise((resolve, reject) => {
    fs.readdir(charactersPath, (err, files) => {
      if (err) {
        reject(err);
        callback(err);
      } else {
        resolve(files);
        callback(null, characterNamesFromFiles(files));
      }
    });
  });
}

export const listSync = () => {
  return characterNamesFromFiles(fs.readdirSync(charactersPath));
};

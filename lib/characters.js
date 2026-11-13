import fs from 'node:fs';
import { readdir } from 'node:fs/promises';
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

export async function list() {
  return characterNamesFromFiles(await readdir(charactersPath));
}

export const listSync = () => {
  return characterNamesFromFiles(fs.readdirSync(charactersPath));
};

// Prints a character's art without colours under a column ruler, with each
// line's mid-point on the right, so skew and trailing whitespace are visible.
// Blank lines, such as the one the template's opening chalk call leaves, are
// not counted as trailing whitespace.
// Usage: yarn preview <name>
import { stripVTControlCharacters } from 'node:util';
import { listSync } from '../lib/characters.js';

const name = process.argv[2];
const names = listSync();

if (!names.includes(name)) {
  console.error(`Usage: yarn preview <name>\nCharacters: ${names.join(', ')}`);
  process.exit(1);
}

const { default: render } = await import(`../characters/${name}.js`);
const lines = stripVTControlCharacters(render({ thoughts: '\\' })).split('\n');
const width = Math.max(...lines.map((line) => line.length));

const columns = Array.from({ length: width }, (_, i) => i + 1);
console.log(columns.map((col) => (col % 10 ? ' ' : (col / 10) % 10)).join(''));
console.log(columns.map((col) => col % 10).join(''));

let trailing = 0;
for (const line of lines) {
  const first = line.search(/\S/);
  const mid = first === -1 ? '' : (first + line.trimEnd().length + 1) / 2;
  const flag = /\S\s+$/.test(line) ? '  ⏎ trailing' : '';
  if (flag) trailing++;
  console.log(`${line.padEnd(width)}  │ ${mid}${flag}`);
}

if (trailing) {
  console.error(`\n${trailing} line(s) with trailing whitespace`);
  process.exit(1);
}

import assert from 'node:assert/strict';
import { readdirSync } from 'node:fs';
import path from 'node:path';
import { test } from 'node:test';
import { stripVTControlCharacters } from 'node:util';
import characters from '../characters.js';

const root = path.join(import.meta.dirname, '..');
const filesIn = (dir) =>
  readdirSync(path.join(root, dir)).map((file) => path.basename(file, '.js'));

const registered = characters.map(([name]) => name);
// The default character borrows batman's quotes.
const withQuotes = registered.filter((name) => name !== 'default');

test('every registered character has a character file and vice versa', () => {
  assert.deepEqual([...registered].sort(), filesIn('characters').sort());
});

test('every registered character has a quotes file and vice versa', () => {
  assert.deepEqual([...withQuotes].sort(), filesIn('quotes').sort());
});

test('weights are integers from 0 to 10', () => {
  for (const [name, weight] of characters) {
    assert.ok(
      Number.isInteger(weight) && weight >= 0 && weight <= 10,
      `${name} has weight ${weight}`,
    );
  }
});

for (const name of registered) {
  test(`${name} renders`, async () => {
    const { default: render } = await import(`../characters/${name}.js`);
    const art = stripVTControlCharacters(render({ thoughts: '\\' }));
    assert.ok(art.includes('\\'));
    assert.ok(art.trim().length > 0);
  });
}

// Older art predating the trailing-whitespace check. Lines that are only
// whitespace, like the one before each template's opening chalk call, are fine.
const legacyTrailingWhitespace = new Set([
  'alfred',
  'batgirl',
  'batman',
  'bloom',
  'bruce',
  'freeze',
  'harleyquinn',
  'ivy',
  'jim',
  'joker',
  'penguin',
  'pyg',
  'rasalghul',
  'riddler',
  'robin',
  'scarecrow',
  'twoface',
]);

for (const name of registered.filter((n) => !legacyTrailingWhitespace.has(n))) {
  test(`${name} has no trailing whitespace`, async () => {
    const { default: render } = await import(`../characters/${name}.js`);
    const lines = stripVTControlCharacters(render({ thoughts: '\\' })).split(
      '\n',
    );
    lines.forEach((line, i) => {
      assert.doesNotMatch(line, /\S\s+$/, `line ${i + 1}: ${line}`);
    });
  });
}

for (const name of withQuotes) {
  test(`${name} has quotes`, async () => {
    const { default: quotes } = await import(`../quotes/${name}.js`);
    assert.ok(Array.isArray(quotes) && quotes.length > 0);
    for (const quote of quotes) {
      assert.equal(typeof quote, 'string');
      assert.ok(quote.trim().length > 0);
    }
  });
}

import assert from 'node:assert/strict';
import { test } from 'node:test';
import { stripVTControlCharacters } from 'node:util';
import stringWidth from 'string-width';
import { say, think } from '../lib/balloon.js';

const rows = (balloon) => stripVTControlCharacters(balloon).split('\n');

test('a short message fits on one line', () => {
  const lines = rows(say('hi'));
  assert.equal(lines.length, 3);
  assert.equal(lines[1].trim(), 'hi');
});

test('wraps at the given column', () => {
  const lines = rows(say('abcdefghij', 5));
  assert.deepEqual(
    lines.slice(1, -1).map((line) => line.trim()),
    ['abcde', 'fghij'],
  );
});

test('breaks on newlines', () => {
  const lines = rows(think('one\ntwo'));
  assert.deepEqual(
    lines.slice(1, -1).map((line) => line.trim()),
    ['one', 'two'],
  );
});

test('pads every line of a multi-line balloon to the same width', () => {
  const widths = new Set(rows(say('a\nlonger line\nmid')).map(stringWidth));
  assert.equal(widths.size, 1);
});

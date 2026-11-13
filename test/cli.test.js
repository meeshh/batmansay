import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { test } from 'node:test';
import { stripVTControlCharacters } from 'node:util';

const cli = path.join(import.meta.dirname, '..', 'cli.js');

function run(args, input = '') {
  const result = spawnSync(process.execPath, [cli, ...args], {
    input,
    encoding: 'utf8',
  });
  assert.equal(result.status, 0, result.stderr);
  return stripVTControlCharacters(result.stdout);
}

test('-l lists the characters', () => {
  const names = run(['-l']).trim().split('\n');
  assert.ok(names.includes('joker'));
  assert.ok(names.includes('redhood'));
  for (const name of ['madhatter', 'deathstroke', 'killercroc']) {
    assert.ok(names.includes(name), `missing ${name}`);
  }
});

test('-f joker says the given text', () => {
  const out = run(['-f', 'joker', 'hi']);
  assert.match(out, /JOKER/);
  assert.match(out, / hi /);
});

test('--think works with a character', () => {
  assert.match(run(['--think', '-f', 'redhood', 'hi']), /REDHOOD/);
});

test('reads the message from stdin', () => {
  assert.match(run(['-f', 'batman'], 'piped text\n'), / piped text /);
});

test('-r shows a character', () => {
  assert.ok(run(['-r', 'hi']).length > 0);
});

test('--help lists every flag', () => {
  const help = run(['--help']);
  for (const flag of ['-f', '-l', '-r', '-n', '-W', '--think']) {
    assert.ok(help.includes(flag), `missing ${flag}`);
  }
});

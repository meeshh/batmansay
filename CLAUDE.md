# batmansay

A cowsay-style CLI (`batmansay` / `batmanthink`) that prints Batman characters
with their quotes. Entry points: `cli.js` (yargs CLI), `index.js` (library),
`lib/balloon.js` (speech balloon), `lib/characters.js` (lists `characters/`).

## Commands

Yarn 4 via Corepack (`corepack enable`); never use npm for dependencies.

- `yarn install`: install dependencies
- `yarn lint`: Biome lint and format check (`biome check .`)
- `yarn format`, or `yarn biome check --write .`, to fix
- `yarn test`: `node --test`, which runs `test/*.test.js`
- `echo hi | node cli.js -f joker`: try the CLI
- `yarn preview joker`: print a character's art without colours under a
  column ruler, with each line's mid-point; exits 1 on trailing whitespace

Run `yarn lint && yarn test` before every commit.

## Conventions

- ESM only (`"type": "module"`): use `import`/`export default`, never
  `require`/`module.exports`. Node 22 or newer.
- Tests use `node:test` and `node:assert/strict` only, with no test framework.
  Strip colours with `stripVTControlCharacters` from `node:util` before asserting.
- Formatting: 2 spaces, single quotes, width 80 (see `biome.json`).

## Adding a character

All three are required; `test/characters.test.js` fails if any is missing.

1. `characters/<name>.js`: a default-exported function `({ thoughts }) => art`
   returning a template string with the ASCII art, with `${thoughts}` on the
   lines leading to the balloon. Colour it with `chalk`. Keep each line's
   leading spaces in one place, not split between plain text and a `chalk`
   call, and leave no trailing whitespace (tested). Check it with
   `yarn preview <name>`: the outline should mirror around one centre column.
2. `quotes/<name>.js`: `export default [...]`, an array of non-empty strings.
3. `characters.js`: add `['<name>', weight]`.

Weights are integers from 0 to 10: 0 is the rarest, 10 the most common. The
banner shows `11 - weight` stars, so rarer characters get more stars.
`default` is the one entry without a quotes file; it borrows batman's.

## Releasing

Merging or pushing never publishes: only a published GitHub release does.
`.github/workflows/npm-publish.yml` lints, tests and publishes with npm trusted
publishing (OIDC and provenance); there is no npm token. The repo and
`npm-publish.yml` must be listed under Trusted publishers on npmjs.com.

1. Bump `version` in `package.json` on `develop` (check `npm view batmansay
   version` first) and push.
2. `gh pr create --base main --head develop --title "Release vX.Y.Z" --fill`
3. `gh pr checks --watch`, then `gh pr merge --merge`
4. `gh release create vX.Y.Z --target main --generate-notes`
5. `gh run watch`; on failure, `gh run view --log-failed`

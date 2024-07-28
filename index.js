const chalk = require('chalk')
const balloon = require('./lib/balloon')
const chars = require('./lib/characters')

const characters = require('./characters')

const DEFAULT = 'batman'

const chooseRandom = (data) => {
  let total = 0
  // eslint-disable-next-line no-restricted-syntax
  for (const char of data) {
    total += char[1]
  }

  const threshold = Math.random() * total
  total = 0
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < data.length - 1; ++i) {
    total += data[i][1]
    if (total >= threshold) {
      return data[i]
    }
  }

  return data[data.length - 1]
}

const [chosenCharacter, chosenWeight] = chooseRandom(characters)

let quotes

function buildCharacter(options) {
  let ofCharacter
  if (options.f !== 'default' && chars.listSync().indexOf(options.f) !== -1) {
    ofCharacter = options.f
  } else if (options.f === 'default' || chosenCharacter === 'default') {
    ofCharacter = DEFAULT
  } else {
    ofCharacter = chosenCharacter
  }
  quotes = require(`./quotes/${ofCharacter}`)

  const stars = options.f ? '* NOT AVAILABLE WITH -f option' : 11 - chosenWeight

  // eslint-disable-next-line no-param-reassign
  options.f =
    chars.listSync().indexOf(options.f) !== -1 ? options.f : chosenCharacter
  console.log(
    chalk.bgRed.white(
      options.f === 'default'
        ? ` ${DEFAULT.toUpperCase()} `
        : ` ${options.f.toUpperCase()} `
    ),
    chalk.bgYellow.black(
      ` ${Number.isNaN(stars) ? stars : '⭐'.repeat(stars)} `
    )
  )
  return options
}

exports.list = chars.list

async function selectQuote() {
  // return selectedQuote
  return quotes[Math.floor(Math.random() * quotes.length)]
}

async function doIt(options, sayAloud) {
  let charFile

  if (options.r) {
    const charsList = chars.listSync()
    charFile = charsList[Math.floor(Math.random() * charsList.length)]
  } else {
    charFile = options.f || 'default'
  }

  const char = require(`./characters/${charFile}.js`)
  const face = { thoughts: sayAloud ? chalk.white('\\') : chalk.grey('o') }
  const action = sayAloud ? 'say' : 'think'

  // handle the selected quote.
  const myQuote = await selectQuote()

  const filledBalloon = balloon[action](
    options._.join(' ') ||
      // quotes[Math.floor(Math.random() * quotes.length)] ||
      myQuote.trim() ||
      options.text,
    options.n ? null : options.W
  )

  return filledBalloon + char(face)
}

exports.say = async function say(options) {
  const res = await doIt(buildCharacter(options), true)
  console.log(res)
}

exports.think = async function think(options) {
  const res = await doIt(buildCharacter(options), false)
  console.log(res)
}

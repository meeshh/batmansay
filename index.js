const chalk = require('chalk')
const { Configuration, OpenAIApi } = require('openai')
const balloon = require('./lib/balloon')
const chars = require('./lib/characters')

const characters = require('./characters')

const DEFAULT = 'batman'

const configuration = new Configuration({
  apiKey: process.env.TOKEN_OPENAI,
})

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

async function generateAIText(character) {
  const openai = new OpenAIApi(configuration)
  return openai
    .createCompletion({
      model: 'text-davinci-003',
      prompt: `get me a random quote of ${character} from the batman universe but return to me only the words that they said`,
      temperature: 0.9,
      top_p: 1,
      frequency_penalty: 0,
      max_tokens: 2048,
      presence_penalty: -1.0,
    })
    .then((response) => {
      return response.data.choices[0].text
    })
    .catch((error) => {
      console.log(error)
    })
}

async function selectQuote(character) {
  let selectedQuote
  if (process.env.TOKEN_OPENAI) {
    selectedQuote = await generateAIText(character)
  } else {
    selectedQuote = quotes[Math.floor(Math.random() * quotes.length)]
  }

  return selectedQuote
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
  // if process.env does not exist, then get from array of quotes
  // if it exists, generate from open ai with a fallback on error to select from the array of quotes
  const myQuote = await selectQuote(charFile)

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

function extractTheChar(character) {
  const char = character
    .replace(/\r\n?|[\n\u2028\u2029]/g, '\n')
    .replace(/^\uFEFF/, '')
  const match = /\$the_character\s*=\s*<<"*EOC"*;*\n([\s\S]+)\nEOC\n/.exec(char)

  if (!match) {
    console.error('Cannot parse character file\n', char)
    return char
  }
  return match[1]
    .replace(/\\{2}/g, '\\')
    .replace(/\\@/g, '@')
    .replace(/\\\$/g, '$')
}

module.exports = (character, variables) => {
  let char = character
  if (character.indexOf('$the_character') !== -1) {
    char = extractTheChar(character)
  }

  return char.replace(/\$thoughts/g, variables.thoughts)
}

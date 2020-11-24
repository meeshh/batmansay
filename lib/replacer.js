module.exports = function (char, variables) {
  if (char.indexOf('$the_character') !== -1) {
    char = extractTheChar(char);
  }

  return char.replace(/\$thoughts/g, variables.thoughts);
};

function extractTheChar(char) {
  char = char.replace(/\r\n?|[\n\u2028\u2029]/g, '\n').replace(/^\uFEFF/, '');
  const match = /\$the_character\s*=\s*<<"*EOC"*;*\n([\s\S]+)\nEOC\n/.exec(
    char
  );

  if (!match) {
    console.error('Cannot parse character file\n', char);
    return char;
  } else {
    return match[1]
      .replace(/\\{2}/g, '\\')
      .replace(/\\@/g, '@')
      .replace(/\\\$/g, '$');
  }
}

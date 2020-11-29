const chalk = require('chalk');
const stringWidth = require('string-width');

exports.say = function (text, wrap) {
  return chalk.bgWhite.black(format(text, wrap));
};

exports.think = function (text, wrap) {
  return chalk.bgGrey.black(format(text, wrap));
};

function format(text, wrap) {
  const lines = split(text, wrap);
  const maxLength = max(lines);

  let balloon;
  if (lines.length === 1) {
    balloon = [
      ' ' + top(maxLength) + ' ',
      ' ' + lines[0] + '   ',
      ' ' + bottom(maxLength) + ' ',
    ];
  } else {
    balloon = [' ' + top(maxLength) + ' '];

    for (let i = 0, len = lines.length; i < len; i += 1) {
      balloon.push(' ' + pad(lines[i], maxLength) + ' ');
    }

    balloon.push(' ' + bottom(maxLength) + ' ');
  }

  return balloon.join('\n');
}

function split(text, wrap) {
  let lines = [];
  if (!wrap) {
    lines = text.split('\n');
  } else {
    let start = 0;
    while (start < text.length) {
      let nextNewLine = text.indexOf('\n', start);

      const wrapAt = Math.min(
        start + wrap,
        nextNewLine === -1 ? text.length : nextNewLine
      );

      lines.push(text.substring(start, wrapAt));
      start = wrapAt;

      // Ignore next new line
      if (text.charAt(start) === '\n') {
        start += 1;
      }
    }
  }

  return lines;
}

function max(lines) {
  let max = 0;
  for (let i = 0, len = lines.length; i < len; i += 1) {
    if (stringWidth(lines[i]) > max) {
      max = stringWidth(lines[i]);
    }
  }

  return max;
}

function pad(text, length) {
  return text + new Array(length - stringWidth(text) + 1).join(' ');
}

function top(length) {
  return new Array(length + 3).join(' ');
}

function bottom(length) {
  return new Array(length + 3).join(' ');
}

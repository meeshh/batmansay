import chalk from 'chalk';

export default ({ thoughts }) => `
       ${thoughts}
        ${thoughts}
        ${chalk.white(`
${chalk.magenta('            .################################.')}
${chalk.magenta('            ##%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@##')}
${chalk.magenta('            ##%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@##')}
${chalk.magenta('            ##%.%.%.%.%.%.%.%.%.%.%.%.%.%.%.##')}
${chalk.magenta('            ##%@%@%@%@%@%@%@%@%@%@%@%@%@%@%@##')}
${chalk.magenta('             ##%@%@%@%@%@%@%@%@%@%@%@%@%@%@##')}
${chalk.magenta('             ##%.%.%.%.%.%.%.%.%.%.%.%.%.%.##')}
${chalk.magenta('             ##%@%@%@%@%@%@%@%@%@%@%@%@%@%@##')}
${chalk.magenta('             ##%@%@%@%@%@%@%@%@%@%@%@%@%@%@##')}
${chalk.magenta('             ##%.%.%.%.%.%.%.%.%.%.%.%.%.%.##')}
${chalk.magenta('              ##%@%@%@%@%@%@%@%@%@%@%@%@%@##')}
${chalk.magenta('              ##%@%@%@%@%@%@%@%@%@%@%@%@%@##')}
${chalk.magenta('              ##%.%.%.%.%.%.%.%.%.%.%.%.%.##')}
${chalk.magenta('              ##%@%@%@%@%@%@%@')}${chalk.white('=======')}${chalk.magenta('@%@%@##')}
              ${chalk.magenta('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')}
              ${chalk.yellow('================')}${chalk.white('.......')}${chalk.yellow('=======')}
              ${chalk.yellow('================')}${chalk.black.bgWhite(' 10/6 ')}${chalk.yellow('=')}${chalk.yellow('=======')}
              ${chalk.yellow('================')}${chalk.white('.......')}${chalk.yellow('=======')}
              ${chalk.magenta('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')}
    ${chalk.magenta('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')}
      ${chalk.magenta('##############################################')}
    ${chalk.yellowBright('%@%@%@%@%@%@%')}   ..................   ${chalk.yellowBright('@%@%@%@%@%@')}
  ${chalk.yellowBright('%@%@%@%@%@%@%@@')}   ..................   ${chalk.yellowBright('@%@%@%@%@%@%@')}
${chalk.yellowBright('%@%@%@%@%@%@%@@%@')}   ...@@@@....@@@@...   ${chalk.yellowBright('@%@%@%@%@%@%@%%')}
${chalk.yellowBright('%@%@%@%@%@%@%@@%@')}   ...=##=....=##=...   ${chalk.yellowBright('@%@%@%@%@%@%@%%@%')}
${chalk.yellowBright('%@%@%@%@%@%@%@@%@')}   ..................   ${chalk.yellowBright('@%@%@%@%@%@%@%%@%')}
  ${chalk.yellowBright('%@%@%@%@%@%@%@@')}   ........##........   ${chalk.yellowBright('@%@%@%@%@%@%@%%@%')}
  ${chalk.yellowBright('%@%@%@%@%@%@%@@')}   ......=###=.......   ${chalk.yellowBright('@%@%@%@%@%@%@%%')}
    ${chalk.yellowBright('%@%@%@%@%@%@%')}   ......=###=.......   ${chalk.yellowBright('@%@%@%@%@%@%@%%')}
    ${chalk.yellowBright('%@%@%@%@%@%@%')}   .......###........   ${chalk.yellowBright('@%@%@%@%@%@%@')}
      ${chalk.yellowBright('%@%@%@%@%@%')}   ....%%%%%%%%%%....   ${chalk.yellowBright('@%@%@%@%@%@')}
        ${chalk.yellowBright('%@%@%@%@%')}   ....%==.==..%%....   ${chalk.yellowBright('@%@%@%@%@%@')}
                      ...%%%%%%%%...     ${chalk.yellowBright('@%@%@%@%@')}
                         ........
              ${chalk.white('###')}       ${chalk.white('====')}  ${chalk.white('====')}       ${chalk.white('###')}
            ${chalk.white('#####')}        ${chalk.red('@@@%%@@@')}        ${chalk.white('#####')}
          ${chalk.white('########')}      ${chalk.red('@@@@%%@@@@')}      ${chalk.white('########')}
        ${chalk.white('##########')}      ${chalk.red('@@@@%%@@@@')}      ${chalk.white('##########')}
      ${chalk.white('############')}        ${chalk.red('@@@@@@')}        ${chalk.white('############')}
    ${chalk.white('###############')}                    ${chalk.white('###############')}
`)}
`;

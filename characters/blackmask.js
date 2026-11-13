import chalk from 'chalk';

export default ({ thoughts }) => `
       ${thoughts}
        ${thoughts}
        ${chalk.gray(`
             _.-${chalk.whiteBright('===========')}-._
           (        .:.        )
           (  _____     _____  )
           (  (###)  ^  (###)  )
           (  (###)     (###)  )
           (   '''  (:)  '''   )
           (   ' '       ' '   )
            (${chalk.whiteBright('=|=|=|=|=|=|=|=|=')})
            (${chalk.whiteBright('|_|_|_|_|_|_|_|_|')})
             '-.___________.-'
                 '-.___.-'
                  ${chalk.blackBright('.-')}${chalk.white('[')}${chalk.red('V')}${chalk.white(']')}${chalk.blackBright('-.')}
              ${chalk.blackBright('_.-~|')}${chalk.white('|')}${chalk.red('(#)')}${chalk.white('|')}${chalk.blackBright('|~-._')}
          ${chalk.blackBright("_.-~'''||")}${chalk.white('|')}${chalk.red('{#}')}${chalk.white('|')}${chalk.blackBright("||'''~-._")}
        ${chalk.blackBright("_.-~'''''||")}${chalk.white('|')}${chalk.red('|#|')}${chalk.white('|')}${chalk.blackBright("||'''''~-._")}
      ${chalk.blackBright("|~'''''''''||")}${chalk.white('|')}${chalk.red('|#|')}${chalk.white('|')}${chalk.blackBright("||'''''''''~|")}
      ${chalk.blackBright('|          ||')}${chalk.white('|')}${chalk.red('|#|')}${chalk.white('|')}${chalk.blackBright('||          |')}
      ${chalk.blackBright('|  ')}${chalk.white('[#]')}${chalk.blackBright('     ||')}${chalk.white('|')}${chalk.red('|#|')}${chalk.white('|')}${chalk.blackBright('||          |')}
      ${chalk.blackBright('|          ||')}${chalk.white('|')}${chalk.red('(#)')}${chalk.white('|')}${chalk.blackBright('||          |')}
      ${chalk.blackBright('|          ||')}${chalk.white('|')}${chalk.red(' V ')}${chalk.white('|')}${chalk.blackBright('||          |')}
      ${chalk.blackBright("'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'")}
`)}
`;

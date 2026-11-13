import chalk from 'chalk';

export default ({ thoughts }) => `
       ${thoughts}
        ${thoughts}
        ${chalk.blackBright(`
          ./*#@@@@@@@@@@@@@@@@@@@@@@@#*\\.
         /#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#\\
        /@@@##@@@@@@@@@@@@@@@@@@@@@@@##@@@\\
       /@@@@#*:.:*#@@@@@@@@@@@@@#*:.:*#@@@@\\
      /@@@#*+:.    .:*#@@@@@#*:.    .:+*#@@@\\
      |@@#*${chalk.white('+:.')}       ${chalk.white('..:')}*#*${chalk.white(':..')}       ${chalk.white('.:+')}*#@@|
      |@#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#@|
      |@#@@@${chalk.white('=--==:-')}@@@@@@@@@@@@@${chalk.white('-:==--=')}@@@#@|
      \\@#@@@@@${chalk.white(':-=:.')}@@@@@@@@@@@@@${chalk.white('.:=-:')}@@@@@#@/
       \\#${chalk.white('+-:..')}     ${chalk.white('..:-=+:+=-:..')}     ${chalk.white('..:-+')}#/
        \\#${chalk.white('=-:.')}     ${chalk.white('.:-=+')}*${chalk.white('=')}*${chalk.white('+=-:.')}     ${chalk.white('.:-=')}#/
         \\#${chalk.white('=:.')}     ${chalk.white('..:-=')}*${chalk.white('+')}*${chalk.white('=-:..')}     ${chalk.white('.:=')}#/
          \\#${chalk.white('+-:.')}    ${chalk.white('.:-=+.+=-:.')}    ${chalk.white('.:-+')}#/
           \\#${chalk.white('+=-:.')}  ${chalk.white('.:--===--:.')}  ${chalk.white('.:-=+')}#/
            \\#*${chalk.white('+:.')}    ${chalk.white('..:.:..')}    ${chalk.white('.:+')}*#/
              \\#*${chalk.white('=-:..')} ${chalk.white('..:..')} ${chalk.white('..:-=')}*#/
           ___/@#*+-:.  .:.  .:-+*#@\\___
     _.-/@@@@@@@@@@#*+:.   .:+*#@@@@@@@@@@\\-._
  |${chalk.blueBright('\\~~========~')}@@@@@@@@@@@@@@@@@@@@@${chalk.blueBright('~========~~/')}|
  |@@@${chalk.blueBright('\\~~=======~')}@@@@@@@@@@@@@@@@@${chalk.blueBright('~=======~~/')}@@@|
  |@@@@@@${chalk.blueBright('\\~~======~')}@@@@@@@@@@@@@${chalk.blueBright('~======~~/')}@@@@@@|
  |@@@@@@@@@${chalk.blueBright('\\~~=====~')}@@@@@@@@@${chalk.blueBright('~=====~~/')}@@@@@@@@@|
  |@@@@@@@@@@@@${chalk.blueBright('\\~~====~')}@@@@@${chalk.blueBright('~====~~/')}@@@@@@@@@@@@|
  |@@@@@@@@@@@@@@@${chalk.blueBright('\\~~===~~~===~~/')}@@@@@@@@@@@@@@@|
  |@@@@@@@@@@@@@@@@@@${chalk.blueBright('\\~~===~~/')}@@@@@@@@@@@@@@@@@@|
  |@@@@@@@@@@@@@@@@@@@@${chalk.blueBright('\\\\~//')}@@@@@@@@@@@@@@@@@@@@|
  |@@@@@@@@@@@@@@@@@@@@@@${chalk.blueBright('V')}@@@@@@@@@@@@@@@@@@@@@@|
   \\@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/
`)}
`;

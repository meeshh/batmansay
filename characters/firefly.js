import chalk from 'chalk';

const orange = chalk.hex('#ff8c00');
const olive = chalk.hex('#6b8e23');
const green = chalk.hex('#7cfc00');

export default ({ thoughts }) => `
       ${thoughts}
        ${thoughts}
        ${olive(`
                   ${orange('.:-=+**')}#${orange('**+=-:.')}
                ${orange('.:=+*##@@@')}#${orange('@@@##*+=:.')}
              ${orange('.=*#@@@@@@@@')}#${orange('@@@@@@@@#*=.')}
             ${orange(':+#@@@#****#@')}#${orange('@#****#@@@#+:')}
${chalk.gray('.')}           ${orange('=#@@#*+==++*#@')}#${orange('@#*++==+*#@@#=')}           ${chalk.gray('.')}
${chalk.gray(':#')}          ${orange('@##@@@@@@@@@#@#@#@@@@@@@@@##@')}          ${chalk.gray('#:')}
${chalk.gray('=##.')}        ${orange('@#@')}${green('##*+==+*#')}${orange('@#@#@')}${green('#*+==+*##')}${orange('@#@')}        ${chalk.gray('.##=')}
${chalk.gray('.*##=')}       ${orange('@#@')}${green('#=:.  .:=')}${orange('@#@#@')}${green('=:.  .:=#')}${orange('@#@')}       ${chalk.gray('=##*.')}
 ${chalk.gray('=###*.')}     ${orange('@#@')}${green('#-.    .-')}${orange('@#@#@')}${green('-.    .-#')}${orange('@#@')}     ${chalk.gray('.*###=')}
 ${chalk.gray('.*###=')}     ${orange('@#@')}${green('##*+==+*#')}${orange('@#@#@')}${green('#*+==+*##')}${orange('@#@')}     ${chalk.gray('=###*.')}
  ${chalk.gray('=###*-')}    ${orange('#@#@@@@@@@@@#@@@#@@@@@@@@@#@#')}    ${chalk.gray('-*###=')}
  ${chalk.gray('.*###+')}     #*+=-:..:-=${chalk.gray('#####')}=-:..:-=+*#     ${chalk.gray('+###*.')}
   ${chalk.gray('=###*:')}     #*+=-:.:-${chalk.gray('#=#=#=#')}-:.:-=+*#     ${chalk.gray(':*###=')}
   ${chalk.gray('.*###+')}      #*+=-::${chalk.gray('#=#=#=#=#')}::-=+*#      ${chalk.gray('+###*.')}
    ${chalk.gray('=###*.')}       #*+=-:${chalk.gray('###@###')}:-=+*#       ${chalk.gray('.*###=')}
    ${chalk.gray('.*###=')}         #*+==-:::-==+*#         ${chalk.gray('=###*.')}
     ${chalk.gray('=###*')}    .:-=+*#${orange('@####@####@')}#*+=-:.    ${chalk.gray('*###=')}
     ${chalk.gray('.=#')}  .:=+*#@@#*+=-:${orange('@#@#@')}:-=+*#@@#*+=:.  ${chalk.gray('#=.')}
   .:=+*#@@@@#*+=-:.${orange('@#')}:-=+#+=-:${orange('#@')}.:-=+*#@@@@#*+=:.
 .:=+*##@@@@#*+=-:.${orange('@#')}.:-=+#+=-:.${orange('#@')}.:-=+*#@@@@##*+=:.
.:=+*##@@@@#*+=-:.${orange('@#')}..:-=+#+=-:..${orange('#@')}.:-=+*#@@@@##*+=:.
.=+*##@@@@@#*+=-:..${orange('@#')}.:-=+#+=-:.${orange('#@')}..:-=+*#@@@@@##*+=.
:+*##@@@@@#*+=-:..:${orange('@#')}::-=+#+=-::${orange('#@')}:..:-=+*#@@@@@##*+:
=*##@@@@@#*+=-:..:-${orange('@#')}:-=+*#*+=-:${orange('#@')}-:..:-=+*#@@@@@##*=
+##@@@@@#*+=-:..:-=${orange('@#')}-=+**#**+=-${orange('#@')}=-:..:-=+*#@@@@@##+
*#@@@@@#*+=-:..:-=+${orange('@#')}=+*##@##*+=${orange('#@')}+=-:..:-=+*#@@@@@#*
  ${chalk.gray('.#@@#.                                     .#@@#.')}
   ${chalk.yellow("'")}${chalk.red('*')}${chalk.yellow("'                                         '")}${chalk.red('*')}${chalk.yellow("'")}
    ${chalk.red('.                                           .')}
`)}
`;

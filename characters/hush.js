import chalk from 'chalk';

export default ({ thoughts }) => `
       ${thoughts}
        ${thoughts}
        ${chalk.white(`
                ${chalk.gray('_.-=')}#=-:..:-=#${chalk.gray('=-._')}
             ${chalk.gray('/#*=')}-:.-#=-::-=#-.:-${chalk.gray('=*#\\')}
           ${chalk.gray('/#*+')}.-#=-:.-#==#-.:-=#-.${chalk.gray('+*#\\')}
          ${chalk.gray('/#*')}#=-:.-#=-:.--.:-=#-.:-=#${chalk.gray('*#\\')}
          ${chalk.gray('|#*')}-:.-#=-:.-#==#-.:-=#-.:-${chalk.gray('*#|')}
          ${chalk.gray('|#*')}.-#=-:.-#=-::-=#-.:-=#-.${chalk.gray('*#|')}
          ${chalk.gray('|#*')}=${chalk.blackBright('.-@@@@-.')}#=--=#${chalk.blackBright('.-@@@@-.')}=${chalk.gray('*#|')}
          ${chalk.gray('|#*')}=${chalk.blackBright('#@@@@@@#')}-:..:-${chalk.blackBright('#@@@@@@#')}=${chalk.gray('*#|')}
          ${chalk.gray('|#*')}=${chalk.blackBright('@@@@@@@@')}.-##-.${chalk.blackBright('@@@@@@@@')}=${chalk.gray('*#|')}
          ${chalk.gray('|#*')}=${chalk.blackBright('#@@@@@@#')}#=--=#${chalk.blackBright('#@@@@@@#')}=${chalk.gray('*#|')}
          ${chalk.gray('|#*')}=${chalk.blackBright('.-@@@@-.')}-:..:-${chalk.blackBright('.-@@@@-.')}=${chalk.gray('*#|')}
          ${chalk.gray('|#*')}.-#=-:.-#=-::-=#-.:-=#-.${chalk.gray('*#|')}
       ${chalk.hex('#6b4f2a')('/@#')}${chalk.gray('|#*')}#=-:.-#=-:.--.:-=#-.:-=#${chalk.gray('*#|')}${chalk.hex('#6b4f2a')('#@\\')}
     ${chalk.hex('#6b4f2a')('/@@#+')}${chalk.gray('|#*')}-:.-#=-:.-#==#-.:-=#-.:-${chalk.gray('*#|')}${chalk.hex('#6b4f2a')('+#@@\\')}
   ${chalk.hex('#6b4f2a')('/@@@##*+')}${chalk.gray('\\#*')}.-#=-:.-#=--=#-.:-=#-.${chalk.gray('*#/')}${chalk.hex('#6b4f2a')('+*##@@@\\')}
  ${chalk.hex('#6b4f2a')('|@@@#*#+*')}${chalk.gray('\\#*')}#=-:.-#=-:..:-=#-.:-=#${chalk.gray('*#/')}${chalk.hex('#6b4f2a')('*+#*#@@@|')}
  ${chalk.hex('#6b4f2a')('|@@##*#+*#*')}${chalk.gray('\\:')}-:.-#=-:.--.:-=#-.:-${chalk.gray(':/')}${chalk.hex('#6b4f2a')('*#*+#*##@@|')}
  ${chalk.hex('#6b4f2a')('\\@@#*#+*#*+=')}${chalk.gray('\\:')}.-#=-:.-##-.:-=#-.${chalk.gray(':/')}${chalk.hex('#6b4f2a')('=+*#*+#*#@@/')}
  ${chalk.hex('#6b4f2a')('/@##*@#+*#*@')}.:-.:-\\        /-:.-:.${chalk.hex('#6b4f2a')('@*#*+#@*##@\\')}
 ${chalk.hex('#6b4f2a')('/@#*@#+*#*@#+*')}.:-.:-\\      /-:.-:.${chalk.hex('#6b4f2a')('*+#@*#*+#@*#@\\')}
${chalk.hex('#6b4f2a')('|@#@#+*#*@#+*#*@')}.:-.:-\\    /-:.-:.${chalk.hex('#6b4f2a')('@*#*+#@*#*+#@#@|')}
${chalk.hex('#6b4f2a')('|@##+*#*@#+*#*@#+')}.:-.:-\\  /-:.-:.${chalk.hex('#6b4f2a')('+#@*#*+#@*#*+##@|')}
${chalk.hex('#6b4f2a')('|@#+*#*@#+*#*@#+*#')}.:-.:-\\/-:.-:.${chalk.hex('#6b4f2a')('#*+#@*#*+#@*#*+#@|')}
${chalk.hex('#6b4f2a')('|@#*#*@#+*#*@#+*#*@#+*#*')}**${chalk.hex('#6b4f2a')('*#*+#@*#*+#@*#*+#@*#*#@|')}
${chalk.hex('#6b4f2a')('|@#*@#+*#*@#+*#*@#+*#*@#')}**${chalk.hex('#6b4f2a')('#@*#*+#@*#*+#@*#*+#@*#@|')}
`)}
`;

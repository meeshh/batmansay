/* eslint-disable prettier/prettier */
const chalk = require('chalk')

module.exports = ({ thoughts }) => `
              ${thoughts}
               ${thoughts}
                ${chalk.white(`                               
                                  ..........
                           ..........,;;,..........
                       .......       .''.       .......
                    .....            .,,.            .....
                  ....               .,,.               ....
                .'.                  .;;.                  .'.
              .'.                    .;;.                    .'.
             .'.                     .,,.                     .'.
            .'.                      .''.                      .'.
           .'.                       .''.                       .'.
           '.                        .''.                        .'
          .'.       ..               .''.               ..       .'.
          '.       .:,               .,,.               ,:.       .'
         .'.      'cc,               .;;.               ,cc'      .'.
         .'     .,:;:;.              .;;.              .;:;:,.     '.
         '.    .,:..,:.              .,,.              .:,..:,.    .'
        .'.    ':'${chalk.bgRed('  ')}.;:'             ....             ':;.${chalk.bgRed('  ')}':'    .'.
        .'.   .:;.${chalk.bgRed('    ')}';;'.                        .';;'${chalk.bgRed('    ')}.;:.   .'.
        .'    .:,${chalk.bgRed('       ')}.;;,.                    .,;;.${chalk.bgRed('       ')},:.    '.
        .'    .;:.${chalk.bgRed('        ')}.,;;'.              .';;'.${chalk.bgRed('        ')}.:;.    '.
        .'     .,:'.${chalk.bgRed('         ')}.,;;..        ..;;,.${chalk.bgRed('         ')}.':,.     '.
        .'.      .;:'${chalk.bgRed('          ')}..;:'''..''':;..${chalk.bgRed('          ')}':;.      .'.
        .'.        .;;.${chalk.bgRed('          ')}.c,......,c.${chalk.bgRed('          ')}.;;.        .'.
         '.          ';;.${chalk.bgRed('       ')}':;..;::;..;:'${chalk.bgRed('       ')}.;;'          .'
         '.            .;;'. ..;:'..;cccc;..':;.. .';;.            .'
         .'              .,;;;,'..':cccccc:'..',;;;,.              '.
          '.                ....,:cccccccccc:,....                .'
          .'.              ..,:cccccccccccccccc:,..              .'.
           '.            .,:cccccccccccccccccccclc:,.            .'
            '.           ,cccccccccccccccccccccccccc;           .'
            .'.         .:lccccccccccccccccccccccccl:.         .'.
             .'.        .:cccccccccccccccccccccccccc:.        .'.
              .'.       .:cccccccccccccccccccccccccc:.       .'.
                '.      .:cccccccccccccccccccccccccc:.      .'
                 ..     .:cccccccccccccccccccccccccc:.     '.
                  .'.    ':ccccccccccccccccccccccccc'    .'.
                   .'.    .;cccccccccccccccccccccc;.    .'.
                     .'.    .;cccccccccccccccccc;.    .'.
                       ....   ..',,,;;;;;;,,,'..   ....
                         .......             ........
                             ....................
`)} 
`

/* eslint-disable prettier/prettier */
import chalk from 'chalk';

export default ({ thoughts }) => `
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
`;

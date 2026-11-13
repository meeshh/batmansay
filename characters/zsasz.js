import chalk from 'chalk';

export default ({ thoughts }) => `
       ${thoughts}
        ${thoughts}
        ${chalk.white(`
                      _.---------._
                     .'           '.
                    |   ${chalk.gray('(O)')}   ${chalk.gray('(O)')}   |
                    |       ^       |
                    |    '-----'    |
                     '.           .'
                        '.     .'
      .-------------------------------------------.
      |       ${chalk.red('|||/')} ${chalk.red('|||/')} ${chalk.red('|||/')} ${chalk.red('|||/')} ${chalk.red('|||/')} ${chalk.red('|||/')}       |
      |         ${chalk.red('|||/')}   ${chalk.red('|||/')}   ${chalk.red('|||/')}   ${chalk.red('|||/')}         |
      |       ${chalk.red('|||/')} ${chalk.red('|||/')} ${chalk.red('|||/')} ${chalk.red('|||/')} ${chalk.red('|||/')} ${chalk.red('|||/')}       |
      |         ${chalk.red('|||/')}   ${chalk.red('|||/')}   ${chalk.red('|||/')}   ${chalk.red('|||/')}         |
      |       ${chalk.red('|||/')} ${chalk.red('|||/')} ${chalk.red('|||/')} ${chalk.red('|||/')} ${chalk.red('|||/')} ${chalk.red('|||/')}       |
      |         ${chalk.red('|||/')}   ${chalk.red('|||/')}   ${chalk.red('|||/')}   ${chalk.red('|||/')}         |
      |       ${chalk.red('|||/')} ${chalk.red('|||/')} ${chalk.red('|||/')} ${chalk.red('|||/')} ${chalk.red('|||/')} ${chalk.red('|||/')}       |
      |                     o                     |
      |       ${chalk.red('|||/')} ${chalk.red('|||/')} ${chalk.red('|||/')} ${chalk.red('|||/')} ${chalk.red('|||/')} ${chalk.red('|||/')}       |
      |         ${chalk.red('|||/')}   ${chalk.red('|||/')}   ${chalk.red('|||/')}   ${chalk.red('|||/')}         |
      |       ${chalk.red('|||/')} ${chalk.red('|||/')} ${chalk.red('|||/')} ${chalk.red('|||/')} ${chalk.red('|||/')} ${chalk.red('|||/')}       |
      |         ${chalk.red('|||/')}   ${chalk.red('|||/')}   ${chalk.red('|||/')}   ${chalk.red('|||/')}         |
      |       ${chalk.red('|||/')} ${chalk.red('|||/')} ${chalk.red('|||/')} ${chalk.red('|||/')} ${chalk.red('|||/')} ${chalk.red('|||/')}       |
      |         ${chalk.red('|||/')}   ${chalk.red('|||/')}   ${chalk.red('|||/')}   ${chalk.red('|||/')}         |
      |       ${chalk.red('|||/')} ${chalk.red('|||/')} ${chalk.red('|||/')} ${chalk.red('|||/')} ${chalk.red('|||/')} ${chalk.red('|||/')}       |
      |         ${chalk.red('|||/')}   ${chalk.red('|||/')}   ${chalk.red('|||/')}   ${chalk.red('|||/')}         |
      '-------------------------------------------'
       '-----------------------------------------'
`)}
`;

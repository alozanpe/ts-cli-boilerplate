import { Command } from 'commander';

export default class StringUtils {
  program: Command;

  constructor(program: Command) {
    this.program = program;
  }

  private split(): void {
    this.program
      .command('split')
      .description('Split a string into substrings and display as an array')
      .argument('<string>', 'string to split')
      .option('--first', 'display just the first substring')
      .option('-s, --separator <char>', 'separator character', ',')
      .action((str, options) => {
        const limit = options.first ? 1 : undefined;
        console.log(str.split(options.separator, limit));
      });
  }

  private b64Encode(): void {
    this.program
      .command('b64Encode')
      .description('Encode a string to base64')
      .argument('<string>', 'string to encode')
      .action((str) => {
        console.log(Buffer.from(str).toString('base64'));
      });
  }

  private b64Decode(): void {
    this.program
      .command('b64Decode')
      .description('Decode a string from base64')
      .argument('<string>', 'string to decode')
      .action((str) => {
        console.log(Buffer.from(str, 'base64').toString('ascii'));
      });
  }

  build(): void {
    this.split();
    this.b64Encode();
    this.b64Decode();
  }
}

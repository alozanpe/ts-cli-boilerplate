#!/usr/bin/env node

import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import { Command } from 'commander';

import StringUtils from './commands/stringUtils';

(() => {
  clear();

  console.log(chalk.red(figlet.textSync('ts-cli-boilerplate', { horizontalLayout: 'full' })));

  const program = new Command();

  program.name('ts-cli-boilerplate').version('0.0.1');

  // Initialize StringUtils
  new StringUtils(program).build();

  program.parse();
})();

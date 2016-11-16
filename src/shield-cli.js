#!/usr/bin/env node

// modules
const commander = require('commander');

// custom modules
const init = require('./init/index');
const serve = require('./serve/index');

commander
  .version('0.0.1')
  .command('init')
  .action(init);

commander
  .version('0.0.1')
  .command('serve')
  .action(serve);

commander.parse(process.argv);
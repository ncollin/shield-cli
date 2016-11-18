#!/usr/bin/env node

/**
 * Npm modules
 */
const shield = require('commander');

/**
 * Custom modules
 */
const init = require('./init');
const create = require('./create');
const serve = require('./serve');

/**
 * Base version of the shield client
 */
shield
  .version('0.0.1')

/**
 * Init command
 * Trigger the configuration process of the project
 * NOTE: Should create shield config json for each existing project inside folder like npm init or git init
 */
shield
  .command('init')
  .action(init.action);

/**
 * Create command
 * Trigger the creation process for each application of the project
 */
shield
  .command('create')
  .action(create.action);
  
 /**
 * Serve command
 * Trigger the serve process for each application of the project
 */
 shield
  .command('serve')
  .option("-s, --styleguide", "Serve only styleguide")
  .option("-p, --pwa", "Serve only styleguide")
  .option("-a, --api", "Serve only api")
  .action(serve.action);

/**
 * Parse arguments
 */
shield.parse(process.argv);
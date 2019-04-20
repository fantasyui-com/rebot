#!/usr/bin/env node --experimental-modules

import args from 'args';
import program from './program.mjs';

async function main (conf){

args
  .option('repository', 'Target git repository to persorm maintenance on.')
  .option('directory', 'Local working directory where repositories are cloned to.', 'tmp')
  .command('serve', 'Serve your static site', ['s'])
  program(args.parse(process.argv));

} // main

main()

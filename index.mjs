#!/usr/bin/env node --experimental-modules

import args from 'args'
import outspoken from 'outspoken'

async function main (conf){

args
  //.option('port', 'The port on which the app will be running', 3000)
  .option('repository', 'Target git repository to persorm maintenance on.')
  .command('serve', 'Serve your static site', ['s'])

const options = args.parse(process.argv)

// options.repository ...

 console.log(`I'll be performing maintenance on ${options.repository}`)

let program = `

This program is writen in outspoken, see https://github.com/fantasyui-com/outspoken

  Main
    Validate Configuration Object

`;

const results = outspoken(program, options);



  for await (let item of results) {

    console.log(`Data ${item}`);

  }

} // main

main()

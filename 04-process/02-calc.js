#!/usr/bin/node

const log  = console.log;
      argv = process.argv[2];

try {
      log(`${argv} = ${eval(argv)}`);
} catch(e){
  log(`${argv}是非法的表达式`);
}
//node 02-calc.js 3+4

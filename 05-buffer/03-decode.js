#!/usr/bin/node

const log  = console.log,
      info = process.argv[2];   //base64 content

//validate

let buf = new Buffer(info,'base64');
let usr = buf.toString('utf8').split(':');

log(`usr: ${usr[0]}`);
log(`pwd: ${usr[1]}`);

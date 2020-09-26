#!/usr/bin/node

const log = console.log;

log(`architecture: ${process.arch}`);
log(`platform:     ${process.platform}`);

log(`process id:   ${process.pid}`);
log(`exePath:      ${process.exePath}`);

log(`nodejs version: ${process.version}`);
log(`user id:        ${process.getuid()}`);
log(`group id:       ${process.getgid()}`);
log(`cwd:            ${process.cwd()}\n`);

log(`env:`);
log(process.env);
log(`Host name:      ${process.env.HOSTNAME}`);

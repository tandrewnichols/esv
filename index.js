#!/usr/bin/env node

const args = require('yargs').argv;
const fs = require('fs-extra');
const blessed = require('blessed');
const path = require('path');

if (args._.length) {
  args._.map((file) => fs.readFile(file, { encoding: 'utf8' })).then((contents) => {
    console.log(contents);
  }).catch((err) => {
  });
}

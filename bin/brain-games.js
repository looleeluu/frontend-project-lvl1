#!/usr/bin/env node
import { welcome, getName, greetingByName } from '../src/cli.js';

console.log(welcome());
const name = getName();
console.log(greetingByName(name));

#!/usr/bin/env node
import gameEngine from '../src/index.js';
import { getGcdRules, gcdExpression, gcdCorrectAnswer } from '../src/gcd.js';

gameEngine(getGcdRules, gcdExpression, gcdCorrectAnswer);

#!/usr/bin/env node
import gameEngine from '../src/index.js';
import { gcdRules, gcdExpressions, gcdCorrectAnswer } from '../src/games/gcd.js';

gameEngine(gcdRules, gcdExpressions, gcdCorrectAnswer);

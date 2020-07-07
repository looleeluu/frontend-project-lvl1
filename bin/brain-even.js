#!/usr/bin/env node
import gameEngine from '../src/index.js';
import { getEvenRules, evenExpression, evenCorrectAnswer } from '../src/even.js';

gameEngine(getEvenRules, evenExpression, evenCorrectAnswer);

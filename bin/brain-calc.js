#!/usr/bin/env node
import gameEngine from '../src/index.js';
import { calcRules, calcCorrectAnswer, calcExpressions } from '../src/games/calc.js';

gameEngine(calcRules, calcExpressions, calcCorrectAnswer);

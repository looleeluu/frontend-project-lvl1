#!/usr/bin/env node
import gameEngine from '../src/index.js';
import { getCalcRules, calcCorrectAnswer, calcExpressions } from '../src/calc.js';

gameEngine(getCalcRules, calcExpressions, calcCorrectAnswer);

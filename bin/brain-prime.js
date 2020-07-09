#!/usr/bin/env node
import gameEngine from '../src/index.js';
import { primeRules, primeExpressions, primeCorrectAnswer } from '../src/games/prime.js';

gameEngine(primeRules, primeExpressions, primeCorrectAnswer);

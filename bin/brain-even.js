#!/usr/bin/env node
import gameEngine from '../src/index.js';
import { evenRules, evenExpressions, evenCorrectAnswer } from '../src/games/even.js';

gameEngine(evenRules, evenExpressions, evenCorrectAnswer);

#!/usr/bin/env node
import gameEngine from '../src/index.js';
import { progressionRules, progressionExpresssion, progressionCorrectAnswer } from '../src/games/progression.js';

gameEngine(progressionRules, progressionExpresssion, progressionCorrectAnswer);

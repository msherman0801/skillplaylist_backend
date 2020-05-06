const express = require('express');
const router = express.Router();
const noteService = require('../services/noteService')
const logger = require('../logs/logger')
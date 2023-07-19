const path = require('path');

const express = require('express');

// const contactController = require('./controllers/contactus')

import { contactController } from '../controllers/contactus'

const rootDir = require('../util/path')

const router = express.Router();

router.get('/contactus', contactController.contactget)

router.post('/contactus', contactController.contactpost)

module.exports = router;
#!/usr/bin/env node
'use strict';
require('dotenv').config();
const app = require('./lib/server.js');
let PORT = process.env.PORT || 3000;
app.start(PORT);
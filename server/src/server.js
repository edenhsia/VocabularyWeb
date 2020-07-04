#!/usr/bin/env node

/**
 * Module dependencies.
 */
import debug from './debug.js';

import app from './app.js';

/**
 * Get port from environment and store in Express.
 */

const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 * Listen on provided port, on all network interfaces.
 */

app.listen(port, () => debug(`Listening on ${port}`));

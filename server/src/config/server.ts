#!/usr/bin/env node

/**
 * Module dependencies.
 */
import debug from './debug';
import app from '../app';

/**
 * Get port from environment and store in Express.
 */

const port = process.env.PORT || '5000';
app.set('port', port);

/**
 * Connect to database, and then
 * Create HTTP server.
 * Listen on provided port, on all network interfaces.
 *
 * 解決外部資料連不上 rds 問題
 * https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html#AddRemoveRules
 * https://aws.amazon.com/tw/premiumsupport/knowledge-center/rds-cannot-connect/
 */
app.listen(port, () => debug(`Listening on ${port}`));
// client.connect()
//   .then(() => app.listen(port, () => debug(`Listening on ${port}`)))
//   .catch((err) => debug('connection error', err.stack));
// const res = await client.query('SELECT $1::text as message', ['Hello world!'])
// console.log(res.rows[0].message) // Hello world!
// await client.end()

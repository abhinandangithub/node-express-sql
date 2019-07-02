import env from './config';
// var env = require('./config');
import { ConnectionOptions } from 'typeorm';

export let dbOptions: ConnectionOptions = {
    port: env.db.port,
    username: env.db.username,
    password: env.db.password,
    database: env.db.database,
    type: env.db.type,
    host: env.db.host
}

export default dbOptions;
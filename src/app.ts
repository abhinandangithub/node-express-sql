import * as express from 'express';
import config from './config/config';
import dbOptions from './config/database';
import { createConnection } from 'typeorm';

const app = express();
createConnection(dbOptions).then((connection) => {
    console.log('Connectd to db');
}).catch((e) => {
    console.log('Error in connectiong to db ', e);
})
console.log(`Application is runnit in port ${config.port}`);


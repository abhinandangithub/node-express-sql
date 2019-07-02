import { merge } from 'lodash';
const defaultConfig = {
    port: 3000,
    dev: 'development',
    prod: 'production'
};

process.env.NODE_ENV = process.env.NODE_ENV || defaultConfig.dev;

let envConfig = {};

try {
    envConfig = require('./' + process.env.NODE_ENV);
    envConfig = envConfig || {};
} catch (e) {
    envConfig = {};
}
export default merge(envConfig, defaultConfig);
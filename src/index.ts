import { bootstrap, runMigrations } from '@vendure/core';
import { config } from './vendure-config';
import { webcrypto } from 'crypto';

(global as any).crypto = webcrypto;

runMigrations(config)
    .then(() => bootstrap(config))
    .catch(err => {
        console.log(err);
    });

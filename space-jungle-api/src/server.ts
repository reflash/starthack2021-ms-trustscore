import * as dotenv from 'dotenv';
import App from './app';
import TrustScoreController from './trustScore/trustScore.controller';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// Express server
const app = new App([new TrustScoreController()]);

app.listen();

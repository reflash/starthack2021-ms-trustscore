import * as dotenv from 'dotenv';
import App from './app';
import UserController from './user/user.controller';
import TextParserController from './textParser/textParser.controller';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// Express server
const app = new App([new UserController(), new TextParserController()]);

app.listen();

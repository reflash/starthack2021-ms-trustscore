import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as cors from 'cors';
import * as compression from 'compression';

require('express-async-errors');

import Controller from './interfaces/controller.interface';
import errorMiddleware from './middleware/error.middleware';

class App {
    public app: express.Application;
    readonly APP_PORT = process.env.PORT || 4000;

    constructor(controllers: Controller[]) {
        this.app = express();

        this.initializeMiddlewares();
        this.initializeControllers(controllers);
        this.initializeErrorHandling();
    }

    public listen() {
        this.app.listen(this.APP_PORT, () => {
            console.log(`Express server listening on the port ${this.APP_PORT}`);
        });
    }

    public getServer() {
        return this.app;
    }

    private initializeMiddlewares() {
        // app.use(cors());
        this.app.use(express.json());
        this.app.use(compression());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(cookieParser());
    }

    private initializeErrorHandling() {
        this.app.use(errorMiddleware);
    }

    private initializeControllers(controllers: Controller[]) {
        controllers.forEach((controller) => {
            this.app.use('/api', controller.router);
        });
    }
}

export default App;


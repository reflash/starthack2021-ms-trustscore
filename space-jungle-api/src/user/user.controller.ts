import * as express from 'express';
import Controller from '../interfaces/controller.interface';

class UserController implements Controller {
    public path = '/user';
    public router = express.Router();

    constructor() {
        this.initRoutes();
    }

    public getAllUsers = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        let users = [];
        console.log("Dummy method");
        return res.json(users);
    }

    private initRoutes(): void {
        // This can also be done by using router.all(`${this.path}/*`, middlw) and chain of route
        // handlers like router.all(path, middlw).get(path, handler).post...
        // Using the  route.all in such a way applies the middleware only to the
        // route handlers in the chain that match the  `${this.path}/*` route

        this.router.get(`${this.path}/`, this.getCurrentUser);
        this.router.get(`${this.path}/all`, this.getAllUsers);
    }

    private getCurrentUser = async (req: express.Request, res: express.Response) => {
        res.send('Works');
    }
}

export default UserController;

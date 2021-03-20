import * as express from 'express';
import Controller from '../interfaces/controller.interface';
import { parse } from 'node-html-parser';
import fetch from 'node-fetch';

export class TextParserController implements Controller {
  public path = '/text';
  public router = express.Router();

  constructor() {
    this.initRoutes();
  }

  private getAndParseText = async (url: string): Promise<string> => {
    const html: string = await fetch(url).then((x) => x.text());

    const res = parse(html, {
      lowerCaseTagName: false, // convert tag name to lower case (hurt performance heavily)
      comment: false, // retrieve comments (hurt performance slightly)
      blockTextElements: {
        script: false, // keep text content when parsing
        noscript: false, // keep text content when parsing
        style: false, // keep text content when parsing
        pre: false, // keep text content when parsing
      },
    });
    return res
      .querySelectorAll('p')
      .map((el) => el.outerHTML)
      .toString();
  };

  private getText = async (req: express.Request, res: express.Response) => {
    console.log(req.body.link);
    const text = await this.getAndParseText(req.body.link);
    return res.send(text);
  };

  private initRoutes(): void {
    // This can also be done by using router.all(`${this.path}/*`, middlw) and chain of route
    // handlers like router.all(path, middlw).get(path, handler).post...
    // Using the  route.all in such a way applies the middleware only to the
    // route handlers in the chain that match the  `${this.path}/*` route

    this.router.post(`${this.path}/`, this.getText);
  }
}

export default TextParserController;

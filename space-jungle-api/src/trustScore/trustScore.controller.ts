import * as express from 'express';
import Controller from '../interfaces/controller.interface';
import WebpageParser from './webpageParser.service';
import EntityRecognitionService from '../entity-recognition/entityRecognition.service';


export class TrustScoreController implements Controller {
  public path = '/calc_trust_score';
  public router = express.Router();

  constructor() {
    this.initRoutes();
  }

  private calculateTrustScore = async (req: express.Request, res: express.Response) => {
    console.log(req.body.link);
    const text = await WebpageParser.getParsedText(req.body.link);
    const textEntitiesInfo = await EntityRecognitionService.getEntitySentencesForText(text);
    return res.send(textEntitiesInfo);
  };

  private initRoutes(): void {
    this.router.post(`${this.path}/`, this.calculateTrustScore);
  }
}

export default TrustScoreController;

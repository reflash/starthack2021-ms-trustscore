import * as express from 'express';
import Controller from '../interfaces/controller.interface';
import WebpageParser from './webpageParser.service';
import EntityRecognitionService from '../entity-recognition/entityRecognition.service';
import FakeClaimCheckClientService from '../claim-check-client/fakeClaimCheckClient.service';

export class TrustScoreController implements Controller {
  public path = '/calc_trust_score';
  public router = express.Router();

  constructor() {
    this.initRoutes();
  }

  private calculateTrustScore = async (req: express.Request, res: express.Response) => {
    console.log(req.body.link);
    const text = await WebpageParser.getParsedText(req.body.link);
    
    // Finding claims
    const textEntitiesInfo = await EntityRecognitionService.getEntitySentencesForText(text);

    // Sending the claims for a check to claim-check-api
    const claimCheckResult = await FakeClaimCheckClientService.checkClaims(textEntitiesInfo);

    // Attach original claims next to explanations
    claimCheckResult.claims.forEach((c, i) => {
      c["original_text"] = textEntitiesInfo[i];
    })

    return res.send(claimCheckResult);
  };

  private initRoutes(): void {
    this.router.post(`${this.path}/`, this.calculateTrustScore);
  }
}

export default TrustScoreController;

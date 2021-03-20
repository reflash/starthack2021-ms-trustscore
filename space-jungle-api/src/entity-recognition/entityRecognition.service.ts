import axios from 'axios';

class EntityRecognitionService {
    constructor() {
        console.log("AZ_ENDPOINT = ", process.env.AZ_ENDPOINT);
    }

    public async getEntitiesForText(text: string) {
        let res = await axios.post(process.env.AZ_ENDPOINT, { id: 1, language: "en", text });
    }
}

export default EntityRecognitionService;
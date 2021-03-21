import axios from 'axios';

const EntityRecognitionService = {
    getTextAsChunks: (text: string): String[] => {
        // This method is buggy, it might split in the middle of a word
        // but for sake of saving time this bug is ignored.
        const maxLength = process.env.AZ_API_TEXT_MAX_LEN;
        
        return text.match(/(.|[\r\n]){1,1000}/g);
    },

    splitTextIntoTrimmedSentences: (text: string): String[] => {
        // TODO: optimize this lol
        const sentences = text.match( /[^\.!\?]+[\.!\?]+/g ).map(
            s => s
                .replace(`”`, "")
                .replace(`“`, "")
                .replace('(',"")
                .replace(`)`,"")
                .trim()
                .replace(/(\r\n|\n|\r)/gm, "")
                .replace("\t", "")
        );

        return sentences;
    },
    
    getEntitiesInfoForChunks: async (chunks: String[]) => {
        console.log("AZ_ENDPOINT = ", process.env.AZ_ENDPOINT);

        const data = { documents: [] };

        const docs = chunks.map((str, i) => {
            return { id: i+1, language: "en", text: str };
        });

        data.documents = docs;

        console.log("AZ body=", data);

        let res = await axios.post(process.env.AZ_ENDPOINT, data);
        console.log(res.data.documents);
        return res.data;
    },

    getEntitySentencesForText: async (text: string) => {

        //TODO: uncomment this when Text Analytics API is ok
        return [];

        const textChunks = EntityRecognitionService.getTextAsChunks(text);
        const sentences = EntityRecognitionService.splitTextIntoTrimmedSentences(text);
        const entitiesInfo = await EntityRecognitionService.getEntitiesInfoForChunks(textChunks);

        // Go over each sentence and mark whether we take it
        const entitySentencesIndexToFlagMap = {};
        const markedSentences = [];
        sentences.forEach((s, i) => entitySentencesIndexToFlagMap[i] = false);

        entitiesInfo.documents.forEach(
            doc => {
                doc.entities.forEach(
                    entity => {
                        const entityText = entity.text;
                        sentences.forEach((s, i) => {
                            if (sentences[i].includes(entityText)) {

                                if (!entitySentencesIndexToFlagMap[i]) {
                                    markedSentences.push(s);
                                    console.log(`${s} INCLUDES ${entityText}`);
                                }

                                entitySentencesIndexToFlagMap[i] = true;
                            }
                        });
                    }
                )
            }
        );

        return markedSentences;
    },
}

export default EntityRecognitionService;
const FakeClaimCheckClientService = {
    checkClaims: (claims) => {
        const preparedData = {
            "score": 60,
            "claims": [
                { 
                    "explanation": "This story covered a four-month randomized feasibility trial to see how well a text messaging system relieved stress of women undergoing chemotherapy for breast cancer. Based on an abstract presented at the American Society of Clinical Oncology meeting, the story provided some interesting data, such as older women were more likely to text back to seek information. But it skimped on important details like cost, availability and how big the benefits were. Quality of life has historically been overlooked in cancer care, so it’s nice to see a news story that highlights research aiming to improve it. On the other hand, technology isn’t a panacea and news stories should quantify the purported benefits just as they would for drugs and other interventions.", 
                    "label": "false" 
                },
                { 
                    "explanation": "This was a brief story (only 242 words) that accurately described the main findings of an important randomized trial. Specifically, this story discussed a newly published study showing no evidence that a diet high in fruits and vegetables is related to a decreased risk of breast cancer recurrence. These findings are important for breast cancer survivors to know about, but the story did not include adequate context. Further developing the story to include known treatments to prevent recurrence, both medical and behavioral, would have strengthened the story considerably.", 
                    "label": "true" 
                },
            ]
        };
        return Promise.resolve(preparedData);
    }
};

export default FakeClaimCheckClientService;

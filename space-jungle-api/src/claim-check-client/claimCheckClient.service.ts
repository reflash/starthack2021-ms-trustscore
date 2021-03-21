import axios from 'axios';

const ClaimCheckClientService = {
    checkClaims: async (claims: String[]) => {
        console.log("CLAIM_CHECK_API = ", process.env.CLAIM_CHECK_API);
        let claimsInfo = await axios.post(process.env.CLAIM_CHECK_API, claims);

        return claimsInfo;
    }
};

export default ClaimCheckClientService;
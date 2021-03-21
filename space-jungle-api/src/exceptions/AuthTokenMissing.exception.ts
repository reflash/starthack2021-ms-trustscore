import HttpException from './HttpException';
import HTTPStatusCodes from '../enums/HTTPStatusCodes';
import ErrorMessages from '../enums/ErrorMessages';

class AuthTokenMissingException extends HttpException {
    constructor() {
        super(HTTPStatusCodes.ACCESS_DENIED, ErrorMessages.AUTH_TOKEN_ABSENT);
    }
}

export default AuthTokenMissingException;

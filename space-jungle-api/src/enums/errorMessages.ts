enum ErrorMessages {
    INTERNAL_ERROR      = 'Internal server error.',
    NOT_FOUND           = 'Resource not found.',
    BAD_REQUEST         = 'Bad request.',
    VALIDATION          = 'Validation error.',
    WRONG_TOKEN         = 'Wrong Authorisation token.',
    AUTH_TOKEN_ABSENT   = 'Authorisation token is not present in request.',
    AUTH_COOKIE_ABSENT  = 'Authorisation cookie is not present in request.'
}

export default ErrorMessages;
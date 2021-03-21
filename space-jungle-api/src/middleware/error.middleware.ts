import { NextFunction, Request, Response } from 'express';
import HttpException from '../exceptions/HttpException';
import HTTPStatusCodes from '../enums/HTTPStatusCodes';
import ErrorMessages from '../enums/ErrorMessages';

function errorMiddleware(error: HttpException, request: Request, response: Response, next: NextFunction) {
    const status = error.status || HTTPStatusCodes.INTERNAL_ERROR;
    const message = error.message || ErrorMessages.INTERNAL_ERROR;
    const detailsProp = 'details';

    const responseContent = {
      status, message
    };

    if (error.details) { response[detailsProp] = error.details; }

    response
        .status(status)
        .send(responseContent);
}

export default errorMiddleware;

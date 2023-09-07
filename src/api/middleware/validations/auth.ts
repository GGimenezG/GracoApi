
const atob = require('atob');

const validator = require('../validate');
import { basicAuth } from './../../../api/Models/basicAuth';
import { basicAuthValidator } from './../../../api/Models/basicAuthValidator';
import { Request, Response,IRouter, NextFunction  } from 'express';

const AuthValidation = (req:Request, res:Response, next:NextFunction) => {

	const validationRule = new basicAuthValidator()

    const [user, username, token] = req.headers.authorization ? atob(req.headers.authorization).split("/") : ['', '', '']
    const paramsBody : basicAuth = {
        token,
        user
    }
	validator(paramsBody, validationRule, {}, (err: string, status:boolean) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    });
}

export { AuthValidation }
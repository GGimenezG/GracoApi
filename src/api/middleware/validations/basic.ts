
const atob = require('atob');

const validator = require('../validate');
import { request } from './../../../api/Models/request';
import { requestValidator } from './../../../api/Models/requestValidator';
import { Request, Response,IRouter, NextFunction  } from 'express';

const BasicValidation = (req:Request, res:Response, next:NextFunction) => {

	const validationRule = new requestValidator()
    
    const [user, username, token] = req.headers.authorization ? atob(req.headers.authorization).split("/") : ['', '', '']
    const paramsBody : request = {
        id: parseInt(req.params.id),
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

export { BasicValidation }
const validator = require('../validate');
import { request } from './../../../api/Models/request';
import { requestValidatorWeb } from './../../../api/Models/requestValidatorWeb';
import { Request, Response,IRouter, NextFunction  } from 'express';

const BasicValidationWeb = (req:Request, res:Response, next:NextFunction) => {

	const validationRule = new requestValidatorWeb()
    
    const paramsBody : request = {
        id: parseInt(req.params.id)
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

export { BasicValidationWeb }
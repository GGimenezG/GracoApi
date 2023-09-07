const validator = require('../validate');
import { Request, Response,IRouter, NextFunction  } from 'express';

const loginValidation = (req:Request, res:Response, next:NextFunction) => {
    const typeValidation = req.body && req.body.username && typeof(req.body.username) == 'string' &&req.body.username.includes('@');

	const validationRule = {
		"email":  "string",
		"password": "string",
	}

	validator(req.body, validationRule, {}, (err: string, status:boolean) => {
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

export {loginValidation}
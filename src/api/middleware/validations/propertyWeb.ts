const validator = require('../validate');
import { requestPropertyWeb } from './../../../api/Models/requestPropertyWeb';
import { requestPropertyWebValidator } from './../../../api/Models/requestPropertyWebValidator';
import { Request, Response, NextFunction  } from 'express';

const PropertyWebValidation = (req:Request, res:Response, next:NextFunction) => {

	const validationRule = new requestPropertyWebValidator()
    
    const paramsBody : requestPropertyWeb = {
        idTypeOperation: parseInt(req.params.idTypeOperation),
        idCategory: parseInt(req.params.idCategory),
        cityOrCommune: req.params.cityOrCommune
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

export { PropertyWebValidation }
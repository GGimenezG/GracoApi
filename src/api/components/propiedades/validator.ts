export {}
const atob = require('atob');

const validator = require('./../../middleware/validate');
import { TramitarValidator, VisitarValidator } from './model/validations';
import { Request, Response,IRouter, NextFunction  } from 'express';

const visitarValidation = (req:Request, res:Response, next:NextFunction) => {

	const validationRule = new VisitarValidator();
    
    const [user, username, token] = req.headers.authorization ? atob(req.headers.authorization).split("/") : ['', '', '']
    const paramsBody : VisitarValidator = {
        propiedad: req.body.propiedad,
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


const tramitarValidation = (req:Request, res:Response, next:NextFunction) => {

	const validationRule = new VisitarValidator();
    
    const [user, username, token] = req.headers.authorization ? atob(req.headers.authorization).split("/") : ['', '', '']
    const paramsBody : TramitarValidator = {
        propiedad: req.body.propiedad,
        correo: req.body.correo,
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        transaccion: req.body.transaccion,        
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





export { visitarValidation, tramitarValidation }
export {}
const atob = require('atob');

const validator = require('./../../middleware/validate');
import { Pokedex } from './model/pokedex';
import { PokedexValidator } from './model/validations';
import { Request, Response,IRouter, NextFunction  } from 'express';

const PokedexValidation = (req:Request, res:Response, next:NextFunction) => {

	const validationRule = new PokedexValidator()
    
    const [user, username, token] = req.headers.authorization ? atob(req.headers.authorization).split("/") : ['', '', '']
    const paramsBody : any = {
        id:  req.body.id,
        estado: req.body.description,
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





export { PokedexValidation }
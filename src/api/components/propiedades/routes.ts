export {};
import { AuthValidation } from '../../middleware/validations/auth';
import { BasicValidation } from '../../middleware/validations/basic';
import { IRouter } from 'express';
import { PropiedadController } from './controller';
import { tramitarValidation, visitarValidation } from './validator'

const router = (app:IRouter) => {

    const c = new PropiedadController();
    
    app.get('/propiedad',  c.FindAll);
    app.get('/propiedad-principales', c.FindAllPrincipal);
    app.get('/propiedad/:id', c.Find);
    
    app.post('/visitar-propiedad', visitarValidation , c.Visitar);
    app.post('/tramitar-propiedad',tramitarValidation, c.Tramitar);

}

export default router;
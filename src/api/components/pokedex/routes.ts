export {};
import { AuthValidation } from '../../middleware/validations/auth';
import { BasicValidation } from '../../middleware/validations/basic';
import { IRouter } from 'express';
import { PokedexController } from './controller';
import { PokedexValidation } from './validator'

const router = (app:IRouter) => {

    const c = new PokedexController();
    
    app.get('/pokedex', AuthValidation, c.FindAll);
    app.put('/atrapar', PokedexValidation, c.Update);
    app.post('/solicitarPokemon', c.SolicitarPokemon);

}

export default router;
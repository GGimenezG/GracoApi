"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("../../middleware/validations/auth");
const controller_1 = require("./controller");
const validator_1 = require("./validator");
const router = (app) => {
    const c = new controller_1.PokedexController();
    app.get('/pokedex', auth_1.AuthValidation, c.FindAll);
    app.put('/atrapar', validator_1.PokedexValidation, c.Update);
    app.post('/solicitarPokemon', c.SolicitarPokemon);
};
exports.default = router;
//# sourceMappingURL=routes.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokedexController = void 0;
/** The controller class handles incoming requests, validates them and sends the response
 * data back to the client. It uses the service class to interact with the database.*/
const atob = require('atob');
const service_1 = require("./service");
class PokedexController {
    constructor() {
        //this.service = new PokedexService();
    }
    async Update(req, response) {
        const service = new service_1.PokedexService();
        const [user, username, token] = req.headers.authorization ? atob(req.headers.authorization).split("/") : ['', '', ''];
        const { id, estado } = req.body;
        const coeficiente = Math.random() < 0.35;
        if (coeficiente) {
            const bodySender = {
                estado,
                id,
                token,
                user
            };
            const res = await service.Update(bodySender);
            if (res.success) {
                response.status(201).send(res);
            }
            else {
                response.status(400).send(res);
            }
        }
        else {
            let res = {
                success: false,
                message: 'escapo'
            };
            response.status(400).send(res);
        }
    }
    async FindAll(req, response) {
        const service = new service_1.PokedexService();
        const [user, username, token] = req.headers.authorization ? atob(req.headers.authorization).split("/") : ['', '', ''];
        const bodySender = {
            id /*Pokedex*/: 0,
            token,
            user
        };
        const res = await service.FindAll(bodySender);
        if (res.success) {
            response.status(201).send(res);
        }
        else {
            response.status(400).send(res);
        }
    }
    async SolicitarPokemon(req, response) {
        const service = new service_1.PokedexService();
        const [user, username, token] = req.headers.authorization ? atob(req.headers.authorization).split("/") : ['', '', ''];
        const bodySender = {
            id /*Pokedex*/: 0,
            aleatorio: Math.floor((Math.random() * (151 - 0 + 1)) + 0),
            token,
            user
        };
        const res = await service.Find(bodySender);
        if (res.success) {
            response.status(201).send(res);
        }
        else {
            response.status(400).send(res);
        }
    }
}
exports.PokedexController = PokedexController;
//# sourceMappingURL=controller.js.map
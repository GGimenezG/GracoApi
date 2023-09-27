"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropiedadController = void 0;
/** The controller class handles incoming requests, validates them and sends the response
 * data back to the client. It uses the service class to interact with the database.*/
const atob = require('atob');
const service_1 = require("./service");
class PropiedadController {
    constructor() {
        //this.service = new PokedexService();
    }
    async Visitar(req, response) {
        const service = new service_1.PropiedadService();
        const [user, username, token] = req.headers.authorization ? atob(req.headers.authorization).split("/") : ['', '', ''];
        const { propiedad } = req.body;
        const bodySender = {
            propiedad,
            token,
            user
        };
        const res = await service.VisitarPropiedad(bodySender);
        if (res.success) {
            response.status(201).send(res);
        }
        else {
            response.status(400).send(res);
        }
    }
    async Tramitar(req, response) {
        const service = new service_1.PropiedadService();
        const [user, username, token] = req.headers.authorization ? atob(req.headers.authorization).split("/") : ['', '', ''];
        const { propiedad, nombre, correo, telefono, transaccion } = req.body;
        const bodySender = {
            propiedad,
            correo,
            nombre,
            telefono,
            transaccion,
            token,
            user
        };
        const res = await service.VisitarPropiedad(bodySender);
        if (res.success) {
            response.status(201).send(res);
        }
        else {
            response.status(400).send(res);
        }
    }
    async FindAll(req, response) {
        var _a;
        const service = new service_1.PropiedadService();
        //const [user, username, token] = req.headers.authorization ? atob(req.headers.authorization).split("/") : ['', '', '']
        const bodySender = {};
        let res = await service.FindAll(bodySender);
        res.data = (_a = res.data) === null || _a === void 0 ? void 0 : _a.map((r) => {
            return {
                ...r,
                imagenes: r.imagenes.split(',')
            };
        });
        if (res.success) {
            response.status(201).send(res);
        }
        else {
            response.status(400).send(res);
        }
    }
    async FindAllPrincipal(req, response) {
        var _a;
        const service = new service_1.PropiedadService();
        //const [user, username, token] = req.headers.authorization ? atob(req.headers.authorization).split("/") : ['', '', '']
        const bodySender = {};
        const res = await service.FindAllPrincipal(bodySender);
        res.data = (_a = res.data) === null || _a === void 0 ? void 0 : _a.map((r) => {
            return {
                ...r,
                imagenes: r.imagenes.split(',')
            };
        });
        if (res.success) {
            response.status(201).send(res);
        }
        else {
            response.status(400).send(res);
        }
    }
    async Find(req, response) {
        var _a;
        const service = new service_1.PropiedadService();
        const [user, username, token] = req.headers.authorization ? atob(req.headers.authorization).split("/") : ['', '', ''];
        const bodySender = {
            propiedad: req.body.propiedad,
            token,
            user
        };
        const res = await service.Find(bodySender);
        res.data = (_a = res.data) === null || _a === void 0 ? void 0 : _a.map((r) => {
            return {
                ...r,
                imagenes: r.imagenes.split(',')
            };
        });
        if (res.success) {
            response.status(201).send(res);
        }
        else {
            response.status(400).send(res);
        }
    }
}
exports.PropiedadController = PropiedadController;
//# sourceMappingURL=controller.js.map
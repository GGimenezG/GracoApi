"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const service_1 = require("./service");
const atob = require('atob');
class UserController {
    constructor() {
    }
    async Create(req, response) {
        const service = new service_1.UserService();
        const [user, username, token] = req.headers.authorization ? atob(req.headers.authorization).split("/") : ['', '', ''];
        const { apellido, clave, direccion, dni, mail, nacimiento, nombre } = req.body;
        const bodySender = {
            apellido, clave, direccion, dni, mail, nacimiento, nombre
        };
        const res = await service.Registrar(bodySender);
        if (res.success) {
            response.status(201).send(res);
        }
        else {
            response.status(400).send(res);
        }
    }
    async Obtener(req, response) {
        const service = new service_1.UserService();
        const [user, username, token] = req.headers.authorization ? atob(req.headers.authorization).split("/") : ['', '', ''];
        const { apellido, clave, direccion, dni, mail, nacimiento, nombre } = req.body;
        const bodySender = {
            user,
            token
        };
        const res = await service.BuscarUsuario(bodySender);
        if (res.success) {
            response.status(201).send(res);
        }
        else {
            response.status(400).send(res);
        }
    }
    async CambiarClave(req, response) {
        const service = new service_1.UserService();
        const [user, username, token] = req.headers.authorization ? atob(req.headers.authorization).split("/") : ['', '', ''];
        const { claveAnterior, claveNueva } = req.body;
        const bodySender = {
            claveAnterior,
            claveNueva,
            user,
            token
        };
        const res = await service.CambiarClave(bodySender);
        if (res.success) {
            response.status(201).send(res);
        }
        else {
            response.status(400).send(res);
        }
    }
    async ModificarUsuario(req, response) {
        const service = new service_1.UserService();
        const [user, username, token] = req.headers.authorization ? atob(req.headers.authorization).split("/") : ['', '', ''];
        const { nombre, apellido, dni, nacimiento, direccion } = req.body;
        const bodySender = {
            nombre,
            apellido,
            dni,
            nacimiento,
            direccion,
            user,
            token
        };
        const res = await service.ModificarUsuario(bodySender);
        if (res.success) {
            response.status(201).send(res);
        }
        else {
            response.status(400).send(res);
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=controller.js.map
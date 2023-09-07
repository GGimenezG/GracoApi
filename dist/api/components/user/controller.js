"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const service_1 = require("./service");
class UserController {
    constructor() {
    }
    async Create(req, response) {
        const service = new service_1.UserService();
        const [user, username, token] = req.headers.authorization ? atob(req.headers.authorization).split("/") : ['', '', ''];
        const { name, lastname, email, password } = req.body;
        const bodySender = {
            name,
            lastname,
            email,
            password
        };
        const res = await service.Registrar(bodySender);
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
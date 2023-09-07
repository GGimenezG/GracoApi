"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** The controller class handles incoming requests, validates them and sends the response
 * data back to the client. It uses the service class to interact with the database.*/
const btoa = require('btoa');
const service_1 = require("./service");
class AuthController {
    constructor() {
    }
    async login(req, response) {
        const Service = new service_1.default();
        const { email, password } = req.body;
        const BodySender = {
            email,
            password
        };
        const res = await Service.login(BodySender);
        if (res.success) {
            response.status(201).send({
                success: true,
                message: 'Login exitoso',
                data: {
                    token: btoa(`${res.data}/${email}/${res.message}`)
                }
            });
        }
        else {
            response.status(400).send({
                success: false,
                message: res.message
            });
        }
    }
}
exports.default = AuthController;
//# sourceMappingURL=controller.js.map
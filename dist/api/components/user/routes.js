"use strict";
// /**Here we define our API endpoints for the corresponding component and assign the controller methods to them. 
//  * Moreover we can do things like authorization (e.g. JWT), 
//  * permission validation (e.g. ACL) or add component specific middleware. */
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("./controller");
const auth_1 = require("api/middleware/validations/auth");
const router = (app) => {
    const c = new controller_1.UserController();
    app.post('/registrar', c.Create);
    app.get('/perfil', auth_1.AuthValidation, c.Obtener);
    app.put('/cambiarclave', auth_1.AuthValidation, c.CambiarClave);
    app.put('/perfil', auth_1.AuthValidation, c.ModificarUsuario);
};
exports.default = router;
//# sourceMappingURL=routes.js.map
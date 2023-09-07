"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("./controller");
const login_1 = require("../../middleware/validations/login");
const router = (app) => {
    const Auth = new controller_1.default();
    app.post('/login', login_1.loginValidation, Auth.login);
};
exports.default = router;
//# sourceMappingURL=routes.js.map
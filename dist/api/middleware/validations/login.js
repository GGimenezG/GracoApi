"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidation = void 0;
const validator = require('../validate');
const loginValidation = (req, res, next) => {
    const typeValidation = req.body && req.body.username && typeof (req.body.username) == 'string' && req.body.username.includes('@');
    const validationRule = {
        "email": "string",
        "password": "string",
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        }
        else {
            next();
        }
    });
};
exports.loginValidation = loginValidation;
//# sourceMappingURL=login.js.map
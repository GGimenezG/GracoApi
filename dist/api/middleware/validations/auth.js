"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidation = void 0;
const atob = require('atob');
const validator = require('../validate');
const basicAuthValidator_1 = require("./../../../api/Models/basicAuthValidator");
const AuthValidation = (req, res, next) => {
    const validationRule = new basicAuthValidator_1.basicAuthValidator();
    const [user, username, token] = req.headers.authorization ? atob(req.headers.authorization).split("/") : ['', '', ''];
    const paramsBody = {
        token,
        user
    };
    validator(paramsBody, validationRule, {}, (err, status) => {
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
exports.AuthValidation = AuthValidation;
//# sourceMappingURL=auth.js.map
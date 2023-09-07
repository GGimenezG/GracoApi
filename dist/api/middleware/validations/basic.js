"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicValidation = void 0;
const atob = require('atob');
const validator = require('../validate');
const requestValidator_1 = require("./../../../api/Models/requestValidator");
const BasicValidation = (req, res, next) => {
    const validationRule = new requestValidator_1.requestValidator();
    const [user, username, token] = req.headers.authorization ? atob(req.headers.authorization).split("/") : ['', '', ''];
    const paramsBody = {
        id: parseInt(req.params.id),
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
exports.BasicValidation = BasicValidation;
//# sourceMappingURL=basic.js.map
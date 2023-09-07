"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokedexValidation = void 0;
const atob = require('atob');
const validator = require('./../../middleware/validate');
const validations_1 = require("./model/validations");
const PokedexValidation = (req, res, next) => {
    const validationRule = new validations_1.PokedexValidator();
    const [user, username, token] = req.headers.authorization ? atob(req.headers.authorization).split("/") : ['', '', ''];
    const paramsBody = {
        id: req.body.id,
        estado: req.body.description,
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
exports.PokedexValidation = PokedexValidation;
//# sourceMappingURL=validator.js.map
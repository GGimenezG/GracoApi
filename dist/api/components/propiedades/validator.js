"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tramitarValidation = exports.visitarValidation = void 0;
const atob = require('atob');
const validator = require('./../../middleware/validate');
const validations_1 = require("./model/validations");
const visitarValidation = (req, res, next) => {
    const validationRule = new validations_1.VisitarValidator();
    const [user, username, token] = req.headers.authorization ? atob(req.headers.authorization).split("/") : ['', '', ''];
    const paramsBody = {
        propiedad: req.body.propiedad,
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
exports.visitarValidation = visitarValidation;
const tramitarValidation = (req, res, next) => {
    const validationRule = new validations_1.VisitarValidator();
    const [user, username, token] = req.headers.authorization ? atob(req.headers.authorization).split("/") : ['', '', ''];
    const paramsBody = {
        propiedad: req.body.propiedad,
        correo: req.body.correo,
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        transaccion: req.body.transaccion,
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
exports.tramitarValidation = tramitarValidation;
//# sourceMappingURL=validator.js.map
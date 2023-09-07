"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicValidationWeb = void 0;
const validator = require('../validate');
const requestValidatorWeb_1 = require("./../../../api/Models/requestValidatorWeb");
const BasicValidationWeb = (req, res, next) => {
    const validationRule = new requestValidatorWeb_1.requestValidatorWeb();
    const paramsBody = {
        id: parseInt(req.params.id)
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
exports.BasicValidationWeb = BasicValidationWeb;
//# sourceMappingURL=basicWeb.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyWebValidation = void 0;
const validator = require('../validate');
const requestPropertyWebValidator_1 = require("./../../../api/Models/requestPropertyWebValidator");
const PropertyWebValidation = (req, res, next) => {
    const validationRule = new requestPropertyWebValidator_1.requestPropertyWebValidator();
    const paramsBody = {
        idTypeOperation: parseInt(req.params.idTypeOperation),
        idCategory: parseInt(req.params.idCategory),
        cityOrCommune: req.params.cityOrCommune
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
exports.PropertyWebValidation = PropertyWebValidation;
//# sourceMappingURL=propertyWeb.js.map
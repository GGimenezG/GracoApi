"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TramitarValidator = exports.VisitarValidator = void 0;
const basicAuthValidator_1 = require("../../../Models/basicAuthValidator");
class VisitarValidator extends basicAuthValidator_1.basicAuthValidator {
    constructor() {
        super();
        // this.idBathrooms = 'numeric';
        this.propiedad = 'numeric';
    }
}
exports.VisitarValidator = VisitarValidator;
class TramitarValidator extends basicAuthValidator_1.basicAuthValidator {
    constructor() {
        super();
        this.propiedad = 'numeric';
        this.nombre = 'required|string';
        this.correo = 'required|email';
        this.telefono = 'required|string';
        this.transaccion = 'required|string';
    }
}
exports.TramitarValidator = TramitarValidator;
//# sourceMappingURL=validations.js.map
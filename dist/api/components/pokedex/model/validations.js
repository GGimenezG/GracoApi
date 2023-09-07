"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokedexValidator = void 0;
const basicAuthValidator_1 = require("../../../Models/basicAuthValidator");
class PokedexValidator extends basicAuthValidator_1.basicAuthValidator {
    constructor() {
        super();
        // this.idBathrooms = 'numeric';
        this.estado = 'numeric';
        this.id = 'numeric';
    }
}
exports.PokedexValidator = PokedexValidator;
//# sourceMappingURL=validations.js.map
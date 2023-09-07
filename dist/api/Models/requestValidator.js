"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestValidator = void 0;
const basicAuthValidator_1 = require("./basicAuthValidator");
class requestValidator extends basicAuthValidator_1.basicAuthValidator {
    constructor() {
        super();
        this.id = 'required|numeric';
    }
}
exports.requestValidator = requestValidator;
//# sourceMappingURL=requestValidator.js.map
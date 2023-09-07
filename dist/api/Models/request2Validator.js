"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.request2Validator = void 0;
const basicAuthValidator_1 = require("./basicAuthValidator");
class request2Validator extends basicAuthValidator_1.basicAuthValidator {
    constructor() {
        super();
        this.id = 'required|numeric';
        this.id2 = 'required|numeric';
    }
}
exports.request2Validator = request2Validator;
//# sourceMappingURL=request2Validator.js.map
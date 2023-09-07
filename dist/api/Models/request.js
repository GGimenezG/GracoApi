"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const basicAuth_1 = require("./basicAuth");
class request extends basicAuth_1.basicAuth {
    constructor() {
        super();
        this.id = 0;
    }
}
exports.request = request;
//# sourceMappingURL=request.js.map
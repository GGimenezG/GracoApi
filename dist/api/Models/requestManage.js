"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestManage = void 0;
const basicAuth_1 = require("./basicAuth");
class requestManage extends basicAuth_1.basicAuth {
    constructor() {
        super();
        this.id = 0;
        this.add = '';
        this.delete = '';
    }
}
exports.requestManage = requestManage;
//# sourceMappingURL=requestManage.js.map
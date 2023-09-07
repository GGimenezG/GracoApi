"use strict";
/**Here we setup things like our passport strategies and define authorization methods. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = void 0;
const bcrypt = require('bcrypt');
async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    console.log(hash);
    return hash;
}
exports.hashPassword = hashPassword;
//# sourceMappingURL=auth.js.map
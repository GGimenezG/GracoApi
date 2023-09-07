"use strict";
/**The service class acts like a wrapper for the database. Here we read and write data to the database. Furthermore, we can implement caching for example. */
Object.defineProperty(exports, "__esModule", { value: true });
const db_wrapper_1 = require("./../../../services/db.wrapper");
class AuthService {
    constructor() {
    }
    async login(loginData) {
        let res = {
            success: false,
            message: ''
        };
        try {
            const password = loginData.password; //await hashPassword(loginData.password);
            //let sql:string = 'CALL login(?,?);';
            let sql = 'select * from fnlogin($1, $2);';
            res = (await db_wrapper_1.query(sql, [loginData.email, password]));
            if (!res.success) {
                throw 'Usuario o contraseña incorrecto';
            }
        }
        catch (error) {
            res.message = error;
        }
        return res;
    }
}
exports.default = AuthService;
//# sourceMappingURL=service.js.map
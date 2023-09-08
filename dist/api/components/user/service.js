"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const db_wrapper_1 = require("./../../../services/db.wrapper");
class UserService {
    constructor() {
    }
    async Registrar(payload) {
        let res = {
            success: false,
            message: ''
        };
        try {
            /**
             * addOrUpdateBathrooms
             * @param {int} estado
             * @param {int} idPokemon
             * @param {string} token
             * @param {string} user
             */
            //let sql:string = 'SELECT * from registrarUsuario($1::varchar, $2::varchar, $3::varchar, $4::varchar)';
            //let sql:string = 'public.registrarUsuario($1::character varying, $2::character varying, $3::character varying, $4::character varying)';
            //let sql:string = 'fnregistrarUsuario';
            let sql = 'select * from fnregistrarUsuario($1, $2, $3, $4)';
            //let sql:string = `public.registrarUsuario('${payload.name}'::varchar, '${payload.lastname}'::varchar, '${payload.email}'::varchar, '${payload.password}'::varchar)`;
            res = await db_wrapper_1.query(sql, [
                payload.name,
                payload.lastname,
                payload.email,
                payload.password
            ]);
            if (!res.success || (res.data && res.data[0].oid == 0)) {
                throw res.message;
            }
        }
        catch (error) {
            res.message = error;
        }
        return res;
    }
}
exports.UserService = UserService;
//# sourceMappingURL=service.js.map
"use strict";
/**The service class acts like a wrapper for the database. Here we read and write data to the database. Furthermore, we can implement caching for example. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokedexService = void 0;
const db_wrapper_1 = require("../../../services/db.wrapper");
class PokedexService {
    constructor() {
    }
    async Update(payload) {
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
            //let sql:string = 'CALL ActualizarPokedex(?,?,?,?);';
            let sql = 'select * from fnActualizarPokedex($1, $2, $3, $4);';
            res = await db_wrapper_1.query(sql, [
                payload.estado,
                payload.id,
                payload.token,
                payload.user
            ]);
            if (!res.success) {
                throw res.message;
            }
        }
        catch (error) {
            res.message = error;
        }
        return res;
    }
    async FindAll(payload) {
        let res = {
            success: false,
            message: ''
        };
        try {
            /**
             * bathrooms_get
             * @param {string} user
             * @param {string} token
             */
            //let sql:string = 'CALL ObtenerPokedex(?,?,?);';
            let sql = 'select * from fnObtenerPokedex($1, $2);';
            res = await db_wrapper_1.query(sql, [
                payload.user,
                payload.token,
            ]);
            if (!res.success) {
                throw res.message;
            }
        }
        catch (error) {
            res.message = error;
        }
        return res;
    }
    async Find(payload) {
        let res = {
            success: false,
            message: ''
        };
        try {
            /**
             * bathrooms_get
             * @param {string} user
             * @param {string} token
             */
            //let sql:string = 'CALL ObtenerPokedex(?,?,?);';
            let sql = 'select * from fnBuscarPoke($1, $2, $3, $4);';
            res = await db_wrapper_1.query(sql, [
                payload.aleatorio,
                1,
                payload.user,
                payload.token,
            ]);
            if (!res.success) {
                throw res.message;
            }
        }
        catch (error) {
            res.message = error;
        }
        return res;
    }
}
exports.PokedexService = PokedexService;
//# sourceMappingURL=service.js.map
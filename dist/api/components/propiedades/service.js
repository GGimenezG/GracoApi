"use strict";
/**The service class acts like a wrapper for the database. Here we read and write data to the database. Furthermore, we can implement caching for example. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropiedadService = void 0;
const db_wrapper_1 = require("../../../services/db.wrapper");
class PropiedadService {
    constructor() {
    }
    async VisitarPropiedad(payload) {
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
            let sql = 'select * from fnvisitarpopiedad($1, $2, $3);';
            res = await db_wrapper_1.query(sql, [
                payload.propiedad,
                payload.token,
                payload.user
            ]);
            if (!res.success) {
                throw res.message;
            }
            else {
                const coeficiente = Math.random() < 0.80;
                if (coeficiente) {
                    sql = 'select * from fnejecutarvisitapopiedad($1, $2, $3);';
                    res = await db_wrapper_1.query(sql, [
                        payload.propiedad,
                        payload.token,
                        payload.user
                    ]);
                    if (!res.success) {
                        throw res.message;
                    }
                }
            }
        }
        catch (error) {
            res.message = error;
        }
        return res;
    }
    async TramitarPropiedad(payload) {
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
            let sql = 'select * from fntramitepopiedad($1, $2, $3, $4, $5, $6, $7);';
            res = await db_wrapper_1.query(sql, [
                payload.nombre,
                payload.correo,
                payload.telefono,
                payload.transaccion,
                payload.propiedad,
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
            let sql = 'select * from fnobtenerppropiedades();';
            res = await db_wrapper_1.query(sql, []);
            if (!res.success) {
                throw res.message;
            }
        }
        catch (error) {
            res.message = error;
        }
        return res;
    }
    async FindAllPrincipal(payload) {
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
            let sql = 'select * from fnobtenerppropiedadesprincipales();';
            res = await db_wrapper_1.query(sql, []);
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
            let sql = 'select * from fnobtenerppropiedades($1);';
            res = await db_wrapper_1.query(sql, [
                payload.propiedad,
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
    async FindLog(payload) {
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
            let sql = 'select * from fnobtenerppropiedadesusuario($1, $2, $3);';
            res = await db_wrapper_1.query(sql, [
                payload.propiedad,
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
    async History(payload) {
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
            let sql = 'select * from fnobtenerhistorialusuario($1, $2);';
            res = await db_wrapper_1.query(sql, [
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
}
exports.PropiedadService = PropiedadService;
//# sourceMappingURL=service.js.map
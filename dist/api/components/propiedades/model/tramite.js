"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tramite = void 0;
const basicAuth_1 = require("../../../Models/basicAuth");
class Tramite extends basicAuth_1.basicAuth {
    // idBathrooms: number;
    constructor() {
        super();
        this.propiedad = 0;
        this.correo = '';
        this.nombre = '';
        this.telefono = '';
        this.transaccion = 0;
    }
}
exports.Tramite = Tramite;
//# sourceMappingURL=tramite.js.map
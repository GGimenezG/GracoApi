"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Propiedad = void 0;
const basicAuth_1 = require("../../../Models/basicAuth");
class Propiedad extends basicAuth_1.basicAuth {
    constructor() {
        super();
        this.id = 0;
        this.precio = 0;
        this.metroscuadrados = 0;
        this.baños = 0;
        this.habitaciones = 0;
        this.antiguedad = new Date();
        this.tipo = 0;
        this.estado = 0;
    }
}
exports.Propiedad = Propiedad;
//# sourceMappingURL=propiedad.js.map
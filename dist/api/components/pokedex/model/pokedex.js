"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokedex = void 0;
const basicAuth_1 = require("../../../Models/basicAuth");
class Pokedex extends basicAuth_1.basicAuth {
    constructor() {
        super();
        this.id = 0;
        this.name = '';
        this.image = '';
        this.type = '';
        this.height = 0;
        this.weight = 0;
        this.url = 0;
        this.estado = 0;
    }
}
exports.Pokedex = Pokedex;
//# sourceMappingURL=pokedex.js.map
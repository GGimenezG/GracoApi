"use strict";
/**The model represents the database model for its component. In my case it’s a TypeORM class. Mostly it’s used by the service class. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor() {
        this.apellido = '';
        this.clave = '';
        this.nombre = '';
        this.mail = '';
        this.dni = '';
        this.nacimiento = new Date();
        this.direccion = '';
        this.id = 0;
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map
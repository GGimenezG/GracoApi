"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("./controller");
const validator_1 = require("./validator");
const router = (app) => {
    const c = new controller_1.PropiedadController();
    app.get('/propiedad', c.FindAll);
    app.get('/propiedad-principales', c.FindAllPrincipal);
    app.get('/propiedad/:id', c.Find);
    app.post('/visitar-propiedad', validator_1.visitarValidation, c.Visitar);
    app.post('/tramitar-propiedad', validator_1.tramitarValidation, c.Tramitar);
};
exports.default = router;
//# sourceMappingURL=routes.js.map
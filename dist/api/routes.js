"use strict";
/**Here we register all component and middleware routes. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const routes_1 = require("./components/auth/routes");
const routes_2 = require("./components/pokedex/routes");
const routes_3 = require("./components/user/routes");
const routes_4 = require("./components/propiedades/routes");
const router = (app) => {
    // Display all users
    routes_1.default(app);
    routes_2.default(app);
    routes_3.default(app);
    routes_4.default(app);
};
exports.router = router;
//# sourceMappingURL=routes.js.map
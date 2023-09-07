"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const config = {
// host: "a2nlmysql61plsk.secureserver.net",
// port: "3306",
// user: "desain",
// password: "Lara.1723",
// database: "desain",
// host: "mysql-67804-0.cloudclusters.net",
// port: "18214",
// user: "admin",
// password: "vmWYOh0m",
// database: "desainPrueba",
};
/*const pool = new Pool({
    user: "gracoapi_user",
    host: "dpg-cjrq5m5m702s73eo0pmg-a.oregon-postgres.render.com",
    database: "gracoapi",
    password: "ZnCbDQBUclZstkJ9fxcpnN1T3NjqWsHm",
    port: 5432,
  })*/ /*
const connectionString = 'postgres://gracoapi_user:ZnCbDQBUclZstkJ9fxcpnN1T3NjqWsHm@dpg-cjrq5m5m702s73eo0pmg-a.oregon-postgres.render.com/gracoapi?ssl=true'
const pool = new Pool({
  connectionString,
})
*/
const pgp = require('pg-promise')({
// Initialization Options
});
// Preparing the connection details:
const cn = 'postgres://gracoapi_user:ZnCbDQBUclZstkJ9fxcpnN1T3NjqWsHm@dpg-cjrq5m5m702s73eo0pmg-a.oregon-postgres.render.com/gracoapi?ssl=true';
// Creating a new database instance from the connection details:
const db = pgp(cn);
exports.db = db;
//# sourceMappingURL=BD.js.map
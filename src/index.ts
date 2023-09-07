/**This is the startup file of our application. It initializes the database connection and starts the express server. */
export {};

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const { cors } = require("./config/cors");
import { router } from "./api/routes";

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
	bodyParser.urlencoded({
		limit: "50mb",
		extended: true /*, parameterLimit:50000 */,
		/*type:'application/x-www-form-urlencoded' */
	})
);

// Middlewares
app.use(morgan("common"));
app.use(helmet());

app.use(cors);

const routerExpress = express.Router();

router(routerExpress);

app.use(routerExpress);

//app.use(express.json({limit: '50mb'}));

const port = process.env.PORT || 8000;

// set port, listen for requests
app.listen(port, () => {
	console.log("Server is running on port 8000.");
});

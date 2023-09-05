/*
    👮‍ Cors
*/
import * as cors from "cors";

const corsito = cors({

	origin: "*",
	exposedHeaders: ["Content-Type", "Accept", "X-Requested-With"],
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	credentials: true,
});

export { corsito as cors };

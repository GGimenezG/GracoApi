/*
    👮‍ Cors
*/
import * as cors from "cors";

const corsito = cors({
	// origin: [
	// 	"http://localhost:4200",
	// 	"https://desain.cl",
	// 	"https://www.desain.cl",
	// 	"https://admin.desain.cl",
	// 	"https://www.admin.desain.cl",
	// 	"https://develsoft.gitlab.io/",
	// 	"https://develsoft.gitlab.io/desain_bienes_raices_intranet/",
	// 	"*",
	// ],
	origin: "*",
	exposedHeaders: ["Content-Type", "Accept", "X-Requested-With"],
	headers:["Content-Type"],
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	credentials: true,
});

export { corsito as cors };

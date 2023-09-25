/**Here we register all component and middleware routes. */

import authRoutes from "./components/auth/routes";
import pokeRoutes from "./components/pokedex/routes";
import userRoutes from "./components/user/routes";
import propiedadRoutes from "./components/propiedades/routes";

import { IRouter } from "express";

const router = (app: IRouter) => {
	// Display all users
	authRoutes(app);
	pokeRoutes(app);
	userRoutes(app);
	propiedadRoutes(app);
};

export { router };

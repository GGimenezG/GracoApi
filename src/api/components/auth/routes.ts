/**Here we define our API endpoints for the corresponding component and assign the controller methods to them. 
 * Moreover we can do things like authorization (e.g. JWT), 
 * permission validation (e.g. ACL) or add component specific middleware. */
export {};
import AuthController from './controller'
import { IRouter  } from 'express';
import { loginValidation } from '../../middleware/validations/login'

const router = (app:IRouter) => {

	const Auth = new AuthController();
	
	app.post('/login', loginValidation, Auth.login);

}

export default router;
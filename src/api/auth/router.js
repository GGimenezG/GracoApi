export {};
import AuthController from './controller'
import { loginValidation } from '../../middleware/validations/login'

const router = (app) => {

	const Auth = new AuthController();
	
	app.post('/int/login', loginValidation, Auth.login);

}

export default router;
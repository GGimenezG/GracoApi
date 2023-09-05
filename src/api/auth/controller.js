import { iLogin, iLoginResponse } from './interface'
import {pool} from './../../../config';
import AuthService from './service';
import { Request, Response,IRouter  } from 'express';


class AuthController {

	constructor(){
	}


	async login(req, response) {
		const Service = new AuthService();

		const { username, password }  = req.body

		const BodySender  = {
			username,
			password
		}
		
		const res  = await Service.login(BodySender)

		if(res.result){
			response.status(201).send({
				success: true,
				message: 'Login exitoso',
				data: {
					token: btoa(`${username}/${res.token}`)
				}
			});
		}
		else {
			response.status(400).send({
				success: false,
				message: res.error
			});
		}

	}

}

export default AuthController;
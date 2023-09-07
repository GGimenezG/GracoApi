/** The controller class handles incoming requests, validates them and sends the response 
 * data back to the client. It uses the service class to interact with the database.*/
 const btoa = require('btoa');

import { response } from 'interface/response';
import { iLogin, iLoginResponse } from './interface'
import AuthService from './service'
import { Request, Response,IRouter  } from 'express';


class AuthController {

	constructor(){
	}


	public async login(req:Request, response:Response) {
		const Service = new AuthService();

		const { email, password } : any = req.body

		const BodySender : any = {
			email,
			password
		}
		
		const res : response<iLoginResponse> = await Service.login(BodySender)

		if(res.success){
			response.status(201).send({
				success: true,
				message: 'Login exitoso',
				data: {
					token: btoa(`${res.data}/${email}/${res.message}`)
				}
			});
		}
		else {
			response.status(400).send({
				success: false,
				message: res.message
			});
		}

	}

}

export default AuthController;
 
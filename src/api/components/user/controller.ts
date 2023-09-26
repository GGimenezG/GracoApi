/** The controller class handles incoming requests, validates them and sends the response 
 * data back to the client. It uses the service class to interact with the database.*/
 import { Request, Response  } from 'express';
import { UserService } from './service';
import { User } from './model/user';
import { response } from 'interface/response';

class UserController {

	constructor(){

	}

	public async Create(req:Request, response:Response ){
		
		
		const service = new UserService();

		const [user, username, token] = req.headers.authorization ? atob(req.headers.authorization).split("/") : ['', '', '']
		const { apellido,clave,direccion,dni,mail,nacimiento,nombre }: User = req.body

		const bodySender: any = {
			apellido,clave,direccion,dni,mail,nacimiento,nombre
		}

		const res: response<User> = await service.Registrar(bodySender)

		if (res.success) {
			response.status(201).send(res);
		}
		else {
			response.status(400).send(res);
		}
	}

}

export {UserController}
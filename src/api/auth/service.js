/**The service class acts like a wrapper for the database. Here we read and write data to the database. Furthermore, we can implement caching for example. */

import { iLogin, iLoginResponse } from './interface'
import {query} from './../../../services/db.wrapper';


class AuthService {

	constructor(){

	}


	async login(loginData) {
		
		let res = {
			result: 0,
		}

		try{

			const password = loginData.password//await hashPassword(loginData.password);

			let sql = 'CALL login(?,?);';
	
			res = await query<iLoginResponse>(sql, [loginData.username , password]);

			if(!res.result) {
				throw 'Usuario o contraseña incorrecto'
			}

		}
		catch (error){
			res.error = error;
		}
		
		return res;
	}

}

export default AuthService;
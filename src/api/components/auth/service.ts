/**The service class acts like a wrapper for the database. Here we read and write data to the database. Furthermore, we can implement caching for example. */

import { iLogin, iLoginResponse } from './interface'
import {query} from './../../../services/db.wrapper';
import {hashPassword} from './../../../services/auth';
import * as mysql from 'mysql';
import { response } from 'interface/response';

class AuthService {

	constructor(){

	}


	public async login(loginData: any):Promise<response<iLoginResponse>> {
		
		
		let res:response<iLoginResponse> = {
			success: false,
			message: ''
		}

		try{

			const password:string = loginData.password//await hashPassword(loginData.password);

			//let sql:string = 'CALL login(?,?);';
			let sql:string = 'select * from fnlogin($1, $2);';

	
			res = (await query<iLoginResponse>(sql, [loginData.email , password]));

			if(!res.success) {
				throw 'Usuario o contraseña incorrecto'
			}

		}
		catch (error:any){
			res.message = error;
		}
		
		return res;
	}

}

export default AuthService;
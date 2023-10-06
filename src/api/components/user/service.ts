/**The service class acts like a wrapper for the database. Here we read and write data to the database. Furthermore, we can implement caching for example. */
export {}
import { } from './interface'
import {query} from './../../../services/db.wrapper';
import { User } from './model/user'
import * as mysql from 'mysql';
import { basicResponse } from 'interface/basicResponse';
import { response } from 'interface/response';

class UserService {
	constructor(){

	}


	public async Registrar(payload: User):Promise<response<any>> {
		
		let res:response<any> = {
			success: false,
			message: ''
		}

		try{

			/**
			 * addOrUpdateBathrooms 
			 * @param {int} estado
			 * @param {int} idPokemon
			 * @param {string} token
			 * @param {string} user
			 */
			//let sql:string = 'SELECT * from registrarUsuario($1::varchar, $2::varchar, $3::varchar, $4::varchar)';
			//let sql:string = 'public.registrarUsuario($1::character varying, $2::character varying, $3::character varying, $4::character varying)';
			//let sql:string = 'fnregistrarUsuario';
			let sql:string = 'select * from fnregistrarusuariopropiedades($1, $2, $3, $4, $5, $6, $7)';
			//let sql:string = `public.registrarUsuario('${payload.name}'::varchar, '${payload.lastname}'::varchar, '${payload.email}'::varchar, '${payload.password}'::varchar)`;
	 
			res = await query<User>(sql, [
				payload.nombre,
				payload.apellido,
				payload.mail,
				payload.clave,
				payload.nacimiento,
				payload.dni,
				payload.direccion
			]);

			if(!res.success || (res.data && res.data[0].oid==0)) {
				throw res.message
			}

		}
		catch (error:any){
			res.message = error;
		}
		
		return res;
	}

	public async BuscarUsuario(payload: any):Promise<response<User[]>> {
		
		let res:response<User[]> = {
			success: false,
			message: ''
		}

		try{

			/**
			 * bathrooms_get 
			 * @param {string} user
			 * @param {string} token
			 */
			//let sql:string = 'CALL ObtenerPokedex(?,?,?);';
			let sql:string = 'select * from fnobtenerusuario($1, $2);';
			
			res = await query<User[]>(sql, [
				payload.token,
				payload.user,
			]);

			if(!res.success) {
				throw res.message
			}

		}
		catch (error:any){
			res.message = error;
		}
		
		return res;
	}

	public async CambiarClave(payload: any):Promise<response<any>> {
		
		let res:response<any> = {
			success: false,
			message: ''
		}

		try{

			/**
			 * bathrooms_get 
			 * @param {string} user
			 * @param {string} token
			 */
			//let sql:string = 'CALL ObtenerPokedex(?,?,?);';
			let sql:string = 'select * from fncambiarclave($1, $2, $3, $4);';
			
			res = await query<any>(sql, [
				payload.claveNueva,
				payload.claveAnterior,
				payload.token,
				payload.user,
			]);

			if(!res.success) {
				throw res.message
			}

		}
		catch (error:any){
			res.message = error;
		}
		
		return res;
	}

	public async ModificarUsuario(payload: any):Promise<response<any>> {
		
		let res:response<any> = {
			success: false,
			message: ''
		}

		try{

			/**
			 * bathrooms_get 
			 * @param {string} user
			 * @param {string} token
			 */
			//let sql:string = 'CALL ObtenerPokedex(?,?,?);';
			let sql:string = 'select * from fnmodificiarusuario($1, $2, $3, $4, $5, $6, $7);';
			
			res = await query<any>(sql, [
				payload.nombre,
				payload.apellido,
				payload.dni,
				payload.nacimiento,
				payload.direccion,
				payload.token,
				payload.user,
			]);

			if(!res.success) {
				throw res.message
			}

		}
		catch (error:any){
			res.message = error;
		}
		
		return res;
	}
	
}

export {UserService}
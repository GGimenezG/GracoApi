/**The service class acts like a wrapper for the database. Here we read and write data to the database. Furthermore, we can implement caching for example. */

import {query} from '../../../services/db.wrapper';
import { Pokedex } from './model/pokedex';
import { response } from '../../../interface/response';
import { request } from '../../Models/request';

class PokedexService {

	constructor(){

	}


	public async Update(payload: Pokedex):Promise<response<Pokedex>> {
		
		let res:response<Pokedex> = {
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
			//let sql:string = 'CALL ActualizarPokedex(?,?,?,?);';
			let sql:string = 'select * from fnActualizarPokedex($1, $2, $3, $4);';

	
			res = await query<Pokedex>(sql, [
				payload.estado, 
				payload.id,
				payload.token,
				payload.user
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

	public async FindAll(payload: request):Promise<response<Pokedex[]>> {
		
		let res:response<Pokedex[]> = {
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
			let sql:string = 'select * from fnObtenerPokedex($1, $2);';
			
			res = await query<Pokedex[]>(sql, [
				payload.user,
				payload.token,
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

	public async Find(payload: any):Promise<response<Pokedex[]>> {
		
		let res:response<Pokedex[]> = {
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
			let sql:string = 'select * from fnBuscarPoke($1, $2, $3, $4);';
			
			res = await query<Pokedex[]>(sql, [
				payload.aleatorio,
				1,
				payload.user,
				payload.token,
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

export {PokedexService};
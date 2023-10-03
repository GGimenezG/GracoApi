/**The service class acts like a wrapper for the database. Here we read and write data to the database. Furthermore, we can implement caching for example. */

import {query} from '../../../services/db.wrapper';
import { Propiedad } from './model/propiedad';
import { response } from '../../../interface/response';
import { request } from '../../Models/request';
import { Visita } from './model/visita';
import { basicResponse } from 'api/Models/basicResponse';
import { Tramite } from './model/tramite';

class PropiedadService {

	constructor(){

	}


	public async VisitarPropiedad(payload: Visita):Promise<response<basicResponse>> {
		
		let res:response<basicResponse> = {
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
			let sql:string = 'select * from fnvisitarpopiedad($1, $2, $3);';

	
			res = await query<basicResponse>(sql, [
				payload.propiedad, 
				payload.token,
				payload.user
			]);

			if(!res.success) {
				throw res.message
			}
			else{
				const coeficiente =  Math.random() < 0.80;

				if(coeficiente){
					sql = 'select * from fnejecutarvisitapopiedad($1, $2, $3);';

	
					res = await query<basicResponse>(sql, [
						payload.propiedad, 
						payload.token,
						payload.user
					]);

					if(!res.success) {
						throw res.message
					}
				}

			}

		}
		catch (error:any){
			res.message = error;
		}
		
		return res;
	}

	public async TramitarPropiedad(payload: Tramite):Promise<response<basicResponse>> {
		
		let res:response<basicResponse> = {
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
			let sql:string = 'select * from fntramitepopiedad($1, $2, $3, $4, $5, $6, $7);';

	
			res = await query<basicResponse>(sql, [
				payload.nombre,
				payload.correo,
				payload.telefono,
				payload.transaccion,
				payload.propiedad, 
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

	public async FindAll(payload: request):Promise<response<Propiedad[]>> {
		
		let res:response<Propiedad[]> = {
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
			let sql:string = 'select * from fnobtenerppropiedades();';
			
			res = await query<Propiedad[]>(sql, []);

			if(!res.success) {
				throw res.message
			}

		}
		catch (error:any){
			res.message = error;
		}
		
		return res;
	}

	public async FindAllPrincipal(payload: request):Promise<response<Propiedad[]>> {
		
		let res:response<Propiedad[]> = {
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
			let sql:string = 'select * from fnobtenerppropiedadesprincipales();';
			
			res = await query<Propiedad[]>(sql, []);

			if(!res.success) {
				throw res.message
			}

		}
		catch (error:any){
			res.message = error;
		}
		
		return res;
	}
	

	public async Find(payload: any):Promise<response<Propiedad[]>> {
		
		let res:response<Propiedad[]> = {
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
			let sql:string = 'select * from fnobtenerppropiedades($1);';
			
			res = await query<Propiedad[]>(sql, [
				payload.propiedad,
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

	public async FindLog(payload: any):Promise<response<Propiedad[]>> {
		
		let res:response<Propiedad[]> = {
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
			let sql:string = 'select * from fnobtenerppropiedadesusuario($1, $2, $3);';
			
			res = await query<Propiedad[]>(sql, [
				payload.propiedad,
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

	public async History(payload: request):Promise<response<Propiedad[]>> {
		
		let res:response<Propiedad[]> = {
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
			let sql:string = 'select * from fnobtenerhistorialusuario($1, $2);';
			
			res = await query<Propiedad[]>(sql, [
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

	
}

export {PropiedadService};
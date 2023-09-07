/** The controller class handles incoming requests, validates them and sends the response 
 * data back to the client. It uses the service class to interact with the database.*/
const atob = require('atob');

import { PokedexService } from './service'
import { Request, Response } from 'express';
import { Pokedex } from './model/pokedex';
import { response } from '../../../interface/response';
import { request } from '../../Models/request';
class PokedexController {

	constructor() {
		//this.service = new PokedexService();
	}


	public async Update(req: Request, response: Response) {

		const service = new PokedexService();

		const [user, username, token] = req.headers.authorization ? atob(req.headers.authorization).split("/") : ['', '', '']
		const { id, estado }: Pokedex = req.body


		const coeficiente =  Math.random() < 0.35;

		if(coeficiente){

			const bodySender: Pokedex = {
				estado,
				id,
				token,
				user
			}
	
			const res: response<Pokedex> = await service.Update(bodySender)
	
			if (res.success) {
				response.status(201).send(res);
			}
			else {
				response.status(400).send(res);
			}
		}
		else{
			let res:response<Pokedex[]> = {
				success: false,
				message: 'escapo'
			}
			response.status(400).send(res);
		}


	}

	public async FindAll(req: Request, response: Response) {
		const service = new PokedexService();

		const [user, username, token] = req.headers.authorization ? atob(req.headers.authorization).split("/") : ['', '', '']

		const bodySender: request = {
			id/*Pokedex*/: 0,
			token,
			user
		}

		const res: response<Pokedex[]> = await service.FindAll(bodySender)

		if (res.success) {
			response.status(201).send(res);
		}
		else {
			response.status(400).send(res);
		}

	}

	public async SolicitarPokemon(req: Request, response: Response) {
		const service = new PokedexService();

		const [user, username, token] = req.headers.authorization ? atob(req.headers.authorization).split("/") : ['', '', '']

		const bodySender: any = {
			id/*Pokedex*/: 0,
			aleatorio: Math.floor((Math.random() * (151 - 0 + 1)) + 0),
			token,
			user
		}

		const res: response<Pokedex[]> = await service.Find(bodySender)

		

		if (res.success) {
			response.status(201).send(res);
		}
		else {
			response.status(400).send(res);
		}

	}

	

}

export { PokedexController };

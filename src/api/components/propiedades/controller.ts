/** The controller class handles incoming requests, validates them and sends the response 
 * data back to the client. It uses the service class to interact with the database.*/
const atob = require('atob');

import { PropiedadService } from './service'
import { Request, Response } from 'express';
import { Propiedad } from './model/propiedad';
import { response } from '../../../interface/response';
import { request } from '../../Models/request';
import { Visita } from './model/visita';
import { basicResponse } from 'interface/basicResponse';
import { Tramite } from './model/tramite';
class PropiedadController {

	constructor() {
		//this.service = new PokedexService();
	}


	public async Visitar(req: Request, response: Response) {

		const service = new PropiedadService();

		const [user, username, token] = req.headers.authorization ? atob(req.headers.authorization).split("/") : ['', '', '']
		const { propiedad }: Visita = req.body



			const bodySender: Visita = {
				propiedad,
				token,
				user
			}
	
			const res: response<basicResponse> = await service.VisitarPropiedad(bodySender)
	
			if (res.success) {
				response.status(201).send(res);
			}
			else {
				response.status(400).send(res);
			}
	}

	public async Tramitar(req: Request, response: Response) {

		const service = new PropiedadService();

		const [user, username, token] = req.headers.authorization ? atob(req.headers.authorization).split("/") : ['', '', '']
		const { propiedad, nombre, correo, telefono, transaccion }: Tramite = req.body


			const bodySender: Tramite = {
				propiedad,
				correo,
				nombre,
				telefono,
				transaccion,
				token,
				user
			}
	
			const res: response<basicResponse> = await service.VisitarPropiedad(bodySender)
	
			if (res.success) {
				response.status(201).send(res);
			}
			else {
				response.status(400).send(res);
			}
	}

	public async FindAll(req: Request, response: Response) {
		const service = new PropiedadService();

		//const [user, username, token] = req.headers.authorization ? atob(req.headers.authorization).split("/") : ['', '', '']

		const bodySender: any = {
			
		}

		let res: response<any> = await service.FindAll(bodySender)

		res.data = res.data?.map((r:Propiedad)=> {
			return {
				...r,
				imagenes: (<string>r.imagenes).split(',')
			}
		} )


		if (res.success) {
			response.status(201).send(res);
		}
		else {
			response.status(400).send(res);
		}

	}

	public async Historial(req: Request, response: Response) {
		const service = new PropiedadService();

		const [user, username, token] = req.headers.authorization ? atob(req.headers.authorization).split("/") : ['', '', '']

			const bodySender: any = {
				token,
				user
			}

		let res: response<any> = await service.History(bodySender)

		res.data = res.data?.map((r:Propiedad)=> {
			return {
				...r,
				imagenes: (<string>r.imagenes).split(',')
			}
		} )


		if (res.success) {
			response.status(201).send(res);
		}
		else {
			response.status(400).send(res);
		}

	}

	
	public async FindAllPrincipal(req: Request, response: Response) {
		const service = new PropiedadService();

		//const [user, username, token] = req.headers.authorization ? atob(req.headers.authorization).split("/") : ['', '', '']

		const bodySender: any = {

		}

		const res: response<any> = await service.FindAllPrincipal(bodySender)
		
		
		if (res.success) {
			response.status(201).send(res);
		}
		else {
			response.status(400).send(res);
		}

	}

	public async Find(req: Request, response: Response) {
		const service = new PropiedadService();

		const [user, username, token] = req.headers.authorization ? atob(req.headers.authorization).split("/") : ['', '', '']

		const bodySender: any = {
			id: req.params.id,
			token,
			user
		}

		let res: response<any> = await service.Find(bodySender)

		res.data.imagenes = res.data?.imagenes.split(',')
		/*res.data = res.data?.map((r:Propiedad)=> {
			return {
				...r,
				imagenes: (<string>r.imagenes).split(',')
			}
		} )*/
		if (res.success) {
			response.status(201).send(res);
		}
		else {
			response.status(400).send(res);
		}

	}

	public async FindLog(req: Request, response: Response) {
		const service = new PropiedadService();

		const [user, username, token] = req.headers.authorization ? atob(req.headers.authorization).split("/") : ['', '', '']

		const bodySender: any = {
			id: req.params.id,
			token,
			user
		}

		const res: response<any> = await service.FindLog(bodySender)

		res.data = res.data?.map((r:Propiedad)=> {
			return {
				...r,
				imagenes: (<string>r.imagenes).split(',')
			}
		} )
		if (res.success) {
			response.status(201).send(res);
		}
		else {
			response.status(400).send(res);
		}

	}
	

}

export { PropiedadController };

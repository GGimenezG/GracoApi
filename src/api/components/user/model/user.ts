/**The model represents the database model for its component. In my case it’s a TypeORM class. Mostly it’s used by the service class. */

export class User {
	id?: number;
	nombre: string;
	apellido: string;
	mail: string;
	clave: string;
	dni: string;
	nacimiento: Date;
	direccion: string;

	constructor(){
		this.apellido =''
		 this.clave ='';
		 this.nombre = '';
		 this.mail = '';
		 this.dni ='';
		 this.nacimiento = new Date();
		 this.direccion = '';
		 this.id = 0;
	}

}
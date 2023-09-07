/**The model represents the database model for its component. In my case it’s a TypeORM class. Mostly it’s used by the service class. */

export class User {
	idUsers: number;
	password: string;
	email: string;
	name: string;
	lastname: string;

	constructor(){
		this.email = '';
		this.idUsers = 0;
		this.lastname = '';
		this.name = '';
		this.password = '';
	}

}
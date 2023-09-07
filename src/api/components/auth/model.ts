/**The model represents the database model for its component. In my case it’s a TypeORM class. Mostly it’s used by the service class. */
export {};


class Auth {
    username: string;
    password: string;

    constructor(){
        this.password = '';
        this.username = '';
    }

    
}
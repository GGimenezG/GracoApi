class basicAuthValidator {
    token: string;
    user: string;


	constructor() {
		this.token = 'required|string';
		this.user = 'required|string';
	}
	
}

export { basicAuthValidator}
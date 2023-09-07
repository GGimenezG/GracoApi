import { basicAuthValidator } from "./basicAuthValidator";


class requestValidator extends basicAuthValidator {
    id: string;
    constructor(){
        super();
        this.id = 'required|numeric'
    }
}

export { requestValidator }
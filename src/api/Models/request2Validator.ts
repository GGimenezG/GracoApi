import { basicAuthValidator } from "./basicAuthValidator";

class request2Validator extends basicAuthValidator {
    id: string;
    id2: string;
    constructor(){
        super();
        this.id = 'required|numeric'
        this.id2 = 'required|numeric'
    }
}

export { request2Validator }
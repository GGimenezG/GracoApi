import { basicAuth } from "./basicAuth";

class request extends basicAuth {
	id: number;
	constructor(){
        super();
		this.id = 0;
	}
}

export { request }
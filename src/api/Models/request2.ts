import { basicAuth } from "./basicAuth";

class request2 extends basicAuth {
	id: number;
    id2: number;
	constructor(){
        super();
		this.id = 0;
        this.id2 = 0;
	}
}


export { request2 }
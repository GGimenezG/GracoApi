import { basicAuth } from "./basicAuth";

class requestManage extends basicAuth {
	id: number;
    add: string;
    delete: string;
	constructor(){
        super();
		this.id = 0;
        this.add = '';
        this.delete = '';
	}
}

export { requestManage }
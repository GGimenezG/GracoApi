import { basicAuth } from "./basicAuth";

class requestArray<T> extends basicAuth {
	data: Array<T>;
	constructor() {
		super();
		this.data = [];
	}
}

export { requestArray };

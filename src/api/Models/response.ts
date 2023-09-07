class response<T> {
	success: boolean | number;
	message: string;
	data?: T;

	constructor(){
		this.success = false;
		this.message = '';
	}
}

export {response}
interface response<T> {
	success: boolean | number;
	message: string;
	data?: T[] | any;
	id?: number;
}

export { response };

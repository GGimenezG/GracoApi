interface response<T> {
	success: boolean | number;
	message: string;
	data?: T[];
	id?: number;
}

export { response };


interface iLogin {
	username: string,
	password: string
}

interface iLoginResponse {
	result: number,
	token?: string,
	error?: string
}

interface iError{
	code: number,
	message: string
}

export { iLogin, iLoginResponse }
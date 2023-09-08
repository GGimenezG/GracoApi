import { response } from 'interface/response';
import * as pg from 'pg'
import {db} from './../config/BD'


export const query = async <T>(sql:string, params:Array<any>) => {

	let res: response<T>={
		success: false,
		message: "Error: the record could not be inserted"
	}

	const response = await db.query(sql, params)
	//const response = await client.query(sql, params);
	if(response && response[0]){
		res.success = true;
		if(response.length > 0){
			res.success= true;
			res.message = 'ok';
			res.data = response;
		}
		else
		if(response[0].id == '' || response[0]?.oid == 0){
			res.success = false;
			res.message = 'Invalid session token'
			return res;
		}
       else
		if(response[0].omessage){
			res.message = response[0].omessage;
		}
		else
		if(response[0].vuser){
			res.data = response[0].vuser;
			res.message = response[0].vtoken;
		}
		else
		if(response[0].vuser==null){
			res.success = false;
			res.message = 'User or password incorrect';
		}
		else{
			res.data = response;
			res.message = 'ok';
		}
		
    }
	//console.log(response);
	//res.data = response.rows
	//client.release();
	return res
	/*await db.query(sql,[...params], (error : any, result :any)=>{

		if(error)
			throw error;

		console.log(result);
		return result;
	})*/
	/*
	if(rowCount > 0){
		res.success = true;
		res.message = "Record added successfully"
	}


	if(rows.length > 2){
		const [data, res] : any = rows

		if(res[0].success){
			res[0].success = true;
			res[0].data = data
		}
		else{
			res[0].success = false;
		}
		return res[0];
	}
	else{
		const [res] : any = rows

		if(res[0].success){
			res[0].success = true;
		}
		else{
			res[0].success = false;
		}
		return res[0]
	}

	*/
}
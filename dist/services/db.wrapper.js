"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
const BD_1 = require("./../config/BD");
const query = async (sql, params) => {
    var _a;
    let res = {
        success: false,
        message: "Error: the record could not be inserted"
    };
    const response = await BD_1.db.query(sql, params);
    //const response = await client.query(sql, params);
    if (response && response[0]) {
        if (response[0].id == '' || ((_a = response[0]) === null || _a === void 0 ? void 0 : _a.oid) == 0) {
            res.success = false;
            res.message = 'Invalid session token';
            return res;
        }
        res.success = true;
        if (response[0].omessage) {
            res.message = response[0].omessage;
        }
        else if (response[0].vuser) {
            res.success = response[0].vuser;
            res.message = response[0].vtoken;
        }
        else if (response[0].vuser == null) {
            res.success = false;
            res.message = 'User or password incorrect';
        }
        else {
            res.data = response;
            res.message = 'ok';
        }
    }
    //console.log(response);
    //res.data = response.rows
    //client.release();
    return res;
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
};
exports.query = query;
//# sourceMappingURL=db.wrapper.js.map
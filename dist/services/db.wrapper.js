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
        if ('oid' in response[0]) {
            if (response[0].ores == 1) {
                res.success = true;
                res.message = response[0].omessage;
                return res;
            }
            if (response[0].id == '' || ((_a = response[0]) === null || _a === void 0 ? void 0 : _a.oid) == 0) {
                res.success = false;
                res.message = response[0].omessage || 'Invalid session token';
                return res;
            }
            else if (response[0].omessage) {
                res.success = true;
                res.message = response[0].omessage;
            }
            return res;
        }
        if ('vuser' in response[0]) {
            if (response[0].vuser) {
                res.success = true;
                res.data = response[0].vuser;
                res.message = response[0].vtoken;
            }
            else if (response[0].vuser == null) {
                res.success = false;
                res.message = 'User or password incorrect';
            }
            return res;
        }
        if ('url' in response[0] && response[0].id == '') {
            res.success = false;
            res.message = response[0].omessage || 'Invalid session token';
            return res;
        }
        if (response.length == 1) {
            res.success = true;
            res.message = 'ok';
            res.data = response[0];
        }
        else {
            res.success = true;
            res.message = 'ok';
            res.data = response;
        }
        return res;
    }
    return res;
    //console.log(response);
    //res.data = response.rows
    //client.release();
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
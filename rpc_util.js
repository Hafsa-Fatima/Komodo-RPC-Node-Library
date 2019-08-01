var request = require('request');

module.exports.rpc_request = (data,connectJSON) => {

    var headers = {
        'content-type': 'application/json;'
    };



    var options = {
        url: connectJSON.url+':'+connectJSON.port,
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
        auth: {
            'user': connectJSON.user,
            'pass': connectJSON.password
        }
    };

    return new Promise((resolve,reject) =>{

        request(options,(err,res,body)=>{

           if (!err && res.statusCode == 200) {
               resolve(JSON.parse(body))
               }else reject(JSON.parse(body))

           })
       })
       .then((body)=>(body.result))
       .catch((err)=>('error code: '+err.error.code+'\nerror message: '+err.error.message))
}

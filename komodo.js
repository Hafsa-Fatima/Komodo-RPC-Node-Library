
function Connect(user,password,url,port){
    this.json = {
        user : user,
        password : password,
        url : url,
        port : port
    }
}


module.exports.Connect = Connect

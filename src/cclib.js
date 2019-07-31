let komodo = require('../komodo')
let rpc = require('../rpc_util')

let Connect = komodo.Connect

Connect.prototype.cclib = function(){
  /*

  Arguments:

  Response:

  eg:

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "";
  if()
    dataString.params = []
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.cclibaddress = function(){
  /*

  Arguments:

  Response:

  eg:

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "";
  if()
    dataString.params = []
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.cclibinfo = function(){
  /*

  Arguments:

  Response:

  eg:

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "";
  if()
    dataString.params = []
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

module.exports.Connect = Connect

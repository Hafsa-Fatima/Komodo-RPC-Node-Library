let komodo = require('../komodo')
let rpc = require('../rpc_util')

let Connect = komodo.Connect

Connect.prototype.createrawtransaction = function(){
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
Connect.prototype.decoderawtransaction = function(){
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

Connect.prototype.decodescript = function(){
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

Connect.prototype.fundrawtransaction = function(){
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

Connect.prototype.getrawtransaction = function(){
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

Connect.prototype.sendrawtransaction = function(){
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

Connect.prototype.signrawtransaction = function(){
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

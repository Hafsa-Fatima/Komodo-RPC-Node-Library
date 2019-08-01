let komodo = require('../komodo')
let rpc = require('../rpc_util')

let Connect = komodo.Connect

Connect.prototype.getblocksubsidy = function(height){
  /*
  The getblocksubsidy method returns the
  block-subsidy reward. The resulting calculation
  takes into account the mining slow start. This
  method can be used in conjunction with custom
  mining rewards designed by the developers of a
  KMD-based Smart Chain.

  Arguments
  height 	(numeric, optional) 	the block height; if the block height is not provided, the method defaults to the current height of the chain

  Response
  "miner" 	(numeric) 	the mining reward amount

  Examples:

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getblocksubsidy";
  if(height ==0 || height)
    dataString.params = [height]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
Connect.prototype.getblocktemplate = function(mode,capabilities,support){
  /*
  The getblocktemplate method returns data that is necessary to construct a block.

  If the request parameters include a mode key, it is used to explicitly select between the default 'template' request, a 'proposal' or 'disablecb'.


  Arguments:

  Response:

  eg:

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getblocktemplate";
  if(dataString)
    dataString.params = []
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
Connect.prototype.getlocalsolps = function(){
  /*

  Arguments:

  Response:

  eg:

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getlocalsolps";
  if(dataString)
    dataString.params = []
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
Connect.prototype.getmininginfo = function(){
  /*

  Arguments:

  Response:

  eg:

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getmininginfo";
  if(dataString)
    dataString.params = []
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
Connect.prototype.getnetworkhashps = function(){
  /*

  Arguments:

  Response:

  eg:

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getnetworkhashps";
  if(dataString)
    dataString.params = []
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
Connect.prototype.getnetworksolps = function(){
  /*

  Arguments:

  Response:

  eg:

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getnetworksolps";
  if(dataString)
    dataString.params = []
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
Connect.prototype.prioritisetransaction = function(){
  /*

  Arguments:

  Response:

  eg:

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "prioritisetransaction";
  if(dataString)
    dataString.params = []
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
Connect.prototype.submitblock = function(){
  /*

  Arguments:

  Response:

  eg:

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "submitblock";
  if(dataString)
    dataString.params = []
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

module.exports.Connect = Connect

let komodo = require('../komodo')
let rpc = require('../rpc_util')

let Connect = komodo.Connect

Connect.prototype.generate = function(numblocks){
  /*
  generate numblocks

  This function can only be used in the regtest
  mode (for testing purposes).

  The generate method instructs the coin daemon
  to immediately mine the indicated number of
  blocks.

  Argument:
  numblocks 	(numeric) 	the desired number of blocks to generate

  Response
  blockhashes 	(array) 	hashes of blocks generated

  Examples:
  conn.generate(2)
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "generate";
  if(numblocks || numblocks==0)
    dataString.params = [numblocks]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
Connect.prototype.getgenerate = function(){
  /*
  The getgenerate method returns a boolean value
  indicating the server's mining status.
  The default value is false.

  Arguments:
  (none)

  Response:
  true/false 	(boolean) 	indicates whether the server is set to generate coins

  Examples:
  conn.getgenerate()
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getgenerate";
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
Connect.prototype.setgenerate = function(generate=false,genproclimit){
  /*
  The setgenerate method allows the user to set
  the generate property in the coin daemon to true
  or false, thus turning generation (mining/staking)
  on or off.

  Generation is limited to genproclimit processors. Set genproclimit to -1 to use maximum available processors.

  Arguments:
  1. generate         (boolean, required) Set to true to turn on generation, off to turn off.
  2. genproclimit     (numeric, optional) Set processor limit when generation is on. Can be -1 for unlimited, 0 to turn on staking.

  Examples:
  conn.setgenerate(true,1)

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "setgenerate";
  if(genproclimit)
    dataString.params = [generate,genproclimit]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

module.exports.Connect = Connect

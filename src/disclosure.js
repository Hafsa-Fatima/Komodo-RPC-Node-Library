let komodo = require('../komodo')
let rpc = require('../rpc_util')

let Connect = komodo.Connect

Connect.prototype.z_getpaymentdisclosure = function(txid,js_index=0,output_index=0,message=''){
  /*
  Generate a payment disclosure for a given joinsplit output.

  Arguments:
  1. "txid"            (string, required)
  2. "js_index"        (string, required)
  3. "output_index"    (string, required)
  4. "message"         (string, optional)

  Result:
  "paymentdisclosure"  (string) Hex data string, with "zpd:" prefix.

  Examples:
  conn.z_getpaymentdisclosure("51233ca562180a0c32e1977624320526b7d4026b40fc46832473e08452265fad",0,0)
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "z_getpaymentdisclosure";
  if(txid)
    dataString.params = [txid,js_index,output_index,message]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
Connect.prototype.z_validatepaymentdisclosure = function(paymentdisclosure){
  /*
  Validates a payment disclosure.

  EXPERIMENTAL FEATURE

  Arguments:
  1. "paymentdisclosure"     (string, required) Hex data string, with "zpd:" prefix.

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "z_validatepaymentdisclosure";
  if(paymentdisclosure)
    dataString.params = [paymentdisclosure]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

module.exports.Connect = Connect

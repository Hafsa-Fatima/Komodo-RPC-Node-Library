let komodo = require('../komodo')
let rpc = require('../rpc_util')

let Connect = komodo.Connect

Connect.prototype.jumblr_deposit = function(depositaddress){
  /*
  The jubmlr_deposit method indicates the address
  from which Jumblr should withdraw funds. There
  should be at least 10.024 KMD in this address.
  Jumblr will withdraw funds in increments of 10,
  100, or 7770 KMD.

  Arguments:
  "depositaddress" 	(string, required) 	the address from which Jumblr will withdraw funds

  Response:
  (none)

  Examples
  conn.jumblr_deposit("RCpMUZwxc3pWsgip5aj3Sy1cKkh86P3Tns")

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "jumblr_deposit";
  if(depositaddress)
    dataString.params = [depositaddress]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
Connect.prototype.jumblr_pause = function(){
  /*
  The jumblr_pause method instructs Jumblr to
  temporarily pause the privacy-shielding process.

  Arguments:
  (none)

  Response:
  (none)

  Examples
  conn.jumblr_pause()

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "jumblr_pause";
  dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.jumblr_resume = function(){
  /*
  The jumblr_resume method instructs Jumblr
  to resume the privacy-shielding process.

  Arguments:
  (none)

  Response:
  (none)

  Examples:
  conn.jumblr_resume()

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "jumblr_resume";
  if(dataString)
    dataString.params = []
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
Connect.prototype.jumblr_secret = function(secretaddress){
  /*

  The jumblr_secret method indicates to Jumblr the
  final t destination address. This should be a
  separate t address that has no connection to
  the wallet.dat file of your jumblr_deposit address.
  Ideally, you should only access the final
  jumblr_secret address via a separate node, and
  with other layers of privacy (VPN, Tor, etc.).

  Argument:
  "secretaddress" 	(string, required) 	the destination transparent address

  Response:
  (none)

  Examples:
  conn.jumblr_secret("RCpMUZwxc3pWsgip5aj3Sy1cKkh86P3Tns")

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "jumblr_secret";
  if(secretaddress)
    dataString.params = [secretaddress]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

module.exports.Connect = Connect

let komodo = require('../komodo')
let rpc = require('../rpc_util')

let Connect = komodo.Connect

Connect.prototype.getinfo = function(){
  /*
  The getinfo method returns an object containing various state info.

  Arguments:
  (none)

  Response:
  "version" 	(numeric) 	the server version
  "protocolversion" 	(numeric) 	the protocol version
  "walletversion" 	(numeric) 	the wallet version
  "balance" 	(numeric) 	the total balance of the wallet
  "blocks" 	(numeric) 	the current number of blocks processed in the server
  "timeoffset" 	(numeric) 	the time offset
  "connections" 	(numeric) 	the number of connections
  "proxy" 	(string, optional) 	the proxy used by the server
  "difficulty" 	(numeric) 	the current difficulty
  "testnet" 	(boolean) 	if the server is using testnet or not
  "keypoololdest" 	(numeric) 	the timestamp (seconds since GMT epoch) of the oldest pre-generated key in the key pool
  "keypoolsize" 	(numeric) 	how many new keys are pre-generated
  "unlocked_until" 	(numeric) 	the timestamp in seconds since epoch (midnight Jan 1 1970 GMT) that the wallet is unlocked for transfers, or 0 if the wallet is locked
  "paytxfee" 	(numeric) 	the transaction fee set in COIN/kB
  "relayfee" 	(numeric) 	minimum relay fee for non-free transactions in COIN/kB
  "errors" 	(string) 	any error messages

  Examples:
  conn.getinfo()
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getinfo";
  dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
Connect.prototype.help = function(command){
  /*
  The help method lists all commands, or all
  information for a specified command.

  Arguments:
  "command" 	(string, optional) 	the command requiring assistance

  Response:
  "command" 	(string, optional) 	the command requiring assistance

  Examples:
  conn.help("getwalletinfo")
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "help";
  if(command)
    dataString.params = [command]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
Connect.prototype.stop = function(){
  /*
  The stop method instructs the coin daemon to shut down.
  The amount of time it takes to shut down the chain
  will vary depending on the chain's current state.

  Forcefully stopping the chain should be avoided, as
  it may corrupt the local database. In the event of
  a corrupted database, the user will need to resync.

  Arguments  :
  (none)

  Response:
  Komodo server stopping
  [COIN] Komodo server stopping

  Examples:
  conn.stop()

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "stop";
  dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

module.exports.Connect = Connect

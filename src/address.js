let komodo = require('../komodo')
let rpc = require('../rpc_util')

let Connect = komodo.Connect

Connect.prototype.getaddressbalance = function(addresses){
  /*
  The getaddressbalance method returns the confirmed balance
  for an address, or addresses. It requires addressindex to
  be enabled.

  Arguments:
  "address" 	array of (string) addresses

  Response:
  "balance" 	(number) 	the current confirmed balance in satoshis
  "received" 	(number) 	the total confirmed number of satoshis
                received (including change)

  eg:
  conn.getaddressbalance(["RXPCMQLny4EqjEje94dm2CfCfTpxqyXK5L"])
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getaddressbalance";
  if(addresses)
    dataString.params = [{"addresses":addresses}]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.getaddressdeltas = function(addresses,start,end,chaininfo){
/*
  The getaddressdeltas method returns all confirmed balance
  changes of an address.

  Arguments:
   "address" 	array of (string) addresses
   "start" 	(number) 	the start block height
   "end" 	(number) 	the end block height
   "chainInfo" 	(boolean) 	include chain info in results (only applies
            if start and end specified

  Response:
    "satoshis" 	(number) 	the difference in satoshis
   "txid" 	(string) 	the related transaction id
   "index" 	(number) 	the related input or output index
   "height" 	(number) 	the block height
   "address" 	(string) 	the address

  eg:
   conn.getaddressdeltas(["RXPCMQLny4EqjEje94dm2CfCfTpxqyXK5L"],1,200,true})
   conn.getaddressdeltas(["RXPCMQLny4EqjEje94dm2CfCfTpxqyXK5L"])

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getaddressdeltas";
  if(addresses && start && end && chaininfo)
    dataString.params = [{addresses:addresses,start:start,end:end,chainInfo:chaininfo}]
  else if(addresses)
    dataString.params = [{"addresses":addresses}]
  else
    dataString.params = []
    // console.log(JSON.stringify(dataString));
  return rpc.rpc_request(dataString, this.json)

}

Connect.prototype.getaddressmempool = function(addresses){
  /*

  The getaddressmempool method returns all mempool deltas
  for an address, or addresses. The method requires
  addressindex to be enabled.

  Arguments:
   (array of string) the address

  Response:
   "address" 	(string) 	the address
   "txid" 	(string) 	the related txid
   "index" 	(number) 	the related input or output index
   "satoshis" 	(number) 	the difference in satoshis
   "timestamp" 	(number) 	the time the transaction
              entered the mempool (seconds)
   "prevtxid" 	(string) 	the previous txid (if spending)
   "prevout" 	(string) 	the previous
              transaction output index (if spending)

   eg: conn.getaddressmempool(["RXPCMQLny4EqjEje94dm2CfCfTpxqyXK5L"])

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getaddressmempool";
  if(addresses)
    dataString.params = [{"addresses":addresses}]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.getaddresstxids = function(addresses,start=0,end=0){
/*
  The getaddresstxids method returns the txids for an
  address, or addresses. It requires addressindex to be
  enabled.

  Arguments:
  {
    "addresses" (string) array of address
    "start" (number) The start block height
    "end" (number) The end block height
  }

  CCvout (optional) Return CCvouts instead of normal vouts

  Reponse:
  [
    "transactionid"  (string) The transaction id
    ,...
  ]

  eg:
  conn.getaddresstxids(["RKPuQ1CzJ7t4jUKzveww3nS1RNGQuyHms5"],1,10)
*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getaddresstxids";
  if(addresses,start,end)
    dataString.params = [{"addresses":addresses,"start":start,"end":end}]
  if(addresses)
    dataString.params = [{"addresses":addresses}]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.getaddressutxos = function(addresses,chainInfo){
/*
  The getaddressutxos method returns all unspent
  outputs for an address. It requires addressindex
  to be enabled.

  Arguments:
  "address" 	(string) 	array of the address
  "chainInfo" 	(boolean) 	include chain info with results

  Response:
  "address" 	(string) 	the address
  "txid" 	(string) 	the output txid
  "height" 	(number) 	the block height
  "outputIndex" 	(number) 	the output index
  "script" 	(string) 	the script hex encoded
  "satoshis" 	(number) 	the number of satoshis of the output

  eg:
  conn.getaddressutxos(["RKPuQ1CzJ7t4jUKzveww3nS1RNGQuyHms5"],true)


*/

  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getaddressutxos";
  if(addresses && chainInfo)
    dataString.params = [{addresses:addresses,chainInfo:chainInfo}]
  else if(addresses)
    dataString.params = [{"addresses":addresses}]
  else
    dataString.params = []

  return rpc.rpc_request(dataString, this.json)

}

Connect.prototype.getsnapshot = function(top){
/*
  The getsnapshot method returns a snapshot of
  addresses and their amounts at the Smart Chain's
  current height.

  Arguments:
  "top" 	(number, optional) 	Only return this many addresses, i.e. top N rich list

  Response:
  "addresses" 	(array of jsons) 	the array containing the address and amount details
  "addr" 	(string) 	an address
  "amount" 	(number) 	the amount of coins in the above address
  "total" 	(numeric) 	the total amount in snapshot
  "average" 	(numeric) 	the average amount in each address
  "utxos" 	(number) 	the total number of utxos in snapshot
  "total_addresses" 	(number) 	the total number of addresses in snapshot,
  "start_height" 	(number) 	the block height snapshot began
  "ending_height" 	(number) 	the block height snapshot finished,
  "start_time" 	(number) 	the unix epoch time snapshot started
  "end_time" 	(number) 	the unix epoch time snapshot finished

  eg:
  conn.getsnapshot(5)

*/

  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getsnapshot";
  if(top)
    dataString.params = [top.toString()]
  else
    dataString.params = []

  return rpc.rpc_request(dataString, this.json)
}

module.exports.Connect = Connect

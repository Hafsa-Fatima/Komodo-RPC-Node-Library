let komodo = require('../komodo')
let rpc = require('../rpc_util')

let Connect = komodo.Connect

Connect.prototype.getaddressbalance = function(address){
  /*

  eg: conn.getaddressbalance({"addresses":["RXPCMQLny4EqjEje94dm2CfCfTpxqyXK5L"]})

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getaddressbalance";
  if(address)
    dataString.params = [address]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.getaddressdeltas = function(addresses,start,end,chaininfo){
/*
  The getaddressdeltas method returns all confirmed balance changes of an address.

  :argument "address" 	array of (string) addresses
  :argument "start" 	(number) 	the start block height
  :argument "end" 	(number) 	the end block height
  :argument "chainInfo" 	(boolean) 	include chain info in results (only applies
            if start and end specified

  :response  "satoshis" 	(number) 	the difference in satoshis
  :response "txid" 	(string) 	the related transaction id
  :response "index" 	(number) 	the related input or output index
  :response "height" 	(number) 	the block height
  :response "address" 	(string) 	the address

  eg: conn.getaddressdeltas(["RXPCMQLny4EqjEje94dm2CfCfTpxqyXK5L"],1,200,true})
  eg: conn.getaddressdeltas(["RXPCMQLny4EqjEje94dm2CfCfTpxqyXK5L"])

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getaddressdeltas";
  if(addresses && start && end && chaininfo)
    dataString.params = [{addresses:[addresses],start:start,end:end,chaininfo:chaininfo}]
  else if(addresses)
    dataString.params = [{"addresses":addresses}]
  else
    dataString.params = []
    console.log(JSON.stringify(dataString));
  // return rpc.rpc_request(dataString, this.json)
  var request = require('request');

  var headers = {
      'content-type': 'text/plain;'
  };

  // var dataString = '{"jsonrpc": "1.0", "id":"curltest", "method": "getaddressdeltas", "params": [{"addresses": ["RXPCMQLny4EqjEje94dm2CfCfTpxqyXK5L"],"start":1,"end":20,"chainInfo":true}]}';

  var options = {
      url: 'http://127.0.0.1:9032/',
      method: 'POST',
      headers: headers,
      body: JSON.stringify(dataString),
      auth: {
          'user': 'user2863247190',
          'pass': 'passcd362862e2d5d2d752a123857dbba0474cd48a55af419c022b1f59a2c21aecab5a'
      }
  };

  function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
          console.log(body);
      }
  }

  request(options, callback);



}

Connect.prototype.getaddressmempool = function(addresses){
  /*
  :argument (array of string) the address

  :response "address" 	(string) 	the address
  :response  "txid" 	(string) 	the related txid
  :response "index" 	(number) 	the related input or output index
  :response  "satoshis" 	(number) 	the difference in satoshis
  :response "timestamp" 	(number) 	the time the transaction
              entered the mempool (seconds)
  :response  "prevtxid" 	(string) 	the previous txid (if spending)
  :response  "prevout" 	(string) 	the previous
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

Connect.prototype.getaddressutxos = function(){

}

Connect.prototype.getsnapshot = function(){

}

module.exports.Connect = Connect

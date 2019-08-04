let komodo = require('../komodo')
let rpc = require('../rpc_util')

let Connect = komodo.Connect

Connect.prototype.createmultisig = function(number_required,keys){
  /*
  The createmultisig method creates a multi-signature address with
  n signature(s) of m key(s) required. The method returns a json object
   with the address and redeemScript.

  Arguments:

  number_required 	(numeric, required) 	the number of required signatures out of the n key(s) or address(es)
  "keys" 	(string, required) 	a json array of keys which are addresses or hex-encoded public keys
  "key" 	(string) 	an address or hex-encoded public key

  Response:

  "address" 	(string) 	the value of the new multisig address
  "redeemScript" 	(string) 	the string value of the hex-encoded redemption script

  Examples:
  conn.createmultisig(2,[RDBkyKECqeWMdJGiFpFL7kpoSeqDCq5a6M,REvtkmAEW4wUvBKFQjJtiBrvNKidMQQA5H])
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "createmultisig";
  if(number_required && keys)
    dataString.params = [number_required,keys]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.decodeccopret = function(scriptPubKey){
  /*
  The decodeccopret method decodes the OP RETURN data from a CC transaction
  to output the EVALCODE and function id of the method that produced the
  transaction.

  Arguments:

  scriptPubKey 	(string) 	the hex-string format scriptPubKey of the type : nulldata in the vout of a transaction produced by a CC module

  Response:

  result 	(string) 	whether the call succeeded
  OpRets 	(json) 	a json containing the keys EVALCODE and function id
  eval_code 	(hexadecimal number) 	the EVALCODE of the method that produced the transaction
  function 	(string) 	the function id of the method that produced the transaction

  Examples:

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "decodeccopret";
  if(scriptPubKey)
    dataString.params = [scriptPubKey]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.estimatefee = function(nblocks){
  /*

  The estimatefee method estimates the approximate fee per kilobyte.
  The method is needed for a transaction to begin confirmation within
  nblocks blocks.

  The value -1.0 is returned if not enough transactions and blocks have been observed to make an estimate.

  Arguments:

  nblocks 	(numeric) 	the number of blocks within which the fee should be tested

  Response:

  n 	(numeric) 	the estimated fee

  Examples:
  conn.estimatefee(6)
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "estimatefee";
  if(typeof nblocks=='number')
    dataString.params = [nblocks]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.estimatepriority = function(nblocks){
  /*
  The estimatepriority method estimates the approximate priority of a
  zero-fee transaction, when it needs to begin confirmation within nblocks
  blocks.

  The value -1.0 is returned if not enough transactions and blocks have been observed to make an estimate.

  Arguments:

  nblocks 	(numeric) 	a statement indicating within how many blocks the transaction should be confirmed

  Response:

  n 	(numeric) 	the estimated priority

  Example:
  conn.estimatepriority(6)
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "estimatepriority";
  if(typeof nblocks=='number')
    dataString.params = [nblocks]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.invalidateblock = function(hash){
  /*

  The invalidateblock method permanently marks a block as invalid,
  as if it violated a consensus rule.

  Arguments:

  hash 	(string, required) 	the hash of the block to mark as invalid

  Response:

  (none)

  Examples:
  conn.invalidateblock("045da87732b4e969b77e485f540db39ac5114f47771ea04c6d54c9401886301b")
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "invalidateblock";
  if(typeof hash=='number')
    dataString.params = [hash]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.reconsiderblock = function(hash){
  /*

  The reconsiderblock method removes invalidity status of a block
  and its descendants, reconsidering them for activation. This can
  be used to undo the effects of the invalidateblock method.

  Arguments:

  hash 	(string, required) 	the hash of the block to reconsider

  Response:

  (none)

  Examples:
  conn.reconsiderblock("045da87732b4e969b77e485f540db39ac5114f47771ea04c6d54c9401886301b")
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "reconsiderblock";
  if(hash)
    dataString.params = [hash]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.txnotarizedconfirmed = function(txid){
  /*
  The txnotarizedconfirmed method returns information about a
  transaction's state of confirmation.

  Arguments:

  "txid" 	(string, required) 	the transaction id

  Response:

  "result" 	(boolean) 	whether the transaction is confirmed, for dPoW-based chains; for non-dPoW chains, the value indicates whether the transaction has 60 or more confirmations

  Examples:
  conn.txnotarizedconfirmed("a27470375dceae4bdb3fc46df5523dee0c4181ccd422a7f781859a08bcf324b5")

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "txnotarizedconfirmed";
  if(txid)
    dataString.params = [txid]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.validateaddress = function(address){
  /*
  The validateaddress method returns information about the given address.

  Arguments:

  "address" 	(string, required) 	the address to validate

  Response:

  "isvalid" 	(boolean) 	indicates whether the address is valid. If it is not, this is the only property returned.
  "address" 	(string) 	the address validated
  "scriptPubKey" 	(string) 	the hex encoded scriptPubKey generated by the address
  "ismine" 	(boolean) 	indicates whether the address is yours
  "isscript" 	(boolean) 	whether the key is a script
  "pubkey" 	(string) 	the hex value of the raw public key
  "iscompressed" 	(boolean) 	whether the address is compressed
  "account" 	(string) 	DEPRECATED the account associated with the address; "" is the default account

  Examples:
  conn.validateaddress("RDBkyKECqeWMdJGiFpFL7kpoSeqDCq5a6M")
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "validateaddress";
  if(address)
    dataString.params = [address]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.signmessage = function(address,message){
  /*

  The verifymessage method verifies a signed message.


  Arguments:

  "address" 	(string, required) 	the address to use for the signature
    "message" 	(string, required) 	the message that was signed

  Response:

  signature

  Examples:
  conn.signmessage("RDBkyKECqeWMdJGiFpFL7kpoSeqDCq5a6M","mypay")

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "signmessage";
  if(address && message)
    dataString.params = [address,message]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.verifymessage = function(address,signature,message){
  /*

  The verifymessage method verifies a signed message.


  Arguments:

  "address" 	(string, required) 	the address to use for the signature
  "signature" 	(string, required) 	the signature provided by the signer in base 64 encoding
  "message" 	(string, required) 	the message that was signed

  Response:

  true/false 	(boolean) 	indicates whether the signature is verified

  Examples:
   conn.verifymessage("RDBkyKECqeWMdJGiFpFL7kpoSeqDCq5a6M","H6FompY7swRSgM6F/y2V8pkPTAzGvygquQ4B6VIVsoGOQphIoHvx+LgtoosAoZJU44c9YV8pm4auRO571/briwc=","mypay")
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "verifymessage";
  if(address && signature && message)
    dataString.params = [address,signature,message]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.z_validateaddress = function(zaddr){
  /*

  The z_validateaddress method returns information about the given
  z address.

  Arguments:

  "zaddr" 	(string, required) 	the z address to validate

  Response:

  "isvalid" 	(boolean) 	indicates whether the address is valid; if not, this is the only property returned
  "address" 	(string) 	the z address validated
  "ismine" 	(boolean) 	indicates if the address is yours or not
  "payingkey" 	(string) 	the hex value of the paying key, a_pk
  "transmissionkey" 	(string) 	the hex value of the transmission key, pk_enc

  Examples:
  conn.z_validateaddress(await conn.z_getnewaddress())
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "z_validateaddress";
  if(zaddr)
    dataString.params = [zaddr]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

module.exports.Connect = Connect

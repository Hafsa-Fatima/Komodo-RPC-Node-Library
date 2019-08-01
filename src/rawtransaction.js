let komodo = require('../komodo')
let rpc = require('../rpc_util')

let Connect = komodo.Connect

Connect.prototype.createrawtransaction = function(transaction,addresses){
  /*
  The createrawtransaction method creates a transaction, spending
  the given inputs and sending to the given addresses. The method
  returns a hex-encoded raw transaction.

  This is a raw transaction, and therefore the inputs are not
  signed and the transaction is not stored in the wallet nor
  transmitted to the network.

  Arguments:

  "transactions" 	(string, required) 	a json array of json objects
  "txid" 	(string, required) 	the transaction id
  "vout" 	(numeric, required) 	the output number
  "addresses" 	(string, required) 	a json object with addresses as keys and amounts as values
  "address" 	(numeric, required) 	the key is the address, the value is the COIN amount

  Response:

  "transaction" 	(string) 	a hex string of the transaction


  Examples:
  conn.createrawtransaction([{"txid":"51233ca562180a0c32e1977624320526b7d4026b40fc46832473e08452265fad","vout":0}], {"RPhapZcPPSgSDDT3nr3jnfnzyiaA3k8NuY":0.01} )

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "createrawtransaction";
  if(transaction && addresses)
    dataString.params = [transaction,addresses]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
Connect.prototype.decoderawtransaction = function(hex){
  /*
  The decoderawtransaction method returns a json object
  representing the serialized, hex-encoded transaction.

  Arguments:

  "hex" 	(string, required) 	the transaction hex string

  Response:

  "txid" 	(string) 	the transaction id
  "overwintered" 	(boolean) 	the overwintered flag
  "version" 	(numeric) 	the version
  "versiongroupid" 	(string, optional) 	the version group id (overwintered txs)
  "locktime" 	(numeric) 	the lock time
  "expiryheight" 	(numeric, optional) 	last valid block height for mining transaction (overwintered txs)
  "vin" : [ ... ] 	(array of json objects)
  "txid" 	(string) 	the transaction id
  "vout" : [ ... ] 	(numeric) 	the output number
  "scriptSig" 	(json object) 	the script
  "asm" 	(string) 	asm
  "hex" 	(string) 	hex
  "sequence" 	(numeric) 	the script sequence number
  "vout" 	(array of json objects)
  "value" 	(numeric) 	the value
  "number" 	(numeric) 	index
  "scriptPubKey" 	(json object)
  "asm" 	(string) 	the asm
  "hex" 	(string) 	the hex
  "reqSigs" 	(numeric) 	the required sigs
  "type" 	(string) 	the type, eg 'pubkeyhash'
  "addresses"
  "address" 	(string) 	the address
  "vjoinsplit" : [ ... ] 	(array of json objects, only for version >= 2)
  "vpub_old" 	(numeric) 	public input value
  "vpub_new" 	(numeric) 	public output value
  "anchor" 	(string) 	the anchor
  "nullifiers" : [ ... ] 	(array of strings)
  "hex" 	(string) 	input note nullifier
  "commitments" : [ ... ] 	(array of strings)
  "hex" 	(string) 	output note commitment
  "onetimePubKey" 	(string) 	the onetime public key used to encrypt the ciphertexts
  "randomSeed" 	(string) 	the random seed
  "macs" : [ ... ] 	(array of strings)
  "hex" 	(string) 	input note MAC
  "proof" 	(string) 	the zero-knowledge proof
  "ciphertexts" : [ ... ] 	(array of strings)
  "hex" 	(string) 	output note ciphertext


  Examples:
  conn.decoderawtransaction(await conn.createrawtransaction([{"txid":"51233ca562180a0c32e1977624320526b7d4026b40fc46832473e08452265fad","vout":0}], {"RPhapZcPPSgSDDT3nr3jnfnzyiaA3k8NuY":0.01} ))

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "decoderawtransaction";
  if(hex)
    dataString.params = [hex]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.decodescript = function(hex){
  /*
  The decodescript method decodes a hex-encoded script.

  Arguments:

  "hex" 	(string) 	the hex encoded script

  Response:

  "asm" 	(string) 	the script public key
  "hex" 	(string) 	the hex-encoded public key
  "type" 	(string) 	the output type
  "reqSigs" 	(numeric) 	the required signatures
  "addresses": [ ... ] 	(array of strings)
  "address" 	(string) 	the address
  "p2sh" 	(string) 	the script address

  Examples:
  conn.decodescript(await conn.createrawtransaction([{"txid":"51233ca562180a0c32e1977624320526b7d4026b40fc46832473e08452265fad","vout":0}], {"RPhapZcPPSgSDDT3nr3jnfnzyiaA3k8NuY":0.01} ))

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "decodescript";
  if(hex)
    dataString.params = [hex]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.fundrawtransaction = function(hexrawtx){
  /*
  The fundrawtransaction method adds inputs to a transaction until
  it has enough in value to meet its out value. This will not modify
  existing inputs, and will add one change output to the outputs.

  Inputs which were signed may need to be resigned after completion
  since in/outputs have been added. To sign the inputs added, use
  signrawtransaction.

  This method comes from the BTC codebase, of which KMD is ultimately
  a fork (via Zcash). For full details, please see the linked documentation.

  Arguments:

  "hexstring" 	(string, required) 	the hex string of the raw transaction

  Response:

  "hex" 	(string) 	the resulting raw transaction (hex-encoded string)
  "fee" 	(numeric) 	the fee added to the transaction
  "changepos" 	(numeric) 	the position of the added change output, or -1

  Examples:
  conn.fundrawtransaction(await conn.createrawtransaction([{"txid":"51233ca562180a0c32e1977624320526b7d4026b40fc46832473e08452265fad","vout":0}], {"RPhapZcPPSgSDDT3nr3jnfnzyiaA3k8NuY":0.01} ))


  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "fundrawtransaction";
  if(hexrawtx)
    dataString.params = [hexrawtx]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.getrawtransaction = function(txid,verbose=0){
  /*
  The getrawtransaction method returns the raw transaction data.

  If verbose=0, the method returns a string that is serialized,
  hex-encoded data for transaction_id. If verbose is non-zero,
  the method returns an object with information about transaction_id.

  This method relies on the txindex runtime parameter,
  which is enabled by default on all KMD-based chains.
  Disabling txindex will cause this method to malfunction.

  Arguments:

  "txid" 	(string, required) 	the transaction id
  verbose 	(numeric, optional, default=0) 	if 0, the method returns a string in hex; otherwise, it returns a json object

  Response: (if verbose is not set, or set to 0)

  "data" 	(string) 	the serialized, hex-encoded data for 'txid'

  Response: (if verbose > 0)

  "hex" 	(string) 	the serialized, hex-encoded data for 'txid'
  "txid" 	(string) 	the transaction id (same as provided)
  "version" 	(numeric) 	the version
  "locktime" 	(numeric) 	the lock time
  "expiryheight" 	(numeric, optional) 	the block height after which the transaction expires
  "vin" : [ ... ] 	(array of json objects)
  "txid" 	(string) 	the transaction id
  "vout" 	(numeric)
  "scriptSig": { ... } 	(array of json objects) 	the script
  "asm" 	(string) 	asm
  "hex" 	(string) 	hex
  "sequence" 	(numeric) 	the script sequence number
  "vout" : [ ... ] 	(array of json objects)
  "value" 	(numeric) 	the value
  "number" 	(numeric) 	index
  "scriptPubKey"
  "asm" 	(string) 	the asm
  "hex" 	(string) 	the hex
  "reqSigs" 	(numeric) 	the required sigs
  "type" 	(string) 	the type, e.g. 'pubkeyhash'
  "addresses" : [ ... ] 	(array of strings)
  "address" 	(string) 	the address
  "vjoinsplit" : [ ... ] 	(array of json objects, only for version >= 2)
  "vpub_old" 	(numeric) 	public input value
  "vpub_new" 	(numeric) 	public output value
  "anchor" 	(string) 	the anchor
  "nullifiers"
  "hex" 	(string) 	input note nullifier
  "commitments" : [ ... ] 	(array of strings)
  "hex" 	(string) 	output note commitment
  "onetimePubKey" 	(string) 	the onetime public key used to encrypt the ciphertexts
  "randomSeed" 	(string) 	the random seed
  "macs": [ ... ] 	(array of strings)
  "hex" 	(string) 	input note MAC
  "proof" 	(string) 	the zero-knowledge proof
  "ciphertexts": [ ... ] 	(array of strings)
  "hex" 	(string) 	output note ciphertext
  "blockhash" 	(string) 	the block hash
  "height" 	(numeric) 	height of the block
  "confirmations" 	(numeric) 	a confirmation number that is aware of dPoW security
  "rawconfirmations" 	(numeric) 	the raw confirmations (number of blocks on top of this transaction's block)
  "time" 	(numeric) 	the transaction time in seconds since epoch (Jan 1 1970 GMT)
  "blocktime" 	(numeric) 	the block time in seconds since epoch (Jan 1 1970 GMT)

  Examples:
   conn.getrawtransaction("51233ca562180a0c32e1977624320526b7d4026b40fc46832473e08452265fad", 0 )
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getrawtransaction";
  if(txid)
    dataString.params = [txid,verbose]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.sendrawtransaction = function(hex,allowhighfees=false){
  /*
  The sendrawtransction method submits raw transaction
  (serialized, hex-encoded) to local nodes and the network.

  Also see createrawtransaction and signrawtransaction calls.

  Arguments:

  "hexstring" 	(string, required) 	the hex string of the raw transaction
  allowhighfees 	(boolean, optional, default=false) 	whether to allow high fees

  Response:

  "hex" 	(string) 	the transaction hash in hex

  Examples:
  conn.sendrawtransaction("0100000001b524f3bc089a8581f7a722d4cc81410cee3d52f56dc43fdb4baece5d377074a2000000006b483045022100b8434839029bc1c3b7e45079057c91fa073d7b82df83bda2199a3948ab824e6102202dbc343844fe272db555571f2250375ad59438617fd78faac4eb44609331c74b0121030b37e003ba13421ee2a9582ecc2a8f6bddc5b321021c397723fa9b9360436a8afeffffff023eb29008e4b500001976a9143d477ae6b1b1b01f1a24be4e74d9f56e3b1a0cc688ac00e40b54020000001976a914ff7db48c9ea92164240ccfadbc24bef81346a45a88ac84e3415d",true)
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "sendrawtransaction";
  if(hex)
    dataString.params = [hex,allowhighfees]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.signrawtransaction = function(hexstring,prevtxs=[],privatekeys=[],sighashtype="ALL",branchid=''){
  /*
  The signrawtransaction method signs inputs for a raw
  transaction (serialized, hex-encoded). The second optional
  argument (may be null) is an array of previous transaction
  outputs that this transaction depends on, but may not yet
  be in the block chain. The third optional argument (may be null)
  is an array of base58-encoded private keys that, if given, will
  be the only keys used to sign the transaction..

  Arguments:

  1. "hexstring"     (string, required) The transaction hex string
  2. "prevtxs"       (string, optional) An json array of previous dependent transaction outputs
       [               (json array of json objects, or 'null' if none provided)
         {
           "txid":"id",             (string, required) The transaction id
           "vout":n,                  (numeric, required) The output number
           "scriptPubKey": "hex",   (string, required) script key
           "redeemScript": "hex",   (string, required for P2SH) redeem script
           "amount": value            (numeric, required) The amount spent
         }
         ,...
      ]
  3. "privatekeys"     (string, optional) A json array of base58-encoded private keys for signing
      [                  (json array of strings, or 'null' if none provided)
        "privatekey"   (string) private key in base58-encoding
        ,...
      ]
  4. "sighashtype"     (string, optional, default=ALL) The signature hash type. Must be one of
         "ALL"
         "NONE"
         "SINGLE"
         "ALL|ANYONECANPAY"
         "NONE|ANYONECANPAY"
         "SINGLE|ANYONECANPAY"
  5.  "branchid"       (string, optional) The hex representation of the consensus branch id to sign with. This can be used to force signing with consensus rules that are ahead of the node's current height.

  Response:

  "hex" 	(string) 	the hex-encoded raw transaction with signature(s)
  "complete" 	(boolean) 	whether the transaction has a complete set of signatures
  "errors"
  "txid" 	(string) 	the hash of the referenced, previous transaction
  "vout" 	(numeric) 	the index of the output to spend and used as input
  "scriptSig" 	(string) 	the hex-encoded signature script
  "sequence" 	(numeric) 	the script sequence number
  "error" 	(string) 	verification or signing error related to the input

  Examples:
  conn.signrawtransaction("0100000001b524f3bc089a8581f7a722d4cc81410cee3d52f56dc43fdb4baece5d377074a2000000006b483045022100b8434839029bc1c3b7e45079057c91fa073d7b82df83bda2199a3948ab824e6102202dbc343844fe272db555571f2250375ad59438617fd78faac4eb44609331c74b0121030b37e003ba13421ee2a9582ecc2a8f6bddc5b321021c397723fa9b9360436a8afeffffff023eb29008e4b500001976a9143d477ae6b1b1b01f1a24be4e74d9f56e3b1a0cc688ac00e40b54020000001976a914ff7db48c9ea92164240ccfadbc24bef81346a45a88ac84e3415d")

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "signrawtransaction";
  if(hexstring && branchid)
    dataString.params = [hexstring,prevtxs,privatekeys,sighashtype,branchid]
  else if(hexstring)
    dataString.params = [hexstring,prevtxs,privatekeys,sighashtype]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

module.exports.Connect = Connect

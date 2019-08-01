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
  conn.getblocksubsidy(10)

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getblocksubsidy";
  if(height ==0 || height)
    dataString.params = [height]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
Connect.prototype.getblocktemplate = function(mode='',capabilities='',support=''){
  /*
  The getblocktemplate method returns data that is
   necessary to construct a block.

  If the request parameters include a mode key, it
   is used to explicitly select between the default
    'template' request, a 'proposal' or 'disablecb'.


  Arguments:
  "mode" 	(string, optional) 	this must be set to "template" or omitted
  "capabilities": [ ... ] 	(array, optional) 	a list of strings
  "support" 	(string) 	client side supported features: "longpoll", "coinbasetxn", "coinbasevalue", "proposal", "serverlist", "workid"

  Response:
  "version" 	(numeric) 	the block version
  "previousblockhash" 	(string) 	the hash of current highest block
  "finalsaplingroothash" 	(string) 	the hash of the final sapling root
  "transactions":[ ... ] 	(array) 	the contents of non-coinbase transactions that should be included in the next block
  "data" 	(string) 	transaction data encoded in hexadecimal (byte-for-byte)
  "hash" 	(string) 	the hash/id encoded in little-endian hexadecimal
  "depends" : [ ... ] 	(array) 	an array of numbers
  number 	(numeric) 	the indexes of transactions that must be present in the final block if this transaction is present in the final block; the index of the array of transactions starts with "1"
  "fee" 	(numeric) 	the difference in value between transaction inputs and outputs in satoshis; for coinbase transactions, this is the negative number of the total collected block fees, not including the block subsidy; if a key is not present, the fee is unknown and clients MUST NOT assume it is not present
  "sigops" 	(numeric) 	the total number of sigops, as counted for the purposes of block limits; if a key is not present, the sigop count is unknown and clients MUST NOT assume they are not present.
  "required" 	(boolean) 	if provided and true, this transaction must be in the final block
  "coinbasetxn": { ... } 	(json object) 	information for the coinbase transaction
  "longpollid" 	(string) 	the last seen longpollid when this response was sent by the server
  "data" 	(string) 	transaction data encoded in hexadecimal (byte-for-byte)
  "hash" 	(string) 	the hash/id encoded in little-endian hexadecimal
  "depends" : [ ... ] 	(array) 	an array of numbers
  "fee" 	(numeric) 	the difference in value between transaction inputs and outputs in satoshis; for coinbase transactions, this is the negative number of the total collected block fees, not including the block subsidy; if a key is not present, the fee is unknown and clients MUST NOT assume it is not present
  "sigops" 	(numeric) 	the total number of sigops, as counted for the purposes of block limits; if a key is not present, the sigop count is unknown and clients MUST NOT assume they are not present.
  "foundersreward" 	(numeric) 	the founder's reward that should be paid out in this block; this key is present only in the blocks that payout the founder's reward; present only in chains with ac_founders enabled
  "coinbasevalue" 	(numeric) 	the value of the coinbase transaction (in satoshis)
  "required" 	(boolean) 	if provided and true, this transaction must be in the final block
  "target" 	(string) 	the hash target
  "mintime" 	(numeric) 	the minimum timestamp appropriate for next block time in seconds since epoch (Jan 1 1970 GMT)
  "mutable": [ ... ] 	(array of strings) 	a list of ways the block template may be changed
  "value" 	(string) 	a way the block template may be changed, e.g. "time", "transactions", "prevblock"
  "noncerange" 	(string) 	a range of valid nonces
  "sigoplimit" 	(numeric) 	the limit of sigops in blocks
  "sizelimit" 	(numeric) 	the limit of block size
  "curtime" 	(numeric) 	current timestamp in seconds since epoch (Jan 1 1970 GMT)
  "bits" 	(string) 	the compressed target of the next block
  "height" 	(numeric) 	the height of the next block

  Examples:
  conn.getblocktemplate()
  conn.getblocktemplate("template")
  conn.getblocktemplate("template",['proposal'],"longpoll")

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getblocktemplate";
  dataString.params = [{"mode":mode, "capabilities":capabilities,"support":support}]
  return rpc.rpc_request(dataString, this.json)
}
Connect.prototype.getlocalsolps = function(){
  /*
  The getlocalsolps method returns the average
  local solutions per second since this node was
  started.

  This is the same information shown on the metrics
   screen (if enabled).

  Arguments:
  (none)

  Response:
  "data" 	(numeric) 	the solutions-per-second average

  Examples:
  conn.getlocalsolps()

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getlocalsolps";
  dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
Connect.prototype.getmininginfo = function(){
  /*
  The getmininginfo method returns a json object
   containing mining-related information.

  Arguments
  (none)

  Response:
  "blocks" 	(numeric) 	the current block
  "currentblocksize" 	(numeric) 	the last block size
  "currentblocktx" 	(numeric) 	the last block transaction
  "difficulty" 	(numeric) 	the current difficulty
  "errors":
  "generate" 	(boolean) 	if the generation is on or off (see getgenerate or setgenerate calls)
  "genproclimit" 	(numeric) 	the processor limit for generation; -1 if no generation (see getgenerate or setgenerate calls)
  "localsolps" 	(numeric) 	the average local solution rate (solutions per second) since this node was started
  "networksolps" 	(numeric) 	the estimated network solution rate (solutions per second)
  "pooledtx":
  "testnet" 	(boolean) 	if using testnet or not
  "chain" 	(string) 	the current network name as defined in BIP70 (main, test, regtest)

  Examples:
  conn.getmininginfo()

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getmininginfo";
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
Connect.prototype.getnetworkhashps = function(block=120,height=-1){
// DEPRECATED
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getnetworkhashps";
    dataString.params = [block,height]
  return rpc.rpc_request(dataString, this.json)
}
Connect.prototype.getnetworksolps = function(block=120,height=-1){
  /*
  The getnetworksolps method returns the estimated
   network solutions per second based on the last
   n blocks.

  Pass in blocks to override the default number
  of blocks. Use -1 to calculate according to the
  relevant difficulty averaging window. Pass in
  height to estimate the network speed at the
  time when a certain block was found.

  Arguments:
  blocks 	(numeric, optional, default=120) 	the number of blocks; use -1 to calculate according to the relevant difficulty averaging window
  height 	(numeric, optional, default=-1) 	the block height that corresponds to the requested data

  Response:
  data 	(numeric) 	solutions per second, estimated

  Examples:
  conn.getnetworksolps()

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getnetworksolps";
    dataString.params = [block,height]
  return rpc.rpc_request(dataString, this.json)
}
Connect.prototype.prioritisetransaction = function(transaction_id,priority_delta,fee_delta){
  /*
  The prioritisetransaction method instructs the
  daemon to accept the indicated transaction into
   mined blocks at a higher (or lower) priority.
   The transaction selection algorithm considers
   the transaction as it would have a higher
   priority.

  This method is inherited from the original
  Bitcoin protocol, of which KMD is a fork
  (via Zcash). For more examples regarding
  this method, please see the linked
  documentation.

  Arguments:
  "transaction_id" 	(string, required) 	the transaction id
  priority_delta 	(numeric, required) 	the priority to add or subtract (if negative). The transaction selection algorithm assigns the tx a higher or lower priority. The transaction priority calculation: coinage * value_in_satoshis / txsize
  fee_delta 	(numeric, required) 	the fee value in satoshis to add or subtract (if negative); the fee is not actually paid, only the algorithm for selecting transactions into a block considers the transaction as if it paid a higher (or lower) fee.

  Response:
  true 	(boolean) 	returns true

  Examples:
  conn.prioritisetransaction("51233ca562180a0c32e1977624320526b7d4026b40fc46832473e08452265fad",0.0,0)

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "prioritisetransaction";
  if(transaction_id && (priority_delta || priority_delta==0) && (fee_delta == 0 || fee_delta))
    dataString.params = [transaction_id,priority_delta,fee_delta]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
Connect.prototype.submitblock = function(hexdata,workid){
  /*
  The submitblock method instructs the daemon
  to propose a new block to the network.

  The jsonparametersobject parameter is currently
  ignored. See the linked documentation for full
  specification details.

  Note: for more information on submitblock
  parameters and results, see the linked
  documentation.

  Arguments:
  "hexdata" 	(string, required) 	the hex-encoded block data to submit
  "jsonparametersobject" : { ... } 	(string, optional) 	object of optional parameters
  "workid" 	(string, sometimes optional) 	if the server provides a workid, it MUST be included with submissions

  Response:
  "duplicate" 		the node already has a valid copy of the block
  "duplicate-invalid" 		the node already has the block, but it is invalid
  "duplicate-inconclusive" 		the node already has the block but has not validated it
  "inconclusive" 		the node has not validated the block, it may not be on the node's current best chain
  "rejected" 		the block was rejected as invalid

  Examples:
  conn.submitblock("longstring")

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "submitblock";
  if(workid)
    dataString.params = [hexdata,{"workid":workid}]
  else if(hexdata)
    dataString.params = [hexdata]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

module.exports.Connect = Connect

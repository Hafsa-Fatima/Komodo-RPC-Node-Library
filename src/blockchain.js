let komodo = require('../komodo')
let rpc = require('../rpc_util')

let Connect = komodo.Connect

Connect.prototype.coinsupply = function(height){
  /*
  The coinsupply method returns the coin supply
  information for the indicated block height. If
  no height is given, the method defaults to the
  blockchain's current height.

  Arguments:
  "height" 	(integer, optional) 	the desired block height

  Response:
  "result" 	(string) 	whether the request was successful
  "coin" 	(string) 	the ticker symbol of the coin for Smart Chains,
          otherwise KMD
  "height" 	(integer) 	the height of this coin supply data
  "supply" 	(float) 	the transparent coin supply
  "zfunds" 	(float) 	the shielded coin supply (in zaddrs)
  "sprout" 	(float) 	the sprout coin supply (in zcaddrs)
  "total" 	(float) 	the total coin supply, i.e. sum of supply + zfunds

  Examples:
  conn.coinsupply(9)
  conn.coinsupply()

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "coinsupply";
  if(height)
    dataString.params = [height.toString()]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.getbestblockhash = function(){
  /*
  The getbestblockhash method returns the hash of
  the best (tip) block in the longest block chain.

  Arguments:
  (none)

  Response:
  "hex" 	(string) 	the block hash, hex encoded

  Examples:
  conn.getbestblockhash()
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getbestblockhash";
  dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.getblock = function(hashorheight,verbose=true){
  /*
  The getblock method returns the block's
  relevant state information.

  Arguments:
  "hash OR height" 	(string OR number, respectively)
                    the block hash OR the block height
  "verbose" 	(boolean, optional, default=true)
              true returns a json object, false returns hex-encoded data

  Response: (verbose = true)
  "hash" 	(string) 	the block hash (same as provided hash)
  "confirmations" 	(numeric) 	a confirmation number that is aware of the dPoW security service
  "rawconfirmations" 	(numeric) 	the raw confirmations (number of blocks on top of this block); the returned value is -1 if the block is not on the main chain
  "size" 	(numeric) 	the block size
  "height" 	(numeric) 	the block height or index (same as provided height)
  "version" 	(numeric) 	the block version
  "merkleroot" 	(string) 	the merkle root
  "tx" : [ "transaction_id" ,...] 	(array of strings)
  "time" 	(numeric) 	the block time in seconds since epoch (Jan 1 1970 GMT)
  "nonce" 	(numeric) 	the nonce
  "bits" 	(string) 	the bits
  "difficulty" 	(numeric) 	the difficulty
  "previousblockhash" 	(string) 	the hash of the previous block
  "nextblockhash" 	(string) 	the hash of the

  Response: (verbose = false)
  "data" 	(string) 	a string that is serialized, hex-encoded data for the indicated block

  Examples:
  conn.getblock("057f85c27267e567dff77d39c3c618f08dd5f769226725f026145e717e9f0597")
  conn.getblock(2)
  conn.getblock(2,true)
  conn.getblock("057f85c27267e567dff77d39c3c618f08dd5f769226725f026145e717e9f0597",false)

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getblock";
  if(hashorheight)
    dataString.params = [hashorheight.toString(),verbose]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.getblockchaininfo = function(){
  /*
  The getblockchaininfo method returns a json object
  containing state information about blockchain
  processing.
  method now returns a new size_on_disk key,
  which is the size of the blockchain, on disk,
  in bytes.

  Arguments:
  (none)

  Response:
  "chain" 	(string) 	the current network name, as defined in BIP70 (main, test, regtest)
  "blocks" 	(numeric) 	the current number of blocks processed in the server
  "headers" 	(numeric) 	the current number of headers we have validated
  "bestblockhash" 	(string) 	the hash of the currently best block
  "difficulty" 	(numeric) 	the current difficulty
  "verificationprogress" 	(numeric) 	an estimate of verification progress [0..1]
  "chainwork" 	(string) 	the total amount of work in the active chain, in hexadecimal
  "pruned" 	(bool) 	whether the current state is in pruning mode; if true, the blockchain will not keep all transaction and block information, to preserve disk space
  "size_on_disk" 	(numeric) 	the size of the blockchain on disk, measured in bytes
  "commitments" 	(numeric) 	the current number of note commitments in the commitment tree
  "softforks": { ..... } 	(array) 	the status of softforks in progress
  "id" 	(string) 	the name of the softfork
  "version" 	(numeric) 	the block version
  "enforce": { ... } 	(object) 	the progress toward enforcing the softfork rules for blocks of the new version
  "status" 	(boolean) 	true if threshold reached
  "found" 	(numeric) 	the number of blocks with the new version found
  "required" 	(numeric) 	the number of blocks required to trigger
  "window" 	(numeric) 	the maximum size of the examined window of recent blocks
  "reject": { ... } 	(object) 	the progress toward rejecting pre-softfork blocks (same fields as "enforce")
  "upgrades": 	(object) 	the status of network upgrades
  "xxxxxxxxx_string": 	(string) 	the branch ID of the upgrade
  "name" 	(string) 	the name of upgrade
  "activationheight" 	(numeric) 	the block height of activation
  "status" 	(string) 	the status of the upgrade
  "info" 	(string) 	additional information about the upgrade
  "consensus": { ..... } 	(object) 	branch IDs of the current and upcoming consensus rules
  "chaintip" 	(string) 	branch ID used to validate the current chain tip
  "nextblock" 	(string) 	branch ID under which the next block will be validated

  Examples:
  conn.getblockchaininfo()
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getblockchaininfo";
  dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.getblockcount = function(){
  /*
  The getblockcount method returns the number
  of blocks in the best valid block chain.

  Arguments:
  (none)

  Response:
  data 	(numeric) 	the current block count

  Examples:
  conn.getblockcount()

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getblockcount";
  dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.getblockhash = function(index){
  /*
  The getblockhash method returns the hash of the
  indicated block index, according to the best
  blockchain at the time provided.

  Arguments:
  index 	(numeric, required) 	the block index

  Response:
  "hash" 	(string) 	the block hash

  Examples:
  conn.getblockhash(2)
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getblockhash";
  if(index)
    dataString.params = [index]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.getblockhashes = function(high,low,noOrphans=false,logicalTimes=false){
  /*
  The getblockhashes method returns an array of hashes of blocks
  within the timestamp range provided.

  The method requires timestampindex to be enabled.

  Arguments:
  high 	(numeric, required) 	the newer block timestamp
  low 	(numeric, required) 	the older block timestamp
  "noOrphans" 	(boolean) 	a value of true implies that
                the method will only include blocks on
                the main chain
  "logicalTimes" 	(boolean) 	a value of true implies that
                  the method will only include logical
                  timestamps with hashes

  Response:
  "hash" 	(string) 	the block hash
  "blockhash" 	(string) 	the block hash
  "logicalts" 	(numeric) 	the logical timestamp

  Examples:
  conn.getblockhashes(1531614698,1531614498,true,true)
  conn.getblockhashes(1531614698,1531614498)
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getblockhashes";
  if(high && low)
    dataString.params = [high,low,{"noOrphans":noOrphans,"logicalTimes":logicalTimes}]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.getblockheader = function(hash,verbose=true){
  /*
  The getblockheader method returns information about the indicated
   block.

  The verbose input is optional. If verbose is false, the method
  returns a string that is serialized, hex-encoded data for the
  indicated blockheader. If verbose is true, the method returns
  a json object with information about the indicated blockheader.

  Arguments:
  "hash" 	(string, required) 	the block hash
  verbose 	(boolean, optional, default=true) 	true returns a json object, false returns hex-encoded data

  Response: (verbose = true)
  "hash" 	(string) 	the block hash (same as provided)
  "confirmations" 	(numeric) 	a confirmation number that is aware of the dPoW security service
  "rawconfirmations" 	(numeric) 	the raw confirmations (number of blocks on top of this block); if the block is not on the main chain, a value of -1 is returned
  "height" 	(numeric) 	the block height or index
  "version" 	(numeric) 	the block version
  "merkleroot" 	(string) 	the merkle root
  "time" 	(numeric) 	the block time in seconds since epoch (Jan 1 1970 GMT)
  "nonce" 	(numeric) 	the nonce
  "bits" 	(string) 	the bits
  "difficulty" 	(numeric) 	the difficulty
  "previousblockhash" 	(string) 	the hash of the previous block
  "nextblockhash" 	(string) 	the hash of the next block

  Response: (verbose = false)
  "data" 	(string) 	a string that is serialized hex-encoded data for the indicated block

  Examples:
  conn.getblockheader("008686d28f36cc4a06c7808a90c02fd881f63718ef2668d6233f69e73ed2438f",false)
  conn.getblockheader("008686d28f36cc4a06c7808a90c02fd881f63718ef2668d6233f69e73ed2438f")
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getblockheader";
  if(hash)
    dataString.params = [hash,verbose]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.getchaintips = function(){
  /*
  The getchaintips method returns information about
  all known tips in the block tree, including the
  main chain and any orphaned branches.

  Arguments:
  (none)

  Response:
  "height" 	(numeric) 	the height of the chain tip
  "hash" 	(string) 	the block hash of the tip
  "branchlen" 	(numeric) 	0 for main chain
  "status" 	(string) 	"active" for the main chain
  "height" 	(numeric) 	the height of the branch tip
  "hash" 	(string) 	the blockhash of the branch tip
  "branchlen" 	(numeric) 	the length of the branch connecting the tip to the main chain
  "status" 	(string) 	the status of the chain

  Examples:
  conn.getchaintips()
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getchaintips";
  dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.getchaintxstats = function(){
  /*

  Arguments:

  Response:

  Examples:

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getchaintxstats";
  if(dataString)
    dataString.params = []
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.getdifficulty = function(){
  /*

  Arguments:

  Response:

  Examples:

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getdifficulty";
  if(dataString)
    dataString.params = []
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.getlastsegidstakes = function(){
  /*

  Arguments:

  Response:

  Examples:

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getlastsegidstakes";
  if(dataString)
    dataString.params = []
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.getmempoolinfo = function(){
  /*

  Arguments:

  Response:

  Examples:

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getmempoolinfo";
  if(dataString)
    dataString.params = []
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.getrawmempool = function(){
  /*

  Arguments:

  Response:

  Examples:

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getrawmempool";
  if(dataString)
    dataString.params = []
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.getspentinfo = function(){
  /*

  Arguments:

  Response:

  Examples:

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getspentinfo";
  if(dataString)
    dataString.params = []
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.gettxout = function(){
  /*

  Arguments:

  Response:

  Examples:

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "gettxout";
  if(dataString)
    dataString.params = []
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.gettxoutproof = function(){
  /*

  Arguments:

  Response:

  Examples:

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "gettxoutproof";
  if(dataString)
    dataString.params = []
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.gettxoutsetinfo = function(){
  /*

  Arguments:

  Response:

  Examples:

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "";
  if(dataString)
    dataString.params = []
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.kvsearch = function(){
  /*

  Arguments:

  Response:

  Examples:

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "";
  if(dataString)
    dataString.params = []
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.kvupdate = function(){
  /*

  Arguments:

  Response:

  Examples:

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "";
  if(dataString)
    dataString.params = []
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.minerids = function(){
  /*

  Arguments:

  Response:

  Examples:

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "";
  if(dataString)
    dataString.params = []
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.notaries = function(){
  /*

  Arguments:

  Response:

  Examples:

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "";
  if(dataString)
    dataString.params = []
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.verifychain = function(){
  /*

  Arguments:

  Response:

  Examples:

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "";
  if(dataString)
    dataString.params = []
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.verifytxoutproof = function(){
  /*

  Arguments:

  Response:

  Examples:

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "";
  if(dataString)
    dataString.params = []
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

module.exports.Connect = Connect

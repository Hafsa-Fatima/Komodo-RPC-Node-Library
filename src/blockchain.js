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
  if(typeof index == 'number')
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
  if(typeof high=='number' && typeof low== 'number')
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

Connect.prototype.getchaintxstats = function(nblocks,blockhash){
  /*
  The method getchaintxstats returns statistics about
  the total number and rate of transactions in the chain.

  Arguments:
  nblocks 	(numeric, optional) 	the number of blocks in the averaging window.
  blockhash 	(string, optional) 	the hash of the block which ends the window

  Response:
  "time" 	(numeric) 	the timestamp for the final block in the window in UNIX format
  "txcount" 	(numeric) 	the total number of transactions in the chain up to this point
  "window_final_block_hash" 	(string) 	the hash of the final block in the window
  "window_block_count" 	(numeric) 	the size of the window in the number of blocks
  "window_tx_count" 	(numeric) 	the number of transactions in the window; this value is only returned if window_block_count is > 0.
  "window_interval" 	(numeric) 	the elapsed time in the window in seconds; this value is only returned if window_block_count is > 0.
  "txrate" 	(numeric) 	the average rate of transactions per second in the window; this value is only returned if window_interval is > 0.

  Examples:
  conn.getchaintxstats()

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getchaintxstats";
  if(typeof nblocks == 'number' && blockhash)
    dataString.params = [nblocks,blockhash]
  else if(typeof nblocks == 'number')
    dataString.params = [nblocks]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.getdifficulty = function(){
  /*
  The getdifficulty method returns the proof-of-work difficulty
  as a multiple of the minimum difficulty.

  Arguments:
  (none)

  Response:
  number 	(numeric) 	the proof-of-work difficulty as a multiple
  of the minimum difficulty

  Examples:
  conn.getdifficulty()

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getdifficulty";
  dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.getlastsegidstakes = function(depth){
  /*
  The getlastsegidstakes method returns an object
  containing the number of blocks staked by each
  segid in the last X number of blocks, where
  the value of X is equal to the indicated depth.
  Only applies to -ac_staked Smart Chains

  Arguments

  depth 	(numeric, required) 	the number of blocks
          to scan, starting from the current height
          and working backwards

  Response:

  "NotSet" 	(numeric) 	the number of blocks that have no SegId set
  "PoW" 	(numeric) 	the number of blocks created through PoW
  "PoSPerc" 	(numeric) 	the percentage of blocks created through PoS
  "SegIds" 	(json object) 	the json containing the data of number of blocks in each SegId
  "n" 	(numeric) 	the number of blocks staked from SegId n in the last X blocks, where X is equal to the indicated depth

  Examples:
  conn.getlastsegidstakes(10)
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getlastsegidstakes";
  if(typeof depth == 'number')
    dataString.params = [depth]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.getmempoolinfo = function(){
  /*
  The getmempoolinfo method returns details on the active
  state of the transaction memory pool.

  Arguments:
  (none)

  Response:
  "size" 	(numeric) 	the current transaction count
  "bytes" 	(numeric) 	the sum of all transaction sizes
  "usage" 	(numeric) 	the total memory usage for the mempool

  Examples:
  conn.getmempoolinfo()

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getmempoolinfo";

    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.getrawmempool = function(verbose){
  /*
  The getrawmempool method returns all transaction ids in
  the memory pool as a json array of transaction ids.

  The verbose input is optional and is false by default.
  When it is true, the method instead returns a json object
  with various related data.

  Arguments:
  verbose 	(boolean, optional, default=false) 	true for a json object, false for a json array of transaction ids

  Response: (verbose = false)
  "transaction_id" 	(string) 	the transaction id

  Response: (verbose = true)
  "transaction_id": { .... } 	(json object)
  "size" 	(numeric) 	the transaction size in bytes
  "fee" 	(numeric) 	the transaction fee
  "time" 	(numeric) 	the local time transaction entered pool in seconds since 1 Jan 1970 GMT
  "height" 	(numeric) 	the block height wherein the transaction entered the mempool
  "startingpriority" 	(numeric) 	the priority when the transaction entered the mempool
  "currentpriority" 	(numeric) 	the transaction priority at the current height
  "depends": { ... } 	(array) 	unconfirmed transactions used as inputs for this transaction
  "transaction_id" 	(string) 	the parent transaction id

  Examples:
  conn.getrawmempool(true)
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getrawmempool";
  if(typeof verbose == 'boolean')
    dataString.params = [verbose]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.getspentinfo = function(txid,index=0){
  /*
  The getspentinfo method returns the transaction id
  and index where the given output is spent.
  The method requires spentindex to be enabled.

  Arguments:

  "txid" 	(string) 	the hex string of the transaction id
  "index" 	(number) 	the output's index

  Response:

  "txid" 	(string) 	the transaction id
  "index" 	(number) 	the spending input index

  Examples:
  conn.getspentinfo("51233ca562180a0c32e1977624320526b7d4026b40fc46832473e08452265fad",1)
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getspentinfo";
  if(txid && typeof index == 'number')
    dataString.params = [{"txid":txid,"index":index}]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.gettxout = function(txid,vout,includemempool=false){
  /*
  The gettxout method returns details about an unspent transaction output.

  Arguments:
  "txid" 	(string, required) 	the transaction id
  vout 	(numeric, required) 	the vout value
  includemempool 	(boolean, optional) 	whether to include the mempool

  Response:
  "bestblock" 	(string) 	the block hash
  "confirmations" 	(numeric) 	a confirmation number that is aware of the dPoW security service aware
  "rawconfirmations" 	(numeric) 	the raw confirmations (number of blocks on top of this block with this transaction)
  "value" 	(numeric) 	the transaction value
  "scriptPubKey": 	(json object)
  "asm" 	(string) 	scriptPubKey in assembly format
  "hex" 	(string) 	scriptPubKey in hex format
  "reqSigs" 	(numeric) 	the number of required signatures
  "type" 	(string) 	the type, e.g. pubkeyhash
  "addresses" 	(array of strings) 	an array of Komodo addresses
  "address" 	(string) 	the blockchain address
  "version" 	(numeric) 	the version
  "coinbase" 	(boolean) 	whether this is a coinbase transaction

  Examples:
  conn.gettxout("51233ca562180a0c32e1977624320526b7d4026b40fc46832473e08452265fad",0,false)
  conn.gettxout("51233ca562180a0c32e1977624320526b7d4026b40fc46832473e08452265fad",0,true)
  conn.gettxout("51233ca562180a0c32e1977624320526b7d4026b40fc46832473e08452265fad",1)

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "gettxout";
  if(txid && (vout || vout == 0))
    dataString.params = [txid,vout,includemempool]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.gettxoutproof = function(txid,blockhash){
  /*
  The gettxoutproof method returns a hex-encoded proof
  showing that the indicated transaction was included in a block.
  The gettxoutproof method relies on the txindex runtime
  parameter. This parameter is enabled by default on all
  KMD-based blockchains, and should never be disabled.

  Arguments:
  "txid" 	(string) 	a transaction hash
  "blockhash" 	(string, optional) 	if specified, the method
                looks for the relevant transaction id in this
                block hash
  Response:
  "data" 	(string) 	a string that is a serialized,
          hex-encoded data for the proof

  Examples:
  conn.gettxoutproof(["51233ca562180a0c32e1977624320526b7d4026b40fc46832473e08452265fad"])
  conn.gettxoutproof(["51233ca562180a0c32e1977624320526b7d4026b40fc46832473e08452265fad"],"0a28e2fb630b282138bf23bb79f597b11acff6f57c8d9c1c10fa54770035c813")

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "gettxoutproof";
  if(txid && blockhash)
    dataString.params = [txid,blockhash]
  else if(txid)
    dataString.params = [txid]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.gettxoutsetinfo = function(){
  /*
  The gettxoutsetinfo method returns statistics
   about the unspent transaction output set.
  Note this call may take a long time to complete,
   depending on the state of your blockchain.

  Arguments:
  (none)

  Response:
  "height" 	(numeric) 	the current block height (index)
  "bestblock" 	(string) 	the best block hash hex
  "transactions" 	(numeric) 	the number of transactions
  "txouts" 	(numeric) 	the number of output transactions
  "bytes_serialized" 	(numeric) 	the serialized size
  "hash_serialized" 	(string) 	the serialized hash
  "total_amount" 	(numeric) 	the total amount
  #
  Examples:
  conn.gettxoutsetinfo()
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "gettxoutsetinfo";
  dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.kvsearch = function(key){
  /*
  The kvsearch method searches for
  a key stored via the kvupdate command.
  This feature is only available for Smart Chains.

  Argument:
  key 	(string, required) 	the key for which the user desires to search the chain

  Response:
  "coin" 	(string) 	the chain on which the key is stored
  "currentheight" 	(numeric) 	the current height of the chain
  "key" 	(string) 	the key
  "keylen" 	(string) 	the length of the key
  "owner" 	(string) 	a hex string representing the owner of the key
  "height" 	(numeric) 	the height at which the key was stored
  "expiration" 	(numeric) 	the height at which the key will expire
  "flags" 	(numeric) 	1 if the key was created with a password; 0 otherwise
  "value" 	(string) 	the stored value
  "valuesize" 	(string) 	the amount of characters stored

  Examples:

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "kvsearch";
  if(typeof key == 'string')
    dataString.params = [key]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.kvupdate = function(key,value,days,passphrase=''){
  /*
  The kvupdate method stores a key/value pair via OP_RETURN.
  This feature is available only for Smart Chains.
  The maximum value memory size is 8kB.

  Arguments

  "key" 	(string, required) 	key (should be unique)
  "value" 	(string, required) 	value
  "days" 	(numeric, required) 	amount of days before the key expires (1440 blocks/day); minimum 1 day
  "passphrase" 	(string, optional) 	passphrase required to update this key

  Response

  "coin" 	(string) 	the chain on which the key is stored
  "height" 	(numeric) 	the height at which the key was stored
  "expiration" 	(numeric) 	the height at which the key will expire
  "flags" 	(string) 	the amount of days the key will be stored
  "key" 	(numeric) 	the stored key
  "keylen" 	(numeric) 	the length of the key
  "value" 	(numeric) 	the stored value
  "valuesize" 	(string) 	the length of the stored value
  "fee" 	(string) 	the transaction fee paid to store the key
  "txid" 	(string) 	the transaction id

  Examples:
  conn.kvupdate("create","10",1000)
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "kvupdate";
  if(typeof key =='string' && typeof value == 'string' && typeof days =='number')
    dataString.params = [key,value,days.toString(),passphrase]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.minerids = function(height){
  /*
  The minerids method returns information about the
  notary nodes and external miners at a specific block
  height. The response will calculate results according
  to the 2000 blocks proceeding the indicated "height" block.

  Arguments:

  heights 	(number) 	the block height for the query

  Response:

  "mined":
  "notaryid" 	(number) 	the id of the specific notary node
  "kmdaddress" 	(string) 	the KMD address of the notary node
  "pubkey" 	(string) 	the public signing key of the notary node
  "blocks" 	(number)

  Examples:
  conn.minerids(1000)

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "minerids";
  if(typeof height=='string')
    dataString.params = [height.toString()]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.notaries = function(height,timestamp){
  /*
  The notaries method returns the public key, BTC address,
   and KMD address for each Komodo notary node.
  Either or both of the height and timestamp parameters will suffice.

  Arguments

  height 	(number) 	the block height desired for the query
  timestamp 	(number) 	the timestamp of the block desired for the query

  Response

  "notaries": [ ... ] 	(array)
  "pubkey" 	(string) 	the public signing key of the indicated notary node, used on the KMD network to create notary-node authorized transactions
  "BTCaddress" 	(string) 	the public BTC address the notary node uses on the BTC blockchain to create notarizations
  "KMDaddress" 	(string) 	the public KMD address the notary node uses on the KMD blockchain to create notarizations
  "numnotaries" 	(number) 	the number of notary nodes; typically this value is 64, but the value may vary on rare circumstances, such as during election seasons
  "height" 	(number) 	the block height number at which the notary-node information applies
  "timestamp" 	(number) 	the timestamp at which the notary-node information applies

  Examples:
  conn.notaries(1000)
  conn.notaries(100,1536365515)
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "notaries";
  if(typeof height =='number' && typeof timestamp=='number')
    dataString.params = [height.toString(),timestamp.toString()]
  else if(typeof height =='number')
    dataString.params = [height.toString()]
  else if(typeof timestamp=='number')
    dataString.params = [timestamp.toString()]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.verifychain = function(checklevel,numblocks){
  /*
  The verifychain method verifies the coin daemon's blockchain database.

  Depending on the state of your blockchain database and daemon, this call can take a prolonged period of time to complete.
  #
  Arguments

  checklevel 	(numeric, optional, 0-4, default=3) 	indicates the thoroughness of block verification
  numblocks 	(numeric, optional, default=288, 0=all) 	indicates the number of blocks to verify
  #
  Response

  true/false 	(boolean) 	whether the verification was successful

  Examples:
  conn.verifychain(1,3)
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "verifychain";
  if(( checklevel || checklevel==0) && (numblocks  || numblocks == 0))
    dataString.params = [checklevel,numblocks]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.verifytxoutproof = function(proof_string){
  /*

  The verifytxoutproof method verifies that a proof
  points to a transaction in a block. It returns the
  transaction to which the proof is committed, or it
  will throw an RPC error if the block is not in the
  current best chain.

  Arguments
  "proof_string" 	(string, required) 	the hex-encoded proof
                  generated by gettxoutproof

  Response
  "txid" 	(string) 	the transaction ids to which the proof commits; the array is empty if the proof is invalid

  Examples:
  conn.verifytxoutproof(await conn.gettxoutproof(["51233ca562180a0c32e1977624320526b7d4026b40fc46832473e08452265fad"]))
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "verifytxoutproof";
  if(proof_string)
    dataString.params = [proof_string]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

module.exports.Connect = Connect

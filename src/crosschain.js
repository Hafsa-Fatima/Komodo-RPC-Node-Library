let komodo = require('../komodo')
let rpc = require('../rpc_util')

let Connect = komodo.Connect

// NOTE: set ac_cc > 100 for both smart chains and set a pubkey for both

Connect.prototype.migrate_createburntransaction = function(destChain,destAddress,amount,tokenid=''){
  /*

  The migrate_createburntransaction method creates a transaction
  burning a specific amount of coins or tokens. This method also
  creates a payouts object which is later used to create an import
  transaction for the value corresponding to the burned amount. This
  method should be called on the source chain.

  Arguments:

  "destChain" 	(string, required) 	the name of the destination chain
  "destAddress" 	(string, required) 	the address on the destination chain where coins are to be sent; the pubkey if tokens are to be sent
  "amount" 	(numeric, required) 	the amount in coins or tokens that should be burned on the source chain and created on the destination chain; if the indicated assets are tokens, the amount can be set only to 1, as only migration of non-fungible tokens are supported at this time
  "tokenid" 	(string, optional) 	token id in hex; if set, the software assumes that the user is migrating tokens

  Response:

  "payouts" 	(string) 	a hex string of the created payouts; this value is passed into the migrate_createimporttransaction method
  "BurnTxHex" 	(string) 	a hex string of the returned burn transaction

  Examples:
  conn.migrate_createburntransaction("HAFSACHAIN","R9oZ48ubvUBs9izGMsDG9Kk4LENEBCgw8L",12.0)
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "migrate_createburntransaction";
  if(destChain && destAddress && amount)
    dataString.params = [destChain,destAddress,amount.toString(),tokenid]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
Connect.prototype.migrate_converttoexport = function(burntx,destChain){
  /*
  The migrate_converttoexport method allows the user to create
  a customized burn transaction (as opposed to a fully automated
  burn transaction). This method converts a given transaction to
  a burn transaction.

  Arguments:

  "burntx" 	(string, required) 	the burn transaction in hex format
  "destChain" 	(string, required) 	the name of the destination chain

  Response:

  "payouts" 	(string) 	a hex string of the created payouts; this is passed into the migrate_createimporttransaction method
  "exportTx" 	(string) 	a hex string of the returned burn transaction

  Examples:
  conn.migrate_converttoexport(await conn.createrawtransaction([{"txid":"2392774b219baf349be601b655eab0d0e889460ffb762dfe1c25b5d01db6a2a4","vout":0}], {"R9oZ48ubvUBs9izGMsDG9Kk4LENEBCgw8L":0.01} ),"HAFSACHAIN")

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "migrate_converttoexport";
  if(burntx && destChain)
    dataString.params = [burntx,destChain]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
Connect.prototype.migrate_createimporttransaction = function(burntx,payouts,...notaryTxid){
  /*
  The migrate_createimporttransaction method performs the initial
  step in creating an import transaction. This method should be
  called on the source chain.

  Arguments:

 "burntx" 	(string, required) 	the burn transaction in hex format returned from the previous method
 "payouts" 	(string, required) 	the payouts object in hex format returned from the previous method and used for creating an import transaction
 "notaryTxid1" 	(string, optional) 	the notary approval transaction id 1, to be passed if the MoMoM backup solution is used for notarization
 "notaryTxidN" 	(string, optional) 	the notary approval transaction id N, to be passed if the MoMoM backup solution is used for notarization

 Response:

 "ImportTxHex" 	(string) 	the created import transaction in hex format

 Examples:
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "migrate_createimporttransaction";
  if(burntx && payouts)
    dataString.params = [burntx,payouts,...notaryTxid]
  else
    dataString.params = []
  //  console.log(dataString.params);
   return rpc.rpc_request(dataString, this.json)
}
Connect.prototype.migrate_completeimporttransaction = function(importtx,offset=''){
  /*
  The migrate_completeimporttransaction method performs the
  finalizing step in creating an import transaction. This
  method should be called on the KMD (Komodo) chain.

  Arguments:

  "importtx" 	(string, required) 	the import transaction in hex format created using the previous method
  "offset" 	(string, optional) 	the number of blocks below the current KMD(Komodo) blockchain height in which a MoMoM proof must be searched

  Response:

  "ImportTxHex" 	(string) 	import transaction in hex extended with the MoMoM proof of burn transaction

  Examples:

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "migrate_completeimporttransaction";
  if(importtx)
    dataString.params = [importtx,offset]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
Connect.prototype.migrate_checkburntransactionsource = function(burntx){
  /*
  The migrate_checkburntransactionsource method allows a notary
  operator to check the burn transaction's structure and verify
  its presence in the source chain.

  Arguments:

  "burntxid" 	(string, required) 	the burn transaction's id

  Response:

  "sourceSymbol" 	(string) 	the source chain's name
  "targetSymbol" 	(string) 	the target chain's name
  "targetCCid" 	(number) 	the target chain's CCid
  "tokenid" 	(string, optional) 	the token id if a token is to be migrated
  "TxOutProof" 	(string) 	the proof of the burn transaction's existence in the source chain

  Examples:


  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "migrate_checkburntransactionsource";
  if(burntx)
    dataString.params = [burntx]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
Connect.prototype.migrate_createnotaryapprovaltransaction = function(burntxid,txoutproof){
  /*
  A notary operator uses the migrate_createnotaryapprovaltransaction
  method to create an approval transaction in the destination chain
  with the proof of the burn transaction's existence in the source
  chain.

  The returned notary approval transaction should be broadcast to the destination chain using the sendrawtransaction method.

  Arguments:

  "burntxid" 	(string, required) 	the burn transaction's id
  "txoutproof" 	(string, required) 	the proof of the burn transaction's existence

  Response:

  "NotaryTxHex" 	(string) 	notary approval transaction in hex format

  Examples:
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "migrate_createnotaryapprovaltransaction";
  if(burntxid && txoutproof)
    dataString.params = [burntxid,txoutproof]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
Connect.prototype.selfimport = function(destAddress,amount){
  /*
  The Self Import API allows a trusted pubkey to create
  more coins on the same chain.

Requirements

The chain must have the custom parameters -ac_import=PUBKEY and -ac_pubkey set to a pubkey which is allowed to create coins.

Arguments:

"destAddress" 	(string, required) 	the address where the created coins should be sent
"amount" 	(number, required) 	the amount in coins to create

Response:

"SourceTxHex" 	(string) 	the source transaction in hex format
"ImportTxHex" 	(string) 	the import transaction in hex format

Examples:
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "selfimport";
  if(destAddress && amount)
    dataString.params = [destAddress,amount]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
Connect.prototype.calc_MoM = function(height,MoMdepth){
  /*
  The calc_MoM method calculates the value of the merkle root of the blocks' merkle roots (MoM), starting from the block of the indicated height for the chosen depth.

  Note

  This method should be run on a Smart Chain.

  Arguments:

  "height" 	(number, required) 	the block height from which the MoM calculation must begin
  "MoMdepth" 	(number, required) 	the number of blocks to include in the MoM calculation

  Response:

  "coin" 	(string) 	the chain's name
  "height" 	(string) 	the starting block height
  "MoMdepth" 	(number) 	the number of blocks included in the MoM calculation
  "MoM" 	(string) 	the MoM value

  Examples:
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "calc_MoM";
  if(height && MoMdepth)
    dataString.params = [height, MoMdepth]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.MoMoMdata = function(symbol,kmdheight,ccid){
  /*
  The MoMoMdata method calculates the value of the merkle
  root of merkle roots of the blocks' merkle roots (MoMoM),
  starting from the block of the indicated height for the
  data of the indicated chain.

  Note

  Execute this method on the KMD chain.

  Arguments:

  "symbol" 	(string, required) 	the chain's name whose data's MoMoM value is to be calculated
  "kmdheight" 	(number, required) 	the number of blocks to include in the MoM calculation
  "ccid" 	(number, required) 	the chain's CCid

  Response:

  "coin" 	(string) 	the chain's name
  "kmdheight" 	(string) 	the starting block's height
  "ccid" 	(number) 	the chain's CCid
  "MoMs" 	(string) 	the array of MoM values
  "notarizationHash" 	(string) 	the first found notarization transaction id for the chain
  "MoMoM" 	(string) 	the MoMoM value

  Examples:
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "MoMoMdata";
  if(symbol && kmdheight && ccid)
    dataString.params = [symbol,kmdheight,ccid]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.assetchainproof = function(txid){
  /*

  The assetchainproof method scans the chain for the back
  MoM notarization for a transaction corresponding to the
  given transaction id and returns a proof object with MoM
  branch. Scanning is performed from the height up to the
  chain tip, with a limit of 1440 blocks.

  Arguments:

  "txid" 	(string, required) 	the transaction id for which a proof object must be returned

  Response:

  "proof object" 	(string) 	the returned proof object with MoM branch in hex format

  Examples:
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "assetchainproof";
  if(txid)
    dataString.params = [txid]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
Connect.prototype.getNotarisationsForBlock = function(height){
  /*
  The getNotarisationsForBlock method returns the notarization
  transactions within the block of the given block hash.

  Arguments:

  "height" 	(number, required) 	the block number of the block to be searched

  Response:

  "Notary Cluster" 	(string) 	refers to the notary group which performed the notarizations; KMD for the main Komodo notaries, LABS for the LABS notaries
  "txid" 	(string) 	the notarization transaction's id
  "chain" 	(string) 	the chain that has been notarized
  "height" 	(number) 	the notarization transaction's block height
  "blockhash" 	(string) 	the hash of the notarization transaction's block
  "notaries" 	(array) 	the ids
  of the notaries who performed the notarization

  Examples:

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getNotarisationsForBlock";
  if(height)
    dataString.params = [height]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
Connect.prototype.scanNotarisationsDB = function(blockHeight,symbol,blocksLimit){
  /*
  The scanNotarisationsDB method scans the notarization
  database backwards from the given block height for a
  notarization of the chain with the given name (symbol).

  Arguments:

  "blockHeight" 	(number, required) 	the starting block height from which notarizations are to be searched
  "symbol" 	(string, required) 	the chain's name whose notarizations are to be searched
  "blocksLimit" 	(number, optional) 	an optional block depth to search for notarizations

  Response:

  "height" 	(number) 	the block height of the notarization transaction id that has been found
  "hash" 	(string) 	the hash of the notarization transaction id that has been found
  "opreturn" 	(string) 	the notarization data in hex format

  Examples:
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "scanNotarisationsDB";
  if(typeof blockHeight =='number' && symbol && typeof blocksLimit == 'number')
    dataString.params = [blockHeight,symbol,blocksLimit]
  else if(typeof blockHeight =='number' && symbol)
    dataString.params = [blockHeight,symbol]
  else
    dataString.params = []
    console.log(dataString.params);
  // return rpc.rpc_request(dataString, this.json)
}
Connect.prototype.getimports = function(hashorheight){
  /*

  The getimports method lists import transactions in the
  indicated block of the chain.

  Arguments:

  "hash or height" 	(string or number, required) 	the block's hash or height to be searched

  Response:

  "imports" 	(array)
  "txid" 	(string) 	the import transaction id
  "amount" 	(number) 	the import transaction's value in coins
  "export" 	(json) 	the export or burn transaction's infomation
  "txid" 	(string) 	the export transaction's id
  "amount" 	(number) 	the export transaction's value
  "txid" 	(string) 	the export transaction's id
  "source" 	(string) 	the source chain's name
  "tokenid" 	(string,optional) 	the source chain's token id, if tokens are imported
  "TotalImported" 	(number) 	the total imported amount in coins

  Examples:


  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getimports";
  if(hashorheight || hashorheight=='' || hashorheight==0 )
    dataString.params = [hashorheight]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
Connect.prototype.getwalletburntransactions = function(count){
  /*

  The getwalletburntransactions method lists all the burn
  transactions in the current wallet.

  Arguments:

  "count" 	(number, optional) 	the number of burn transactions to be returned; if omitted, defaults to 10 burn transactions

  Response:

  "txid" 	(string) 	the burn transaction's id
  "burnedAmount" 	(number) 	the burned value in coins
  "tokenid" 	(string, optional) 	the token id, if tokens are burned
  "targetSymbol" 	(string) 	the target chain's name
  "targetCCid" 	(number) 	the target chain's CCid

  Examples:


  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getwalletburntransactions";
  if(count || count ==0)
    dataString.params = [count]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

module.exports.Connect = Connect

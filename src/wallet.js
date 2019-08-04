let komodo = require('../komodo')
let rpc = require('../rpc_util')

let Connect = komodo.Connect

// https://developers.komodoplatform.com/basic-docs/smart-chains/smart-chain-api/wallet.html


Connect.prototype.getwalletinfo = function() {
/*
  The getwalletinfo method returns an object containing various information about the wallet state.

Arguments

(none)

Response

"walletversion" 	(numeric) 	the wallet version
"balance" 	(numeric) 	the total confirmed balance of the wallet
"unconfirmed_balance" 	(numeric) 	the total unconfirmed balance of the wallet
"immature_balance" 	(numeric) 	the total immature balance of the wallet
"txcount" 	(numeric) 	the total number of transactions in the wallet
"keypoololdest" 	(numeric) 	the timestamp (seconds since GMT epoch) of the oldest pre-generated key in the key pool
"keypoolsize" 	(numeric) 	how many new keys are pre-generated
"unlocked_until" 	(numeric) 	the timestamp in seconds since epoch (midnight Jan 1 1970 GMT) that the wallet is unlocked for transfers, or 0 if the wallet is locked
"paytxfee" 	(numeric) 	the transaction fee configuration, given as the relevant COIN per KB

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "getwalletinfo", "params": [] };
  return rpc.rpc_request(dataString, this.json)
}

// TODO : DEPRECATED
Connect.prototype.addmultisigaddress = function(nrequired,keysobject,account){
  /*
    The addmultisigaddress method adds a multi-signature address
    to the wallet

    :argument "nrequired"	(numeric, required) 	the number of required
              keys (out of the n submitted)

    :argument "keysobject" 	(string, required) 	a json array of addresses
              or hex-encoded public keys
              eg: ["RSWwtqsNr9mW21UXRm6Lz4AzQnj4pVzzkp","RW8d8EChHTooVbwF3reqHYgkzWCnJFLXgh"]

    :argument "account" 	(string, optional) 	DEPRECATED: if provided,
              "account" MUST be set to the empty string "" to represent
              the default account; passing any other string will result in an error

    :response "address" 	(string) 	an address associated with the keys
  */

  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "addmultisigaddress" };
  if(nrequired && keysobject && account)
    dataString.params=[nrequired,keysobject,account]
  else if(nrequired && keysobject )
    dataString.params = [nrequired,keysobject]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}


Connect.prototype.backupwallet = function(destination=''){
  /*
    The backupwallet method safely copies the wallet.dat
    file to the indicated destination. The destination input
    accepts only alphanumeric characters.

    :argument "destination" 	(string, required) 	the destination filename,
    saved in the directory set by the exportdir runtime parameter

    :response "path" 	(string) 	the full path of the destination file

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "backupwallet" };
  if (destination)
    dataString.params = [destination]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}


Connect.prototype.dumpprivkey = function(address=''){
  /*
    The dumpprivkey method reveals the private key corresponding to the indicated address.

    :argument "address" 	(string, required) 	the address for the private key

    :response "data" 	(string) 	the private key

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "dumpprivkey" };
  dataString.params = [address]
  return rpc.rpc_request(dataString, this.json)
}


Connect.prototype.dumpwallet = function(filename=''){
  /*
  The dumpwallet method dumps all transparent-address wallet keys into a file, using a human-readable format.

  Overwriting an existing file is not permitted. The destination parameter accepts only alphanumeric characters.

  This method requires that the coin daemon have the exportdir runtime parameter enabled.

  Arguments

  "filename" 	(string, required) 	the filename, saved in the folder set by the exportdir runtime parameter

  Response

  "path" 	(string) 	the full path of the destination file
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "dumpwallet" };
  dataString.params = [filename]
  return rpc.rpc_request(dataString, this.json)
}

// TODO : CHECK
Connect.prototype.encryptwallet = function(passphase=''){
  /*

    :argument

    :response

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "encryptwallet" };
  dataString.params = [passphase]
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.getaccount = function(address=''){
  /*
  The encryptwallet method encrypts the wallet with the indicated passphrase.

  For more information, please see these instructions: Encrypt Komodo's wallet.dat File

  This method is for first-time encryption only. After the first encryption, any calls that interact with private keys will require the passphrase via walletpassphrase prior to calling the corresponding method. This includes methods that create a transaction, dump a private key for an address, sign a transaction, etc.

  Arguments

  passphrase 	(string) 	the passphrase for wallet encryption; the passphrase must be at least 1 character, but should be many

  Response
  Text Response
  wallet encrypted; Komodo server stopping, restart to run with encrypted wallet. The keypool has been flushed, you need to make a new backup.

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "getaccount" };
  if(address=='')
    dataString.params=[]
  else
    dataString.params = [address]
  return rpc.rpc_request(dataString, this.json)
}


Connect.prototype.getaccountaddress = function(account=''){
  /*


  The getaccount method returns the account associated with the given address.

  Arguments

  "address" 	(string, required) 	the address

  Response

  "accountname" 	(string) 	the account address

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "getaccountaddress" };
  if(account=='')
    dataString.params=[]
  else
    dataString.params = [account]
  return rpc.rpc_request(dataString, this.json)
}

// TODO : COMPLETED
Connect.prototype.getaddressesbyaccount = function(account=''){
  /*
  The getaddressesbyaccount method returns the list of addresses for the given account.

  Arguments

  "account" 	(string, required) 	MUST be set to the empty string "" to represent the default account; passing any other string will result in an error

  Response

  "address" 	(string) 	an address associated with the given account

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "getaddressesbyaccount" };
  if(account=='')
    dataString.params=[]
  else
    dataString.params = [account]
  return rpc.rpc_request(dataString, this.json)
}

// TODO : COMPLETED
Connect.prototype.getbalance = function(account='',minconf=1,includeWatchonly=false){
  /*
  The getbalance method returns the server's total available balance.

  The account input is deprecated.

  Arguments

  "account" 	(string, optional) 	DEPRECATED if provided, it MUST be set to the empty string "" or to the string "*"
  minconf 	(numeric, optional, default=1) 	only include transactions confirmed at least this many times
  includeWatchonly 	(bool, optional, default=false) 	also include balance in watchonly addresses (see importaddress)

  Response

  amount 	(numeric) 	the total amount

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "getbalance" };
  if(account=='')
    dataString.params=[]
  else
    dataString.params = [account,minconf,includeWatchonly]
  return rpc.rpc_request(dataString, this.json)
}

// TODO : COMPLETED <method is used only on Smart Chains that are utilizing the ac_staked functionality.>
Connect.prototype.getbalance64 = function(segid=''){
  /*
  This method is part of the new ac_staked functionality.

  The getbalance64 method is used only on Smart Chains that are utilizing the ac_staked functionality.
*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "getbalance64" };
  if(segid=='')
    dataString.params=[]
  else
    dataString.params = [segid]
  return rpc.rpc_request(dataString, this.json)
}

// TODO : COMPLETED
Connect.prototype.getnewaddress = function(account=''){
  /*
  The getnewaddress method returns a new address for receiving payments.

  Arguments

  "account" 	(string, optional) 	DEPRECATED: If provided, the account MUST be set to the empty string "" to represent the default account; passing any other string will result in an error

  Response

  "address" 	(string) 	the new address

*/
let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "getnewaddress" };
  if(account=='')
    dataString.params=[]
  else
    dataString.params = [account]
  return rpc.rpc_request(dataString, this.json)
}


Connect.prototype.getrawchangeaddress = function(){
  /*
  The getrawchangeaddress returns a new address that can be used to receive change.

  This is for use with raw transactions, NOT normal use.

  Arguments

  (none)

  Response

  "address" 	(string) 	the address

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "getrawchangeaddress" };
  dataString.params=[]
  return rpc.rpc_request(dataString, this.json)
}


Connect.prototype.getreceivedbyaccount = function(account='',minconf=1){
/*  The getreceivedbyaccount method returns the total amount received by account in transactions with at least minconf confirmations.

  Arguments

  "account" 	(string, required) 	MUST be set to the empty string "" to represent the default account; passing any other string will result in an error
  minconf 	(numeric, optional, default=1) 	only include transactions confirmed at least this many times

  Response

  amount 	(numeric) 	the total amount received for this account*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "getreceivedbyaccount" };
  if(account=='')
    dataString.params=[""]
  else
    dataString.params = [account,minconf]
  return rpc.rpc_request(dataString, this.json)
}


Connect.prototype.getreceivedbyaddress = function(account='',minconf=1){
  /*
  The getreceivedbyaddress method returns the total amount received by the given address in transactions with at least minconf confirmations.

  Arguments

  "address" 	(string, required) 	the address for transactions
  minconf 	(numeric, optional, default=1) 	only include transactions confirmed at least this many times

  Response

  amount 	(numeric) 	the total amount of the relevant coin received at this address

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "getreceivedbyaddress" };
  if(account=='')
    dataString.params=[]
  else
    dataString.params = [account,minconf]
  return rpc.rpc_request(dataString, this.json)
}


Connect.prototype.gettransaction = function(txid='',includeWatchonly=false){/*

  The gettransaction method queries detailed information about transaction txid. This command applies only to txid's that are in the user's local wallet.

  Arguments

  "txid" 	(string, required) 	the transaction id
  "includeWatchonly" 	(bool, optional, default=false) 	whether to include watchonly addresses in the returned balance calculation and in the details[] returned values

  Response

  "amount" 	(numeric) 	the transaction amount
  "confirmations" 	(numeric) 	a confirmation number that is aware of the dPoW security service
  "rawconfirmations" 	(numeric) 	the raw confirmations (number of blocks on top of this transaction's block)
  "blockhash" 	(string) 	the block hash
  "blockindex" 	(numeric) 	the block index
  "blocktime" 	(numeric) 	the time in seconds since epoch (1 Jan 1970 GMT)
  "txid" 	(string) 	the transaction id
  "time" 	(numeric) 	the transaction time in seconds since epoch (1 Jan 1970 GMT)
  "timereceived" 	(numeric) 	the time received in seconds since epoch (1 Jan 1970 GMT)
  "details" : [ ... ] 	(array)
  "account" 	(string) 	DEPRECATED the account name involved in the transaction; can be "" for the default account
  "address" 	(string) 	the address involved in the transaction
  "category" 	(string) 	the category - either send or receive
  "amount" 	(numeric) 	the amount
  "vout" 	(numeric) 	the vout value
  "vjoinsplit" : [ ... ] 	(array of json objects)
  "anchor" 	(string) 	merkle root of note commitment tree
  "nullifiers" : [ ... ] 	(array of strings)
  "hex" 	(string)
  "commitments" : [ ... ] 	(array of strings)
  "hex" 	(string)
  "macs" : [ ... ] 	(array of strings)
  "hex" 	(string)
  "vpub_old" 	(numeric) 	the amount removed from the transparent value pool
  "vpub_new" 	(numeric) 	the amount added to the transparent value pool
  "hex" 	(string) 	transaction data translated into hex

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "gettransaction" };
  if(txid=='')
    dataString.params=[]
  else
    dataString.params = [txid,includeWatchonly]
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.getunconfirmedbalance = function(){
  /*
  The getunconfirmedbalance method returns the server's total unconfirmed balance.

  Arguments

  (none)

  Response

  (none)


*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "getunconfirmedbalance" };
    dataString.params=[]
  return rpc.rpc_request(dataString, this.json)
}


Connect.prototype.importaddress = function(address='',label="",rescan=true){/*
  The importaddress method adds an address or script (in hex) that can be watched as if it were in your wallet, although it cannot be used to spend.

  This call can take an increased amount of time to complete if rescan is true.

  Arguments

  "address" 	(string, required) 	the address to watch
  "label" 	(string, optional, default="") 	an optional label
  rescan 	(boolean, optional, default=true) 	rescan the wallet for transactions

  Response

  (none)
*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "importaddress" };
  if(account=='')
    dataString.params=[]
  else
    dataString.params = [accoun,,label,rescan]
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.importprivkey = function(privkey,label="",rescan=true){/*

  The importprivkey method adds a private key to your wallet.

  This call can take minutes to complete if rescan is true.

  See also dumpprivkey.

  Arguments

  "privkey" 	(string, required) 	the private key (see dumpprivkey)
  "label" 	(string, optional, default="") 	an optional label
  rescan 	(boolean, optional, default=true) 	rescan the wallet for transactions

  Response

  addresses 	(string) 	the public address
*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "importprivkey" };
  if(privkey=='')
    dataString.params=[]
  else
    dataString.params = [privkey,label,rescan]
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.importwallet = function(filename=''){/*
  The importwallet method imports transparent-address keys from a wallet-dump file (see dumpwallet).

  Arguments

  "filename" 	(string, required) 	the wallet file

  Response

  (none)


*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "importwallet" };
  if(filename=='')
    dataString.params=[]
  else
    dataString.params = [filename]
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.keypoolrefill = function(newsize=100){/*
  The keypoolrefill method refills the keypool.

  Arguments

  newsize 	(numeric, optional, default=100) 	the new keypool size

  Response

  (none)
*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "keypoolrefill" };
    dataString.params = [newsize]
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.listaccounts = function(minconf=1,includeWatchonly=false){/*

  The listaccounts method returns an object that has account names as keys and account balances as values.

  Arguments

  minconf 	(numeric, optional, default=1) 	only include transactions with at least this many confirmations
  includeWatchonly 	(bool, optional, default=false) 	include balances in watchonly addresses (see 'importaddress')

  Response

  "account_number" 	(numeric) 	the property name is the account name, and the value is the total balance for the account

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "listaccounts" };
    dataString.params = [minconf,includeWatchonly]
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.listaddressgroupings = function(){/*

  The listaddressgroupings method lists groups of addresses which have had their common ownership made public by common use as inputs or as the resulting change in past transactions.

  Arguments

  (none)

  Response

  "address", 	(string) 	the address
  amount, 	(numeric) 	the amount
  "account" 	(string, optional) 	(DEPRECATED) the account

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "listaddressgroupings" };
  dataString.params=[]
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.listlockunspent = function(){/*
  The listlockunspent method returns a list of temporarily non-spendable outputs.

  See the lockunspent call to lock and unlock transactions for spending.

  Arguments

  (none)

  Response

  "txid" 	(string) 	the transaction id locked
  "vout" 	(numeric) 	the vout value

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "listlockunspent" };
  dataString.params=[]
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.listreceivedbyaccount = function(minconf=1,includeempty=false,includeWatchonly=false){/*

  The listreceivedbyaccount method lists balances by account.

  Arguments

  minconf 	(numeric, optional, default=1) 	the minimum number of confirmations before payments are included
  includeempty 	(boolean, optional, default=false) 	whether to include accounts that haven't received any payments
  includeWatchonly 	(bool, optional, default=false) 	whether to include watchonly addresses (see 'importaddress')

  Response

  "involvesWatchonly" 	(bool) 	only returned if the imported addresses were involved in the transaction
  "account" 	(string) 	the account name of the receiving account
  "amount" 	(numeric) 	the total amount received by addresses with this account
  "confirmations" 	(numeric) 	a confirmation number that is aware of the dPoW security service
  "rawconfirmations" 	(numeric) 	the raw confirmations of the most recent transaction included (number of blocks on top of this transaction's block)

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "listreceivedbyaccount" };
  dataString.params = [minconf,includeempty,includeWatchonly]
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.listreceivedbyaddress = function(minconf=1,includeempty=false,includeWatchonly=false){/*
  The listreceivedbyaddress method lists balances by receiving address.

  Arguments

  minconf 	(numeric, optional, default=1) 	the minimum number of confirmations before payments are included
  includeempty 	(numeric, optional, default=false) 	whether to include addresses that haven't received any payments
  includeWatchonly 	(bool, optional, default=false) 	whether to include watchonly addresses (see 'importaddress')

  Response

  "involvesWatchonly" 	(bool) 	only returned if imported addresses were involved in transaction
  "address" 	(string) 	the receiving address
  "account" 	(string) 	DEPRECATED the account of the receiving address; the default account is ""
  "amount" 	(numeric) 	the total amount received by the address
  "confirmations" 	(numeric) 	a confirmation number that is aware of the dPoW security service
  "rawconfirmations" 	(numeric) 	the raw confirmations of the most recent transaction included (number of blocks on top of this transaction's block)
*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "listreceivedbyaddress" };
  dataString.params = [minconf,includeempty,includeWatchonly]
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.listsinceblock = function(blockhash,targetconfirmationd,includeWatchonly){/*

  The listsinceblock method queries all transactions in blocks since block blockhash, or all transactions if blockhash is omitted.

  Arguments

  "blockhash" 	(string, optional) 	the block hash from which to list transactions
  target-confirmations 	(numeric, optional) 	the confirmations required (must be 1 or more)
  includeWatchonly 	(bool, optional, default=false) 	include transactions to watchonly addresses (see also 'importaddress')

  Response

  "transactions":
  "account" 	(string) 	DEPRECATED the account name associated with the transaction; will be "" for the default account
  "address" 	(string) 	the address of the transaction (not present for move transactions -- category = move)
  "category" 	(string) 	the transaction category; send has negative amounts, receive has positive amounts
  "amount" 	(numeric) 	the amount of the relevant currency -- negative for the send category, and for the move category for moves outbound. It is positive for the receive category, and for the move category for inbound funds.
  "vout" 	(numeric) 	the vout value
  "fee" 	(numeric) 	the amount of the fee; this value is negative and only available for the send category of transactions
  "confirmations" 	(numeric) 	a confirmation number that is aware of the dPoW security service
  "rawconfirmations" 	(numeric) 	the raw confirmations of the transaction; available for send and receive category of transactions (number of blocks on top of this transaction's block)
  "blockhash" 	(string) 	the block hash containing the transaction; available for the send and receive categories of transactions
  "blockindex" 	(numeric) 	the block index containing the transaction; available for the send and receive categories of transactions
  "blocktime" 	(numeric) 	the block time in seconds since epoch (1 Jan 1970 GMT)
  "txid" 	(string) 	the transaction id; available for send and receive categories of transactions
  "time" 	(numeric) 	the transaction time in seconds since epoch (Jan 1 1970 GMT)
  "timereceived" 	(numeric) 	the time received in seconds since epoch (Jan 1 1970 GMT); available for send and receive category of transactions
  "comment" 	(string) 	whether a comment is associated with the transaction
  "to" 	(string) 	whether a 'to' comment is associated with the transaction
  "lastblock" 	(string) 	the hash of the last block
*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "listsinceblock" };
  if(typeof blockhash=='string' && typeof targetconfirmationd == 'string' && includeWatchonly=='boolean')
    dataString.params=[blockhash,targetconfirmationd,includeWatchonly]
  else if(typeof blockhash=='string' && typeof targetconfirmationd == 'string')
    dataString.params = [blockhash,targetconfirmationd]
  else if (typeof blockhash=='string' )
    dataString.params = [blockhash]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.listtransactions = function(account='',count=10,from=0,includeWatchonly=false){/*

  The listtransactions method returns up to count most recent transactions skipping the first from transactions for account.

Arguments

"account" 	(string, optional) 	DEPRECATED the account name; should be "*"
count 	(numeric, optional, default=10) 	the number of transactions to return
from 	(numeric, optional, default=0) 	the number of transactions to skip
includeWatchonly 	(bool, optional, default=false) 	include transactions to watchonly addresses (see importaddress)

Response

"account" 	(string) 	DEPRECATED the account name associated with the transaction; it will be "" for the default account
"address" 	(string) 	the address of the transaction; not present for move transactions (category = move)
"category" 	(string) 	The transaction category. This property can be send
"amount" 	(numeric) 	The amount. This value is negative for the send category, and for the move category for moves outbound. It is positive for the receive category and for the move category for inbound funds.
"vout" 	(numeric) 	the vout value
"fee" 	(numeric) 	the amount of the fee; this is negative and only available for the send category of transactions
"confirmations" 	(numeric) 	a confirmation number that is aware of the dPoW security service
"rawconfirmations" 	(numeric) 	the raw confirmations of the transaction; available for send and receive category of transactions (number of blocks on top of this transaction's block)
"blockhash" 	(string) 	the block hash containing the transaction; available for the send and receive categories of transactions
"blockindex" 	(numeric) 	the block index containing the transaction; available for the send and receive categories of transactions
"txid" 	(string) 	the transaction id; available for the send and receive categories of transactions
"time" 	(numeric) 	the transaction time in seconds since epoch (midnight Jan 1 1970 GMT)
"timereceived" 	(numeric) 	the time received in seconds since epoch (midnight Jan 1 1970 GMT); available for the send and receive categories of transactions
"comment" 	(string) 	whether a comment is associated with the transaction
"otheraccount" 	(string) 	for the move category of transactions; indicates the account which sent the funds (for receiving funds, positive amounts), or went to (for sending funds, negative amounts)
"size" 	(numeric) 	transaction size in bytes


*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "listtransactions" };
  if(account=='')
    dataString.params=[]
  else
    dataString.params = [account,count,from,includeWatchonly]
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.listunspent = function(minconf=1,maxconf=9999999,address=''){/*

  The listunspent method returns an array of unspent transaction outputs, with a range between minconf and maxconf (inclusive) confirmations. The method can, optionally, filter to only include txouts paid to specified addresses.

  Arguments

  minconf 	(numeric, optional, default=1) 	the minimum confirmations to filter
  maxconf 	(numeric, optional, default=9999999) 	the maximum confirmations to filter
  "address" 	(string) 	a series of addresses

  Response

  "txid" 	(string) 	the transaction id
  "vout" 	(numeric) 	the vout value
  "generated" 	(boolean) 	true if txout is a coinbase transaction output
  "address" 	(string) 	the address
  "account" 	(string) 	DEPRECATED the associated account, or "" for the default account
  "scriptPubKey" 	(string) 	the script key
  "amount" 	(numeric) 	the transaction amount
  "confirmations" 	(numeric) 	a confirmation number that is aware of the dPoW security service
  "rawconfirmations" 	(numeric) 	the raw confirmations (number of blocks on top of this transaction's block)
*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "listunspent" };
  if(address=='')
    dataString.params=[]
  else
    dataString.params = [minconf,maxconf,address]
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.lockunspent = function(unlock='',txid,vout){/*

  The lockunspent method locks (unlock = false) or unlocks (unlock = true) specified transaction outputs. A locked transaction output will not be chosen by automatic coin selection, when spending the relevant coin. The locks are stored in memory only; at runtime a node always starts with zero locked outputs, and the locked output list is always cleared when a node stops or fails.

  See the listunspent and listlockunspent calls to determine local transaction state and info.

  Arguments

  unlock 	(boolean, required) 	whether to unlock (true) or lock (false) the specified transactions
  "txid" 	(string) 	the transaction id
  "vout" 	(numeric) 	the output number

  Response

  true/false 	(boolean) 	whether the command was successful

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "lockunspent" };
  if(unlock=='')
    dataString.params=[]
  else
    dataString.params = [unlock,[{"txid":txid,"vout":vout}]]
  return rpc.rpc_request(dataString, this.json)
}


Connect.prototype.resendwallettransactions = function(){/*

  The resendwallettransactions method immediately re-broadcasts unconfirmed wallet transactions to all peers. This method is intended only for testing; the wallet code periodically re-broadcasts automatically.

  Arguments

  (none)

  Response

  "transaction_id" 	(string) 	an array of the rebroadcasted transaction id's
*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "resendwallettransactions" };
  dataString.params=[]
  return rpc.rpc_request(dataString, this.json)
}


Connect.prototype.sendmany = function(account,amounts,minconf=1,comment='',subtractfeefromamount=[]){
// amounts = {address1:amount1,address2:amount2,..}
/*
sendmany "account" { "address": amount, ... } ( minconf "comment" [ "address", ... ] )

The sendmany method can send multiple transactions at once. Amounts are double-precision floating point numbers.

Arguments

"account" 	(string, required) 	MUST be set to the empty string "" to represent the default account; passing any other string will result in an error
"amounts" { "address":amount, ... } 	("string":numeric) 	the address (string) and the value (double-precision floating numeric)
minconf 	(numeric, optional, default=1) 	only use the balance confirmed at least this many times
"comment" 	(string, optional) 	a comment
subtractfeefromamount 	(string, optional) 	a json array with addresses. The fee will be equally deducted from the amount of each selected address; the recipients will receive less than you enter in their corresponding amount field. If no addresses are specified here, the sender pays the fee.
"address" 	(string) 	subtract fee from this address

Response

"transaction_id" 	(string) 	the transaction id for the send; only 1 transaction is created regardless of the number of addresses*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "sendmany" };
  if(typeof account=='string' && typeof amounts == 'object')
    dataString.params=[account,amounts,minconf,comment,subtractfeefromamount]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.sendtoaddress = function(komodoaddress='',amount,comment="",commentto="",subtractfeefromamount=false){/*

  The sendtoaddress method sends an amount to a given address. The amount is real and is rounded to the nearest 0.00000001.

  Arguments

  "komodoaddress" 	(string, required) 	the receiving address
  "amount" 	(numeric, required) 	the amount to send (json requires all decimals values less than 1 begin with the characters '0.')
  "comment" 	(string, optional) 	a comment used to store what the transaction is for; this is not part of the transaction, just kept in your wallet
  "comment-to" 	(string, optional) 	a comment to store the name of the person or organization to which you're sending the transaction; this is stored in your local wallet file only
  subtractfeefromamount 	(boolean, optional, default=false) 	when true, the fee will be deducted from the amount being sent

  Response

  "transaction_id" 	(string) 	the transaction id

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "sendtoaddress" };
  if(komodoaddress==''|| typeof amount=='undefined')
    dataString.params=[]
  else
    dataString.params = [komodoaddress,amount,comment,commentto,subtractfeefromamount]
  return rpc.rpc_request(dataString, this.json)
}


Connect.prototype.setpubkey = function(pubkey=''){/*

  The setpubkey method sets the indicated pubkey. This method can be used in place of the pubkey launch parameter, when necessary.

  Visit the section pubkey to understand when it is essential to set a pubkey and the consequences of setting it.

  This method works only once per daemon start. It can't be used to change the pubkey that has already been set.

  Arguments

  pubkey 	(string) 	the desired pubkey

  Response

  pubkey 	(string) 	the pubkey
  ismine 	(boolean) 	indicates whether the address belongs to the user
  R-address 	(string) 	the public address associated with the pubkey

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "setpubkey" };
  if(pubkey=='')
    dataString.params=[]
  else
    dataString.params = [pubkey]
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.settxfee = function(amount){/*

  The settxfee method sets the transaction fee per kB.

  Arguments

  amount 	(numeric, required) 	the transaction fee in COIN/kB rounded to the nearest 0.00000001

  Response

  true/false 	(boolean) 	returns true if successful

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "settxfee" };
  if(typeof amount=='number')
    dataString.params=[amount]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.signmessage = function(address,message){/*

  The signmessage method signs a message via the private key of an address.

  Arguments

  "address" 	(string, required) 	the address to use for the private key
  "message" 	(string, required) 	the message

  Response

  "signature" 	(string) 	the signature of the message encoded in base 64  :argument

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "signmessage" };
  if(address && message)
    dataString.params=[address,message]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.walletlock = function(){/*

  The walletlock method re-locks a wallet that has a passphrase enabled via encryptwallet.

  Arguments

  (none)

  Response

  (none)

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "walletlock" };
  dataString.params=[]
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.walletpassphrase = function(passphase,timeout){/*

  The walletpassphrase method unlocks the wallet using the passphrase that was set by the encryptwallet method.

  The timeout argument can be included to limit the length of time (in seconds) the wallet will remain unlocked.

  Arguments

  "passphrase" 	(string) 	the passphrase that was set by the encryptwallet method
  timeout 	(number in seconds, optional) 	the amount of time for which the wallet should remember the passphrase

  Response

  (none)

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "walletpassphrase" };
  if(passphase && typeof timeout=='number')
    dataString.params=[passphase,timeout]
  else if(passphase)
    dataString.params = [passphase]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.walletpassphrasechange = function(oldpassphrase,newpassphrase){/*

  The walletpassphrasechange method changes "oldpassphrase" to "newpassphrase".

  Arguments

  "oldpassphrase" 	(string) 	the old passphrase
  "newpassphrase" 	(string) 	the new passphrase

  Response

  (none)

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "walletpassphrasechange" };
  if(oldpassphrase && newpassphrase)
    dataString.params=[oldpassphrase,newpassphrase]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.z_exportkey = function(z_address){/*

  The z_exportkey method reveals the private z_key corresponding to z_address.

  See also z_importkey.

  Arguments

  "z_address" 	(string, required) 	the z_address for the private key

  Response

  "key" 	(string) 	the private key

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "z_exportkey" };
  if(z_address)
    dataString.params=[z_address]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.z_exportviewingkey = function(z_address){/*

The z_exportviewingkey method reveals the viewing key corresponding to z_address.

  Arguments

 "z_address" 	(string, required) 	the z_address for the viewing key

 Response

 "vkey" 	(string) 	the viewing key

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "z_exportviewingkey" };
  if(z_address)
    dataString.params=[z_address]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.z_exportwallet = function(filename){/*

  The z_exportwallet method exports all wallet keys, including both t address and z address types, in a human-readable format. Overwriting an existing file is not permitted.

  Arguments

  "filename" 	(string, required) 	the filename, saved to the directory indicated by the exportdir parameter at daemon runtime (required)

  Response

  "path" 	(string) 	the full path of the destination file
*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "z_exportwallet" };
  if(filename)
    dataString.params=[filename]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.z_getbalance = function(address,minconf=1){/*

The z_getbalance method returns the balance of a t address or z address belonging to the node’s wallet.
  Arguments

 "address" 	(string) 	the selected z or t address
 minconf 	(numeric, optional, default=1) 	only include transactions confirmed at least this many times

 Response

 amount 	(numeric) 	the total amount received at this address (in the relevant COIN value)


*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "z_getbalance" };
  if(address)
    dataString.params=[address,minconf]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.z_getnewaddress = function(){/*

  The z_getnewaddress method returns a new z_address for receiving payments.

  Arguments

  (none)

  Response

  "z_address" 	(string) 	the new z_address

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "z_getnewaddress" };
  dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.z_getoperationresult = function(operationid){/*

  The z_getoperationresult method retrieves the result and status of an operation which has finished, and then removes the operation from memory.

  See also z_getoperationstatus.

  Arguments

  "operationid" 	(string, optional) 	a list of operation ids to query; if not provided, the method examines all operations known to the node

  Response

  "id" 	(string) 	the operation id
  "status" 	(string) 	the result of the operation; can be success
  "creation_time" 	(numeric) 	the creation time, in seconds since epoch (Jan 1 1970 GMT)
  "result": { ... } 	(array of json objects)
  "txid": 	(string) 	the transaction id
  "execution_secs" 	(numeric) 	the length of time to calculate the transaction
  "method" 	(string) 	the name of the method used in the operation
  "params": { ... } 	(json)
  "fromaddress" 	(string) 	the address from which funds are drawn
  "amounts": [ ... ] 	(array of json objects)
  "address" 	(string) 	the receiving address
  "amount" 	(numeric) 	the amount to receive
  "minconf" 	(numeric) 	the minimum number of confirmations required
  "fee" 	(numeric) 	the transaction fee


*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "z_getoperationresult" };
  if(operationid)
    dataString.params=[operationid]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.z_getoperationstatus = function(operationid){/*

  The z_getoperationstatus message queries the operation status and any associated result or error data of any operationid stored in local memory. The operation will remain in memory (unlike z_getoperationresult, which removes the data from the local memory).

  Arguments

  "operationid" 	(array, optional) 	a list of operation ids we are interested in; if an array is not provided, the method examines all operations known to the node

  Response

  "id" 	(string) 	the operation id
  "status" 	(string) 	the status of the operation; can be success
  "creation_time" 	(numeric) 	the creation time, in seconds since epoch (Jan 1 1970 GMT)
  "error" : { ... } 	(array of json objects)
  "code" 	(numeric) 	the associated error code
  "message" 	(string) 	a message to indicate the nature of the error, if such a message is available
  "method" 	(string) 	the name of the method used in the operation
  "params" : { ... } 	(array of json objects)
  "fromaddress" 	(string) 	the address from which funds are drawn
  "amounts": [ ... ] 	(array of json objects)
  "address" 	(string) 	the receiving address
  "amount" 	(numeric) 	the amount to receive
  "minconf" 	(numeric) 	indicates the required number of mining confirmations
  "fee" 	(numeric) 	the fee

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "z_getoperationstatus" };
  if(operationid)
    dataString.params=[operationid]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.z_gettotalbalance = function(minconf=1,includeWatchonly=false){/*

  The z_gettotalbalance method returns the total value of funds, including both transparent and private, stored in the node’s wallet.

  CAUTION: If the wallet contains watch-only z addresses the returned private balance may be larger than the actual balance, as spends cannot be detected with incoming viewing keys.
  :argument

  Arguments

  minconf 	(numeric, optional, default=1) 	only include private and transparent transactions confirmed at least this many times
  includeWatchonly 	(bool, optional, default=false) 	also include balance in watchonly addresses (see 'importaddress' and 'z_importviewingkey')

  Response

  "transparent" 	(numeric) 	the total balance of transparent funds
  "interest" 	(numeric) 	the total balance of unclaimed interest earned
  "private" 	(numeric) 	the total balance of private funds
  "total" 	(numeric) 	the total balance of both transparent and private funds


*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "z_gettotalbalance" };
  dataString.params = [minconf,includeWatchonly]
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.z_importkey = function(z_privatekey,rescan="whenkeyisnew",startHeight=0){/*
  The z_importkey method imports z_privatekey to your wallet.

  This call can take minutes to complete if rescan is true.

  The optional parameters are currently not functional with KMD-based blockchains.

  Arguments

  "z_privatekey" 	(string, required) 	the z_privatekey (see z_exportkey)
  rescan 	(string, optional, default="whenkeyisnew") 	rescan the wallet for transactions; can be yes
  startHeight 	(numeric, optional, default=0) 	the block height at which to begin the rescan

  Response

  (none)


*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "z_importkey" };
  if(z_privatekey)
    dataString.params=[z_privatekey,rescan,startHeight]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.z_importviewingkey = function(viewing_key,rescan="whenkeyisnew",startHeight=0){/*

The z_importviewingkey adds a viewing key to your wallet. This method allows you to view the balance in a z address that otherwise does not belong to your wallet.

Arguments

"viewing_key" 	(string, required) 	the viewing key
rescan 	(string, optional, default="whenkeyisnew") 	whether to rescan the wallet for transactions; can be "yes"
startHeight 	(numeric, optional, default=0) 	block height to start rescan

Response

(none)

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "z_importviewingkey" };
  if(viewing_key)
    dataString.params=[viewing_key,rescan,startHeight]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.z_importwallet = function(filename){/*

  z_importwallet "filename"

  The z_importwallet method imports t address and z address keys from a wallet export file.


  Arguments

  "filename" 	(string, required) 	the wallet file

  Response

  (none)


*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "z_importwallet" };
  if(filename)
    dataString.params=[filename]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.z_listaddresses = function(includeWatchonly=false){/*

  z_listaddresses ( includeWatchonly )

  The z_listaddresses method returns the list of z addresses belonging to the wallet.


  Arguments

  includeWatchonly 	(bool, optional, default=false) 	also include watchonly addresses

  Response

  "z_address" 	(string) 	a z address belonging to the wallet

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "z_listaddresses" };
  dataString.params = [includeWatchonly]
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.z_listoperationids = function(status){/*

  The z_listoperationids method returns the list of operation ids currently known to the wallet.

  Arguments

  "status" 	(string, optional) 	filter result by the operation's state e.g. "success"

  Response

  "operationid" 	(string) 	an operation id belonging to the wallet
*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "z_listoperationids" };
  if(status)
    dataString.params=[status]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.z_listreceivedbyaddress = function(address,minconf=1){/*

  The z_listreceivedbyaddress method returns a list of amounts received by a z address belonging to the node’s wallet.

  Arguments

  address 	(string) 	the private address.
  minconf 	(numeric, optional, default=1) 	only include transactions confirmed at least this many times

  Result

  An array of json objects, each having the properties below.

  txid 	(string) 	the transaction id
  amount 	(numeric) 	the amount of value in the note
  memo 	(string) 	hexadecimal string representation of memo field
  "confirmations" 	(numeric) 	a confirmation number that is aware of the dPoW security service
  "rawconfirmations" 	(numeric) 	the raw confirmations (number of blocks on top of this transaction's block)
  jsindex 	(sprout) 	(numeric, received only by sprout addresses) the joinsplit index
  jsoutindex 	(numeric, received only by sprout addresses) 	the output index of the joinsplit
  outindex 	(numeric, sapling) 	the output index
  change 	(boolean) 	true if the address that received the note is also one of the sending addresses


*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "z_listreceivedbyaddress" };
  if(address)
    dataString.params=[address,minconf]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}


Connect.prototype.z_listunspent = function(minconf=1,maxconf=9999999,includeWatchonly=false,addresses){/*
  The z_listunspent method returns an array of unspent shielded notes.

The method can also filter to only include results that have between minconf and maxconf (inclusive) confirmations, and also for specified z_addresses (["zaddr", ...]).

When minconf is 0 unspent notes with zero confirmations are returned, even though they are not immediately spendable.

Arguments

minconf 	(numeric, optional, default=1) 	the minimum confirmations to filter
maxconf 	(numeric, optional, default=9999999) 	the maximum confirmations to filter
includeWatchonly 	(bool, optional, default=false) 	whether to also include watchonly addresses (see z_importviewingkey)
addresses 	(array) 	a json array of z addresses (both Sprout and Sapling) to act as a filter; duplicate addresses are not allowed
address 	(string) 	a z address

Results

An array of json objects, each having the properties below.

txid 	(string) 	the transaction id
jsindex 	(numeric) 	the joinsplit index
jsoutindex 	(numeric, only returned on sprout addresses) 	the output index of the joinsplit
outindex 	(numeric, only returned on sapling addresses) 	the output index
"confirmations" 	(numeric) 	a confirmation number that is aware of the dPoW security service
"rawconfirmations" 	(numeric) 	the raw confirmations (number of blocks on top of this transaction's block)
spendable 	(boolean) 	true if note can be spent by wallet, false if note has zero confirmations, false if address is watchonly
address 	(string) 	the shielded address
amount 	(numeric) 	the amount of value in the note
memo 	(string) 	hexadecimal string representation of memo field
change 	(boolean) 	true if the address that received the note is also one of the sending addresses

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "z_listunspent" };
  if(addresses)
    dataString.params=[minconf,maxconf,includeWatchonly,addresses]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.z_mergetoaddress = function(fromaddress,addressesamounts,fee=0.0001,transparent_limit=50,shielded_limit=10,memo=''){/*

  The z_mergetoaddress method merges multiple utxos and notes into a single utxo or note. The method works for both t addresses and z addresses, both separately and in combination. Coinbase utxos are ignored; use z_shieldcoinbase to combine those into a single note.

  Arguments

  fromaddresses 	(string, required)
  "address" 	(string) 	can be a t address or a z address
  "toaddress" 	(string, required) 	the t address or z address to receive the combined utxo
  fee 	(numeric, optional, default=0.0001) 	the fee amount to attach to this transaction
  transparent_limit 	(numeric, optional, default=50) 	limit on the maximum number of transparent utxos to merge; you may set this value to 0 to use the node option mempooltxinputlimit
  shielded_limit 	(numeric, optional, default=10) 	limit on the maximum number of hidden notes to merge; you may set this value to 0 to merge as many as will fit in the transaction
  "memo" 	(string, optional) 	encoded as hex; when toaddress is a z address, this value will be stored in the memo field of the new note

  Response

  "remainingUTXOs" 	(numeric) 	the number of utxos still available for merging
  "remainingTransparentValue" 	(numeric) 	the value of utxos still available for merging
  "remainingNotes" 	(numeric) 	the number of notes still available for merging
  "remainingShieldedValue" 	(numeric) 	the value of notes still available for merging
  "mergingUTXOs" 	(numeric) 	the number of utxos being merged
  "mergingTransparentValue" 	(numeric) 	the value of utxos being merged
  "mergingNotes" 	(numeric) 	the number of notes being merged
  "mergingShieldedValue" 	(numeric) 	the value of notes being merged
  "opid" 	(string) 	an operationid to pass to z_getoperationstatus to get the result of the operation


*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "z_mergetoaddress" };
  if(fromaddress && addressesamounts)
    dataString.params=[fromaddress,addressesamounts,fee,transparent_limit,shielded_limit,memo]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.z_sendmany = function(fromaddress,addressesamounts,minconf=1,fee=0.0001){/*

  The z_sendmany method sends one or more transactions at once, and allows for sending transactions of types t --> t, t --> z, z --> z, z --> t. It is the principle method for dealing with shielded z transactions in the Komodo ecosystem.

  Arguments

  "fromaddress" 	(string, required) 	the sending t address or z address
  "addressamount" (array of json objects)	(required)
  [{
      "address":address  (string, required) The address is a taddr or zaddr
      "amount":amount    (numeric, required) The numeric amount in KMD is the value
      "memo":memo        (string, optional) If the address is a zaddr, raw data represented in hexadecimal string format
    }, ... ]
  	eg:'[{"address":"RVEsww91UBdUNGyCC1GjDVuvJShEei2kj4","amount":0.01}]
  minconf 	(numeric, optional, default=1) 	only use funds confirmed at least this many times
  fee 	(numeric, optional, default=0.0001) 	the fee amount to attach to this transaction

  Response

  "operationid" 	(string) 	an operationid to pass to z_getoperationstatus to get the result of the operation


*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "z_sendmany" };
  if(fromaddress && addressesamounts)
    dataString.params=[fromaddress,addressesamounts,minconf,fee]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.z_shieldcoinbase = function(fromaddress,tozaddress,fee=0.0001,limit=50){/*

  The z_shieldcoinbase method shields transparent coinbase funds by sending the funds to a shielded z address. This is an asynchronous operation and utxos selected for shielding will be locked. If there is an error, they are unlocked.

  The RPC call listlockunspent can be used to return a list of locked utxos. The number of coinbase utxos selected for shielding can be limited by the caller. If the limit parameter is set to zero, the mempooltxinputlimit option will determine the number of uxtos. Any limit is constrained by the consensus rule defining a maximum transaction size of 100000 bytes.

  Arguments

  "fromaddress" 	(string, required) 	the address is a t address or "*" for all t address belonging to the wallet
  "toaddress" 	(string, required) 	the address is a z address
  fee 	(numeric, optional, default=0.0001) 	the fee amount to attach to this transaction
  limit 	(numeric, optional, default=50) 	limit on the maximum number of utxos to shield; set to 0 to use node option mempooltxinputlimit

  Response

  "remainingUTXOs" 	(numeric) 	the number of coinbase utxos still available for shielding
  "remainingValue" 	(numeric) 	the value of coinbase utxos still available for shielding
  "shieldingUTXOs" 	(numeric) 	the number of coinbase utxos being shielded
  "shieldingValue" 	(numeric) 	the value of coinbase utxos being shielded
  "opid" 	(string) 	an operationid to pass to z_getoperationstatus to get the result of the operation


*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "z_shieldcoinbase" };
  if(fromaddress && tozaddress)
    dataString.params=[fromaddress,tozaddress,fee,limit]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.zcbenchmark = function(benchmarktype,samplecount){/*

  The zcbenchmark method runs a benchmark of the selected benchmarktype.
  This benchmark is calculated samplecount times.

  When finished, the method returns the running times of each sample.

  Arguments

  "benchmarktype" 	(string, required) 	the type of the benchmark
  "samplecount" 	(numeric) 	the number of samples to take

  Response

  "runningtime" 	(numeric) 	the time it took to run the selected benchmarktype
*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "zcbenchmark" };
  if(benchmarktype && samplecount)
    dataString.params=[benchmarktype,samplecount]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}


Connect.prototype.zcsamplejoinsplit = function(){/*

Perform a joinsplit and return the JSDescription.

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "zcsamplejoinsplit" };
  dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.general_method = function(method,...params){/*

General library function to use any method

Arguments:
"method" 	(string, required) 	the type of the benchmark
"params" 	the parameters required for method


conn.general_method("getwalletinfo")

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest" };
  dataString.method = method
  dataString.params = [...params]
  return rpc.rpc_request(dataString, this.json)
}



module.exports.Connect = Connect

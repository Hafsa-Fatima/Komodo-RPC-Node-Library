let komodo = require('../komodo')
let rpc = require('../rpc_util')

let Connect = komodo.Connect

// https://developers.komodoplatform.com/basic-docs/smart-chains/smart-chain-api/wallet.html

//  TODO : COMPLETED
Connect.prototype.getwalletinfo = function() {
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

// TODO : CHECK
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

// TODO : COMPLETED <address> from getnewaddress
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

// TODO : CHECK <Cannot export wallet until the komodod -exportdir option has been set>
Connect.prototype.dumpwallet = function(filename=''){
  /*

    :argument

    :response

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
// TODO : COMPLETED <output>
Connect.prototype.getaccount = function(address=''){
  /*

    :argument

    :response

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "getaccount" };
  if(address=='')
    dataString.params=[]
  else
    dataString.params = [address]
  return rpc.rpc_request(dataString, this.json)
}

// TODO : COMPLETED
Connect.prototype.getaccountaddress = function(account=''){
  /*

    :argument

    :response

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

    :argument

    :response

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

    :argument

    :response

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

  :argument

  :response

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

  :argument

  :response

*/
let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "getnewaddress" };
  if(account=='')
    dataString.params=[]
  else
    dataString.params = [account]
  return rpc.rpc_request(dataString, this.json)
}

// TODO : COMPLETED
Connect.prototype.getrawchangeaddress = function(){
  /*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "getrawchangeaddress" };
  dataString.params=[]
  return rpc.rpc_request(dataString, this.json)
}

// TODO : COMPLETED
Connect.prototype.getreceivedbyaccount = function(account='',minconf=1){
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "getreceivedbyaccount" };
  if(account=='')
    dataString.params=[""]
  else
    dataString.params = [account,minconf]
  return rpc.rpc_request(dataString, this.json)
}

// TODO : COMPLETED
Connect.prototype.getreceivedbyaddress = function(account='',minconf=1){
  /*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "getreceivedbyaddress" };
  if(account=='')
    dataString.params=[]
  else
    dataString.params = [account,minconf]
  return rpc.rpc_request(dataString, this.json)
}





// TODO : CHECK CHECK
Connect.prototype.gettransaction = function(txid='',includeWatchonly=false){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "gettransaction" };
  if(txid=='')
    dataString.params=[]
  else
    dataString.params = [txid,includeWatchonly]
  return rpc.rpc_request(dataString, this.json)
}
// TODO : CHECK CHECK
Connect.prototype.getunconfirmedbalance = function(){
  /*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "getunconfirmedbalance" };
    dataString.params=[]
  return rpc.rpc_request(dataString, this.json)
}

// TODO : CHECK CHECK
Connect.prototype.importaddress = function(address='',label="",rescan=true){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "importaddress" };
  if(account=='')
    dataString.params=[]
  else
    dataString.params = [accoun,,label,rescan]
  return rpc.rpc_request(dataString, this.json)
}
// TODO : CHECK CHECK
Connect.prototype.importprivkey = function(privkey,label="",rescan=true){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "importprivkey" };
  if(privkey=='')
    dataString.params=[]
  else
    dataString.params = [privkey,label,rescan]
  return rpc.rpc_request(dataString, this.json)
}
// TODO : CHECK CHECK
Connect.prototype.importwallet = function(filename=''){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "importwallet" };
  if(filename=='')
    dataString.params=[]
  else
    dataString.params = [filename]
  return rpc.rpc_request(dataString, this.json)
}
// TODO : CHECK CHECK
Connect.prototype.keypoolrefill = function(newsize=100){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "keypoolrefill" };
  if(newsize=='')
    dataString.params=[]
  else
    dataString.params = [newsize]
  return rpc.rpc_request(dataString, this.json)
}
// TODO : CHECK CHECK
Connect.prototype.listaccounts = function(minconf=1,includeWatchonly=false){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "listaccounts" };
  if(account=='')
    dataString.params=[]
  else
    dataString.params = [minconf,includeWatchonly]
  return rpc.rpc_request(dataString, this.json)
}
// TODO : CHECK CHECK
Connect.prototype.listaddressgroupings = function(){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "listaddressgroupings" };
  dataString.params=[]
  return rpc.rpc_request(dataString, this.json)
}
// TODO : CHECK CHECK
Connect.prototype.listlockunspent = function(){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "listlockunspent" };
  dataString.params=[]
  return rpc.rpc_request(dataString, this.json)
}
// TODO : CHECK CHECK
Connect.prototype.listreceivedbyaccount = function(minconf=1,includeempty=false,includeWatchonly=false){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "listreceivedbyaccount" };
  dataString.params = [minconf,includeempty,includeWatchonly]
  return rpc.rpc_request(dataString, this.json)
}
// TODO : CHECK CHECK
Connect.prototype.listreceivedbyaddress = function(minconf=1,includeempty=false,includeWatchonly=false){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "listreceivedbyaddress" };
  dataString.params = [minconf,includeempty,includeWatchonly]
  return rpc.rpc_request(dataString, this.json)
}
// TODO : CHECK CHECK
Connect.prototype.listsinceblock = function(account='',count=10,from=0,includeWatchonly=false){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "listsinceblock" };
  if(account=='')
    dataString.params=[]
  else
    dataString.params = [account,count,from,includeWatchonly]
  return rpc.rpc_request(dataString, this.json)
}
// TODO : CHECK CHECK
Connect.prototype.listtransactions = function(account='',count=10,from=0,includeWatchonly=false){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "listtransactions" };
  if(account=='')
    dataString.params=[]
  else
    dataString.params = [account,count,from,includeWatchonly]
  return rpc.rpc_request(dataString, this.json)
}
// TODO : CHECK CHECK
Connect.prototype.listunspent = function(minconf=1,maxconf=9999999,address=''){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "listunspent" };
  if(address=='')
    dataString.params=[]
  else
    dataString.params = [minconf,maxconf,address]
  return rpc.rpc_request(dataString, this.json)
}
// TODO : CHECK CHECK
Connect.prototype.lockunspent = function(unlock='',txid,vout){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "lockunspent" };
  if(unlock=='')
    dataString.params=[]
  else
    dataString.params = [unlock,[{"txid":txid,"vout":vout}]]
  return rpc.rpc_request(dataString, this.json)
}

// TODO : CHECK CHECK
Connect.prototype.resendwallettransactions = function(){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "resendwallettransactions" };
  dataString.params=[]
  return rpc.rpc_request(dataString, this.json)
}

// TODO : CHECK CHECK
Connect.prototype.sendmany = function(account='',amounts,minconf=1,comment,subtractfeefromamount,address){
// amounts = {address1:amount1,address2:amount2,..}
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "sendmany" };
  if(account=='')
    dataString.params=[]
  else
    dataString.params = [account,amount,minconf,comment,subtractfeefromamount,address]
  return rpc.rpc_request(dataString, this.json)
}
// TODO : CHECK CHECK
Connect.prototype.sendtoaddress = function(komodoaddress='',amount='',comment="",commentto="",subtractfeefromamount=false){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "sendtoaddress" };
  if(komodoaddress==''|| amount=='')
    dataString.params=[]
  else
    dataString.params = [komodoaddress,amount,comment,commentto,subtractfeefromamount]
  return rpc.rpc_request(dataString, this.json)
}

// TODO : CHECK CHECK
Connect.prototype.setpubkey = function(pubkey=''){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "setpubkey" };
  if(pubkey=='')
    dataString.params=[]
  else
    dataString.params = [pubkey]
  return rpc.rpc_request(dataString, this.json)
}
// TODO : CHECK CHECK
Connect.prototype.settxfee = function(amount){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "settxfee" };
  if(amount)
    dataString.params=[amount]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
// TODO : CHECK CHECK
Connect.prototype.signmessage = function(address,message){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "signmessage" };
  if(address && message)
    dataString.params=[address,message]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
// TODO : CHECK CHECK
Connect.prototype.walletlock = function(){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "walletlock" };
  dataString.params=[]
  return rpc.rpc_request(dataString, this.json)
}
// TODO : CHECK CHECK
Connect.prototype.walletpassphrase = function(passphase,timeout){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "walletpassphrase" };
  if(passphase && timeout)
    dataString.params=[passphase,timeout]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
// TODO : CHECK CHECK
Connect.prototype.walletpassphrasechange = function(oldpassphrase,newpassphrase){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "walletpassphrasechange" };
  if(oldpassphrase && newpassphrase)
    dataString.params=[oldpassphrase,newpassphrase]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
// TODO : CHECK CHECK
Connect.prototype.z_exportkey = function(z_address){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "z_exportkey" };
  if(z_address)
    dataString.params=[z_address]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
// TODO : CHECK CHECK
Connect.prototype.z_exportviewingkey = function(z_address){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "z_exportviewingkey" };
  if(z_address)
    dataString.params=[z_address]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
// TODO : CHECK CHECK
Connect.prototype.z_exportwallet = function(filename){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "z_exportwallet" };
  if(filename)
    dataString.params=[filename]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
// TODO : CHECK CHECK
Connect.prototype.z_getbalance = function(address,minconf=1){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "z_getbalance" };
  if(address)
    dataString.params=[address,minconf]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
// TODO : CHECK CHECK
Connect.prototype.z_getnewaddress = function(){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "z_getnewaddress" };
  dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
// TODO : CHECK CHECK
Connect.prototype.z_getoperationresult = function(operationid){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "z_getoperationresult" };
  if(operationid)
    dataString.params=[operationid]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
// TODO : CHECK CHECK
Connect.prototype.z_getoperationstatus = function(operationid){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "z_getoperationstatus" };
  if(operationid)
    dataString.params=[operationid]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
// TODO : CHECK CHECK
Connect.prototype.z_gettotalbalance = function(minconf=1,includeWatchonly=false){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "z_gettotalbalance" };
  dataString.params = [minconf,includeWatchonly]
  return rpc.rpc_request(dataString, this.json)
}
// TODO : CHECK CHECK
Connect.prototype.z_importkey = function(z_privatekey,rescan="whenkeyisnew",startHeight=0){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "z_importkey" };
  if(z_privatekey)
    dataString.params=[z_privatekey,rescan,startHeight]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
// TODO : CHECK CHECK
Connect.prototype.z_importviewingkey = function(viewing_key,rescan="whenkeyisnew",startHeight=0){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "z_importviewingkey" };
  if(viewing_key)
    dataString.params=[viewing_key,rescan,startHeight]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
// TODO : CHECK CHECK
Connect.prototype.z_importwallet = function(filename){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "z_importwallet" };
  if(filename)
    dataString.params=[filename]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
// TODO : CHECK CHECK
Connect.prototype.z_listaddresses = function(includeWatchonly=false){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "z_listaddresses" };
  dataString.params = [includeWatchonly]
  return rpc.rpc_request(dataString, this.json)
}
// TODO : CHECK CHECK
Connect.prototype.z_listoperationids = function(status){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "z_listoperationids" };
  if(status)
    dataString.params=[status]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
// TODO : CHECK CHECK
Connect.prototype.z_listreceivedbyaddress = function(address,minconf=1){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "z_listreceivedbyaddress" };
  if(address)
    dataString.params=[address,minconf]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

// TODO : CHECK CHECK
Connect.prototype.z_listunspent = function(minconf=1,maxconf=9999999,includeWatchonly=false,addresses,address){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "z_listunspent" };
  if(addresses && address)
    dataString.params=[minconf,maxconf,includeWatchonly,addresses,address]
  else if (addresses)
    dataString.params=[minconf,maxconf,includeWatchonly,addresses]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

// TODO : CHECK CHECK
Connect.prototype.z_sendmany = function(fromaddress,addressesamounts,minconf=1,fee=0.0001){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "z_sendmany" };
  if(fromaddress && addressesamounts)
    dataString.params=[fromaddress,addressesamounts,minconf,fee]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
// TODO : CHECK CHECK
Connect.prototype.z_shieldcoinbase = function(fromaddress,tozaddress,fee=0.0001,limit=50){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "z_shieldcoinbase" };
  if(fromaddress && tozaddress)
    dataString.params=[fromaddress,tozaddress,fee,limit]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}
// TODO : CHECK CHECK
Connect.prototype.zcbenchmark = function(benchmarktype,samplecount){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "zcbenchmark" };
  if(benchmarktype && samplecount)
    dataString.params=[benchmarktype,samplecount]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

// TODO : CHECK CHECK
Connect.prototype.zcsamplejoinsplit = function(){/*

  :argument

  :response

*/
  let dataString = {"jsonrpc": "1.0", "id":"curltest", "method": "zcsamplejoinsplit" };
  dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}


module.exports.Connect = Connect

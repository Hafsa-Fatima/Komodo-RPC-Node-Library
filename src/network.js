let komodo = require('../komodo')
let rpc = require('../rpc_util')

let Connect = komodo.Connect

Connect.prototype.addnode = function(node,command){
  /*
  The addnode method attempts to add or remove a node from
  the addnode list, or to make a single attempt to connect to a node.

  Arguments:
  "node" 	(string, required) 	the node (see getpeerinfo for nodes)
  "command" 	(string, required) 	'add' to add a node to the list, 'remove' to remove a node from the list, 'onetry' to try a connection to the node once

  Response:
  (none)

  Examples:
  conn.addnode("10.236.11.20:9031","add")

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "addnode";
  if(node && command)
    dataString.params = [node,command]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.clearbanned = function(){
  /*
  The clearbanned method clears all banned IPs.

  Arguments  :
  (none)

  Response  :
  (none)

  Examples:

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "clearbanned";
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.disconnectnode = function(node){
  /*
  The disconnectnode method instructs the daemon to
  immediately disconnect from the specified node.

  Use getpeerinfo to determine the result.

  Arguments  :
  "node" 	(string, required) 	the node's address (see getpeerinfo for nodes)

  Response  :
  (none)

  Examples:
   conn.disconnectnode("10.236.13.26:9031")

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "disconnectnode";
  if(node)
    dataString.params = [node]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.getaddednodeinfo = function(dns,node){
  /*
  The getaddednodeinfo method returns information about the
  given added node, or all added nodes.

  If dns is set to false, only a list of added nodes is returned.
   Otherwise, connection information is also provided.

  Nodes added via onetry are not listed here.

  Arguments  :
  dns 	(boolean, required) 	if false, only a list of added nodes will be provided; otherwise, connection information is also provided
  "node" 	(string, optional) 	if provided, the method returns information about this specific node; otherwise, all nodes are returned

  Response  :
  "addednode" 	(string) 	the node ip address
  "connected" 	(boolean) 	if connected
  "addresses" : [ ... ] 	(array of jsons)
  "address" 	(string) 	the server host and port
  "connected" 	(string) 	"connected" accepts two possible values: "inbound" or "outbound"

  Examples:
  conn.getaddednodeinfo(true,"10.0.2.15:9031")
   conn.getaddednodeinfo(true)
    conn.getaddednodeinfo(false)

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getaddednodeinfo";
  if(node)
    dataString.params = [dns,node]
  else if(dns || !dns)
    dataString.params = [dns]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.getconnectioncount = function(){
  /*
  The getconnectioncount method returns the number of connections to other nodes.

  Arguments  :
  (none)

  Response  :
  n 	(numeric) 	the connection count

  Examples:
  conn.getconnectioncount()
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getconnectioncount";
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.getdeprecationinfo = function(){
  /*
  The getdeprecationinfo method returns an object containing current version and deprecation block height.

  This method is applicable only to the KMD main net.

  Arguments  :
  (none)

  Response  :
  "version" 	(numeric) 	the server version
  "subversion" 	(string) 	the server sub-version string (i.e. "/MagicBean:x.y.z[-v]/")
  "deprecationheight" 	(numeric) 	the block height at which this version will deprecate and shut down (unless disabledeprecation
  is set)

  Examples:
  conn.getdeprecationinfo()

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getdeprecationinfo";
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.getnettotals = function(){
  /*
  The getnettotals method returns information about
  network traffic, including bytes in, bytes out, and current time.

  Arguments  :
  (none)

  Response:
  "totalbytesrecv" 	(numeric) 	total bytes received
  "totalbytessent" 	(numeric) 	total bytes sent
  "timemillis" 	(numeric) 	total cpu time

  Examples:
  conn.getnettotals()

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getnettotals";
  if(dataString)
    dataString.params = []
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.getnetworkinfo = function(){
  /*
  The getnetworkinfo method returns an object containing
  various state info regarding p2p networking.

  Arguments:
  (none)

  Response:
  "version" 	(numeric) 	the server version
  "subversion" 	(string) 	the server subversion string (i.e. "/MagicBean:x.y.z[-v]/")
  "protocolversion" 	(numeric) 	the protocol version
  "localservices" 	(string) 	the services we offer to the network
  "timeoffset" 	(numeric) 	the time offset
  "connections" 	(numeric) 	the number of connections
  "networks": [ ... ] 	(array of jsons) 	information per network
  "name" 	(string) 	network (ipv4, ipv6 or onion)
  "limited" 	(boolean) 	whether the network is limited using -onlynet
  "reachable" 	(boolean) 	whether the network is reachable
  "proxy" 	(string) 	(submitted as "host:port") the proxy that is used for this network, or empty if none
  "relayfee" 	(numeric) 	minimum relay fee for non-free transactions in COIN/kB
  "localaddresses": [ ... ] 	(array of jsons) 	list of local addresses
  "address" 	(string) 	network address
  "port" 	(numeric) 	network port
  "score" 	(numeric) 	relative score
  "warnings" 	(string) 	any network warnings (such as alert messages)

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getnetworkinfo";
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.getpeerinfo = function(){
  /*
  getpeerinfo

  The getpeerinfo method returns data about each connected network node as a json array of objects.

  Arguments:
  (none)

  Response:
  "id" 	(numeric) 	peer index
  "addr":, 	(string) 	the ip address and port of the peer ("host:port")
  "addrlocal" 	(string) 	local address ("ip:port")
  "services" 	(string) 	the services offered
  "lastsend" 	(numeric) 	the time in seconds since epoch (Jan 1 1970 GMT) of the last send
  "lastrecv" 	(numeric) 	the time in seconds since epoch (Jan 1 1970 GMT) of the last receive
  "bytessent" 	(numeric) 	the total bytes sent
  "bytesrecv" 	(numeric) 	the total bytes received
  "conntime" 	(numeric) 	the connection time in seconds since epoch (Jan 1 1970 GMT)
  "timeoffset" 	(numeric) 	the time offset in seconds
  "pingtime" 	(numeric) 	ping time
  "pingwait" 	(numeric) 	ping wait
  "version" 	(numeric) 	the peer version, such as 170002
  "subver" 	(string) 	the string version (i.e. "/MagicBean:x.y.z[-v]/")
  "inbound" 	(boolean) 	inbound (true) or outbound (false)
  "startingheight" 	(numeric) 	the starting height (block) of the peer
  "banscore" 	(numeric) 	the ban score
  "synced_headers" 	(numeric) 	the last header we have in common with this peer
  "synced_blocks" 	(numeric) 	the last block we have in common with this peer
  "inflight": [ ... ] 	(array)
  number 	(numeric) 	the block height requested from this peer

  Examples:
  conn.getpeerinfo()

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "getpeerinfo";
  if(dataString)
    dataString.params = []
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.listbanned = function(){
  /*

  The listbanned method lists all banned IP addresses and subnets.

Arguments:
(none)

Response:
"address" 	(string) 	the address/subnet that is banned
"banned_until" 	(numeric) 	the timestamp, at which point the ban will be removed

  Examples:
  conn.listbanned()
  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "listbanned";
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.ping = function(){
  /*
  ping

  The ping method requests that a ping be sent to all other nodes, to measure ping time.

  Results provided in getpeerinfo, pingtime and pingwait fields are decimal seconds.

  The ping command is handled in queue with all other commands, so it measures processing backlog, not just network ping.

  Use getpeerinfo to see ping results.

  Arguments  :
  (none)

  Response  :
  (none)

  Examples:
  conn.ping()

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "ping";
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

Connect.prototype.setban = function(ip,command,bantime=0,absolute){
  /*
  The setban method attempts to add or remove an IP address (and subnet, if indicated) from the banned list.

  Arguments  :
  "ip(/netmask)" 	(string, ip required) 	the IP/subnet (see getpeerinfo for nodes ip) with an optional netmask (default is /32 = single ip)
  "command" 	(string, required) 	use "add" to add an IP/subnet to the list, or "remove" to remove an IP/subnet from the list
  bantime 	(numeric, optional) 	indicates how long (in seconds) the ip is banned (or until when, if [absolute] is set). 0 or empty means the ban is using the default time of 24h, which can also be overwritten using the -bantime runtime parameter.
  absolute 	(boolean, optional) 	if set to true, the bantime must be an absolute timestamp (in seconds) since epoch (Jan 1 1970 GMT)

  Response  :
  (none)

  Use listbanned to view results.
  Examples:
  conn.setban("10.0.2.15","add",0)

  */
  let dataString = {"jsonrpc": "1.0", "id":"curltest"};
  dataString.method = "setban";
  if(ip && command )
    dataString.params = [ip,command,bantime,absolute]
  else
    dataString.params = []
  return rpc.rpc_request(dataString, this.json)
}

module.exports.Connect = Connect

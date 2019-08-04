![Komodo_Logo](komodologo.png?raw=true)
# Node JS Library
#### RPC API-Library for Komodo-based asset chains, for Node JS Developers
===============================================
## Description:
- ##### Komodo-RPC library helps you integrate your Node JS Apps with Komodo asset-chains without having to setup/implement required RPC functions. Install this Python library and call Komodo-API RPCs as easily as calling a local function. Komodo-RPC library acts as a wrapper between your Node JS app and the Komodo-daemon running on a server.
#####
### Installation:
#### Install 'npm-komodorpc-library' npm Module:
  - > ` npm install npm-komodorpc-library `


## Usage:
- Create object for Connect class using `rpc_user`, `rpc_password`, `rpc_ipaddress`, `rpc_port` parameters from YOUR_SMARTCHAIN_name.conf file
- Use the above object to call any method
- Response is a pending Promise return
- Use Async/Await vs Promise to capture the response

##### Example
Using Async function and await keyword :
```javascript
const komodo = require('npm-komodorpc-library');

const conn = new komodo.Connect(rpc_user='user568251219',
rpc_password='pass766db41922bac0bbe3c1909a41e3dfe0291e2c1b6c76f7172c3e9bdf46f64d16f9',
rpc_ipaddress='http://127.0.0.1',
rpc_port='12450');

async function mainfunc(){
    let p = await conn.getwalletinfo()
    console.log(p)
}

mainfunc()
```
Using promise :
```javascript
const komodo = require('npm-komodorpc-library');

const conn = new komodo.Connect(rpc_user='user568251219',
rpc_password='pass766db41922bac0bbe3c1909a41e3dfe0291e2c1b6c76f7172c3e9bdf46f64d16f9',
rpc_ipaddress='http://127.0.0.1',
rpc_port='12450');

let p = conn.getwalletinfo()
p.then((res)=>console.log(res))

```

Create an object of **Komodo Connect** class with following parameters to populate RPC options and authentication parameters.

|    Argument    |                                          Description                                 |
|:--------------:|:------------------------------------------------------------------------------------:|
|  rpc_username  |                              Username for RPC authentication                         |
|  rpc_password  |                              Password for RPC authentication                         |
| node_ipaddress |  IP address of the node where the Komodo-daemon is running; **Default: '127.0.0.1'** |
|    rpc_port    |                 Port number where the Komodo-daemon is listening for RPCs            |


### Documentation:
- ####  Wiki: [Komodo RPC API Library](https://github.com/Hafsa-Fatima/Komodo-RPC-Node-Library/)
- #### [Komodo API Guide](https://developers.komodoplatform.com/basic-docs/smart-chains/smart-chain-api/)
### NPM package listing:
- #### [NPM-komodo-library](https://www.npmjs.com/package/npm-komodorpc-library)

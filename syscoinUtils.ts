import { SyscoinRpcClient, rpcServices } from "@syscoin/syscoin-js";
import { config } from './config-coordinator';

const sysConfig = {
  host: config.rpc.host,
  rpcPort: config.rpc.rpcPort,
  username: config.rpc.username,
  password: config.rpc.password,
  logLevel: config.rpc.logLevel
};
const client = new SyscoinRpcClient(sysConfig);

export const getNewAddress = async (label = undefined, addressType = undefined) => {
  try {
      return await rpcServices(client.callRpc).getNewAddress(label, addressType).call();
  } catch(e) {
    console.log("ERR getNewAddress", JSON.stringify(e.response.data.error));
  }
}

export const createRawTransaction = async (txHeaders, payloadInfo) => {
  try {
    return await rpcServices(client.callRpc).createRawTransaction(txHeaders, payloadInfo).call();
  } catch(e) {
    console.log("ERR createRawTransaction", JSON.stringify(e.response.data.error));
  }
}

export const signRawTransactionWithWallet = async (hex) => {
  try {
    return await rpcServices(client.callRpc).signRawTransactionWithWallet(hex).call();
  } catch(e) {
    console.log("ERR signRawTransactionWithWallet", JSON.stringify(e.response.data.error));
  }
}

export const sendRawTransaction = async (hex) => {
  try {
    return await rpcServices(client.callRpc).sendRawTransaction(hex).call();
  } catch(e) {
    console.log("ERR sendRawTransaction", JSON.stringify(e.response.data.error));
  }
}

export const sendMany = async (amounts) => {
  try {
    return await rpcServices(client.callRpc).sendMany('', amounts).call();
  } catch(e) {
    console.log("ERR sendMany", JSON.stringify(e.response.data.error));
  }
}

export const listAddressGroupings = async () => {
  try {
    return await rpcServices(client.callRpc).listAddressGroupings().call();
  } catch(e) {
    console.log("ERR listAddressGroupings", JSON.stringify(e.response.data.error));
  }
}

export const listUnspent = async () => {
  try {
    return await rpcServices(client.callRpc).listUnspent().call();
  } catch(e) {
    console.log("ERR listUnspent", JSON.stringify(e.response.data.error));
  }
}

export const getNewAddressBatch = (label = undefined, addressType = undefined) => {
  try {
    return rpcServices(client.callRpc).getNewAddress(label, addressType);
  } catch(e) {
    console.log("ERR getNewAddressBatch", JSON.stringify(e.response.data.error));
  }
}

export const getBlock = async (blockhash) => {
  try {
    return await rpcServices(client.callRpc).getBlock(blockhash).call();
  } catch(e) {
    console.log("ERR getBlock", JSON.stringify(e.response.data.error));
  }
}

export const batchRpc = async (rpcArr) => {
  try {
    return await client.batch(rpcArr);
  } catch(e) {
    console.log("ERR batch", JSON.stringify(e.response.data.error));
  }
};

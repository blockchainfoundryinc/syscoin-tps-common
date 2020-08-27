import * as syscoinUtils from './syscoinUtils';

export const sleep = async(ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const getInputsForTx = async (receiverArr) => {
  let outputTotalSum = 0;
  let requiredUtxos: any[] = [];
  Object.keys(receiverArr).forEach(key => {
    outputTotalSum += receiverArr[key];
  });

  console.log('Total send sum:', outputTotalSum);

  // find utxos that can fund these outputs
  let utxos = await syscoinUtils.listUnspent();
  utxos = utxos.sort((a, b) => (a.amount > b.amount) ? -1 : 1);

  let utxoTotal = 0;
  // console.log('Utxos', utxos);
  for (let i = 0; i < utxos.length; i++) {
    if (utxoTotal < outputTotalSum) {
      requiredUtxos.push(utxos[i]);
      utxoTotal += utxos[i].amount;
      break;
    }
  }

  console.log("Found inputs, took ", requiredUtxos.length);
  //calc change, just send it all back to one address and subtrace an arbitrary minor fee for now
  let change = utxoTotal - outputTotalSum;
  console.log("Required change:", change);
  return { address: requiredUtxos[0].address, amount: change, utxos: requiredUtxos };
}

export const executeBatch = async (batch) => {
  // console.log('Execute batch:', batch.length);
  return await syscoinUtils.batchRpc(batch);
}

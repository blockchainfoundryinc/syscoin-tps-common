import * as SocketIO from 'socket.io';

export interface TPSClient {
  id: string;
  socket: SocketIO.Socket;
  addressesGenerated: boolean;
  transactionsGenerated: boolean;
  initInputsSent: boolean;
  initInputsConfirmed: boolean;
  initInputsTxId?: string;
}

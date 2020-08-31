import * as SocketIO from 'socket.io';

export interface TPSClient {
  id: string;
  addresses?: string[];
  socket: SocketIO.Socket;
  transactionsGenerated: boolean;
  initComplete?: boolean;
  serialize: () => any;
}

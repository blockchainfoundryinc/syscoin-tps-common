import { config } from './config-coordinator';

export interface SyscoinWebsocketMessage {
  topic: string;
  message: any;
}

export class InitClientMessage {
  static messageType = "initClient";
  constructor(public id: string) {
  }
}

export class InitClientCompleteMessage {
  static messageType = "initClientComplete";
  constructor(public addresses: string[]) {
  }
}

export class StartTestMessage {
  static messageType = "startTest";
  public numTxs: number;
  constructor(public testNum: number, public cycleNum: number, public startTime: number) {
    this.numTxs = config.start_tx * testNum;
  }
}


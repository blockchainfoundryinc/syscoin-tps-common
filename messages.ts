export interface SyscoinWebsocketMessage {
  topic: string;
  message: any;
}

export class GenerateAddressesMessage {
  static messageType = "generateAddresses";
  constructor(public numAddresses = 0) {
  }
}

export class AddressGenerationCompleteMessage {
  static messageType = "addressGenerationComplete";
  constructor(public addresses: string[]) {
  }
}

export class StartTestMessage {
  static messageType = "startTest";
  constructor(public testNum: number, public cycleNum: number, public startTime: number) {
  }
}


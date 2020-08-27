export interface SyscoinWebsocketMessage {
  topic: string;
  message: any;
}

export class GenerateAddressesMessage {
  static messageType = "generateAddresses";

  constructor(public numAddresses = 0) {
  }
}


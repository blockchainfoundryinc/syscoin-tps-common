export interface SyscoinWebsocketMessage {
  topic: string;
  message: any;
}

export interface GenerateAddressesMessage {
  numAddresses: number;
}

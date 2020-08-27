const dotenv = require('dotenv');
dotenv.config({silent: true});

export const config: ClientConfig = {
  sys_tps_coordinator_server: process.env.SYS_TPC_COORDINATOR_SERVER || '',
  ws_port: Number(process.env.WS_PORT) || 9999,
  rpc: {
    host: process.env.RPC_HOST || 'localhost',
    rpcPort: Number(process.env.RPC_PORT) || 8368, // This is the port used in the docker-based integration tests, change at your peril
    username: process.env.RPC_USER || 'u',
    password: process.env.RPC_PASS || 'p',
    logLevel: process.env.LOG_LEVEL || 'error'
  }
};

export interface ClientConfig {
  sys_tps_coordinator_server: string;
  ws_port: number;
  rpc: ClientRPCConfig;
}

export interface ClientRPCConfig {
  host: string;
  rpcPort: number;
  username: string;
  password: string;
  logLevel: string;
}


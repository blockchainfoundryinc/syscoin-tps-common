const dotenv = require('dotenv');
dotenv.config({silent: true});

export const config: CoordinatorConfig = {
  syscoin_ws_server: process.env.SYS_WS_SERVER || 'https://syscoin-websocket.blockchainfoundry.co',
  ws_port: Number(process.env.WS_PORT) || 9000,
  rpc: {
    host: process.env.RPC_HOST || 'localhost',
    rpcPort: Number(process.env.RPC_PORT) || 8368, // This is the port used in the docker-based integration tests, change at your peril
    username: process.env.RPC_USER || 'u',
    password: process.env.RPC_PASS || 'p',
    logLevel: process.env.LOG_LEVEL || 'error'
  },
  num_clients: Number(process.env.NUM_CLIENTS) || 3,
  cycle_time: Number(process.env.CYCLE_TIME) || 180, /* default 3min */
  cycles_per_test: Number(process.env.CYCLES_PER_TEST) || 2,
  start_tx: Number(process.env.START_TX) || 10,
  growth_rate: <'linear' | 'exp'>(process.env.GROWTH_RATE) || 'linear',
  target_tps: Number(process.env.TARGET_TPS) || 1000,
  use_allocations: Boolean(process.env.USE_ALLOCATIONS) || false,
  start_delay: Number(process.env.START_DELAY) || 10, /* 10s */
  cycle_start_buffer: Number(process.env.CYCLE_START_DELAY) || 10, /* 10s */
  address_batch_size: Number(process.env.ADDRESS_BATCH_SIZE) || 10,
  tx_outputs_batch_size: Number(process.env.TX_OUTPUTS_BATCH_SIZE) || 10,
  use_ssl: Boolean(process.env.USE_SSL) || false,
  mode: process.env.MODE as any || 'create',
  conslidate_tx_fee: Number(process.env.CONSOLIDATE_TX_FEE) || 0.0006,
  create_tx_fee: Number(process.env.CREATE_TX_FEE) || 0.0006,
  utxo_amount: Number(process.env.UTXO_AMOUNT) || 0.001,
  ssl_key: process.env.SSL_KEY || '',
  ssl_cert: process.env.SSL_CERT || ''
};

export interface CoordinatorConfig {
  syscoin_ws_server: string;
  ws_port: number;
  rpc: CoordinatorRPCConfig;
  num_clients: number;
  cycle_time: number;
  cycles_per_test: number;
  start_tx: number;
  growth_rate: 'linear' | 'exp';
  target_tps: number;
  use_allocations: boolean;
  start_delay: number;
  cycle_start_buffer: number;
  use_ssl: boolean;
  address_batch_size: number;
  tx_outputs_batch_size: number;
  mode: 'create' | 'consolidate' | 'status';
  conslidate_tx_fee: number;
  utxo_amount: number;
  create_tx_fee: number;
  ssl_key: string;
  ssl_cert: string;
}

export interface CoordinatorRPCConfig {
  host: string;
  rpcPort: number;
  username: string;
  password: string;
  logLevel: string;
}

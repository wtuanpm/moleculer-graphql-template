require('dotenv').config();

export enum Stage {
  Production = 'production',
  Dev = 'dev',
  Staging = 'staging',
}

export interface ENV {
  stage: Stage;
  serviceName: string;
  logLevel?: string;
  transporter?: string;
  databaseServer?: string;
  databaseName?: string;
  databaseUsername?: string;
  databasePassword?: string;
  root: string;
  nodeId?: string;

  reCAPTCHAKey?: string;
  reCAPTCHASecretKey?: string;
}

const cwd = process.cwd();
const root = __dirname.replace(`${cwd}`, '.');

const env: ENV = {
  stage: process.env.STAGE ? (process.env.STAGE as Stage) : Stage.Dev,
  serviceName: process.env.npm_package_name,
  root,
  nodeId: process.env.NODE_ID,
  logLevel: process.env.LOG_LEVEL,
  transporter: process.env.TRANSPORTER,
  databaseServer: process.env.DATABASE_SERVER,
  databaseName: process.env.DATABASE_NAME,
  databaseUsername: process.env.DATABASE_USERNAME,
  databasePassword: process.env.DATABASE_PASSWORD,

  reCAPTCHAKey: process.env.RE_CAPTCHA_KEY,
  reCAPTCHASecretKey: process.env.RE_CAPTCHA_SECRET_KEY,
};

export default env;

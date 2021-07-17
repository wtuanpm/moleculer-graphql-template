import { Connection, createConnection } from 'typeorm';
import env from '@/env';

export const connect = async (): Promise<Connection> => {
  const connection = await createConnection({
    type: 'mysql',
    host: process.env.DATABASE_SERVER,
    database: process.env.DATABASE_NAME,
    port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT) : 3306,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    logging: process.env.STAGE !== 'production',
    entities: [`${env.root}/database/entities/*`],
  });

  return connection;
};

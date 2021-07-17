import { importSchema } from 'graphql-import';
import env from '@/env';

let schema = '';

export const init = async () => {
  const src = env.root;
  console.log(`${src}/graphql/schema/schema.graphql`);
  schema = await importSchema(`${src}/graphql/schema/schema.graphql`);
};

export const getSchema = () => {
  return schema;
};

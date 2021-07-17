import { ServiceBroker } from 'moleculer';
import hello from './hello';
import { getSchema } from '@graphql/schema';
import fs from 'fs';
import env from '@/env';

const schema = getSchema();

const loadSchemaService = {
  name: `${process.env.npm_package_name}-cluster`,
  settings: {
    upperCase: true,
    graphql: {
      typeDefs: schema,
    },
  },
  events: {
    'graphql.schema.updated'({ schema }) {
      if (env.root.endsWith('src')) {
        fs.writeFileSync('merged-schema.gql', schema, 'utf8');
        console.log('GRAPHQL SCHEMA MERGED');
      }
    },
  },
};

export const loadServices = (b: ServiceBroker) => {
  b.createService(loadSchemaService);
  b.createService(hello);
};

import * as mutations from './hello-mutations';
import * as queries from './hello-queries';
import * as resolvers from './hello-resolvers';
import { listenActivityLog, listenSystemLog } from './hello-listeners';
import { GraphqlServiceSchema } from '@graphql/types/graphql';
import { EventTypes } from '@graphql/types/generated-graphql-types';
import { lifecycle } from './hello-lifecycle';

const AuthService: GraphqlServiceSchema = {
  name: 'hello',
  settings: {
    upperCase: true,
    graphql: {
      resolvers,
    },
  },

  actions: {
    ...mutations,
    ...queries,
  },

  events: {
    'apollo.server.error'({ message, data }: any) {
      if (process.env.STAGE === 'dev') {
        console.log(message, data);
      }
    },
    [EventTypes.ActivityLog]: listenActivityLog,
    [EventTypes.SystemLog]: listenSystemLog,
  },

  ...lifecycle,
};

export default AuthService;

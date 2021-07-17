import './alias-modules';
import env, { Stage } from './env';
import '@utils/i18n';
import Moleculer, { ServiceBroker } from 'moleculer';
import { connect } from './database';
import { init as loadSchema } from './graphql/schema';
import { BaseContext } from '@gobysend/goby-definition/dist/service';

let ip = require('ip');

const broker = new ServiceBroker({
  ContextFactory: BaseContext,
  nodeID: (env.nodeId || 'moleculer-unique-id') + '_' + ip.address(),
  logLevel: (env.logLevel as Moleculer.LogLevels) || 'info',
  transporter: env.transporter || 'nats://localhost:4222',
  cacher: {
    type: 'Memory',
  },
});

(async () => {
  await connect();
  await loadSchema();
  require('./services').loadServices(broker);
  await broker.start();
})()
  .then(async () => {
    console.info('Broker started');
    if (env.stage !== Stage.Production) broker.repl();
  })
  .catch(error => {
    console.error(error);
  });

export default broker;

import { SomeoneSayHelloEventData } from '@gobysend/hello-exposure';
import { EventTypes } from '@graphql/types/generated-graphql-types';
import { ServiceBroker } from 'moleculer';

export const someoneSayHelloPublisher = (broker: ServiceBroker, data: SomeoneSayHelloEventData) => {
  broker.emit(EventTypes.ActivityLog, data);
};

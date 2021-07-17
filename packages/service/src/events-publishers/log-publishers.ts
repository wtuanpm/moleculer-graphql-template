import { ServiceBroker } from 'moleculer';
import { EventTypes } from '@graphql/types/generated-graphql-types';

export const activityLogPublisher = (broker: ServiceBroker, data: any) => {
  broker.emit(EventTypes.ActivityLog, data);
};

export const systemLogPublisher = (broker: ServiceBroker, data: any) => {
  broker.emit(EventTypes.SystemLog, data);
};

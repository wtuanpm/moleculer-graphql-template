import { GraphqlActionSchema } from '@graphql/types/graphql';
import { activityLogPublisher } from '@events-publishers/log-publishers';

export const greeter: GraphqlActionSchema<{}, string> = {
  graphql: {
    query: 'greeter',
  },
  handler: async ctx => {
    activityLogPublisher(ctx.broker, {
      type: 'greeter',
    });
    return ctx.__('Hello.Messages.Info.SayHello', { firstName: 'Goby' });
  },
};

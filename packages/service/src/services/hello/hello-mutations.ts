import { sayHelloByName } from '@business/hello';
import { FIRST_NAME_MAX_LENGTH, FIRST_NAME_MIN_LENGTH } from '@constants/validate';
import { someoneSayHelloPublisher } from '@events-publishers/hello-publishers';
import { activityLogPublisher } from '@events-publishers/log-publishers';
import { MutationHelloArgs, MutationHelloResponse, HelloSampleCodes } from '@graphql/types/generated-graphql-types';
import { GraphqlActionSchema } from '@graphql/types/graphql';

export const hello: GraphqlActionSchema<MutationHelloArgs, MutationHelloResponse> = {
  graphql: {
    mutation: 'hello',
  },
  params: {
    name: { type: 'string', min: FIRST_NAME_MIN_LENGTH, max: FIRST_NAME_MAX_LENGTH },
  },
  handler: async ctx => {
    activityLogPublisher(ctx.broker, {
      type: 'say hello',
    });

    const name = await sayHelloByName(ctx.params.name);

    // create a event
    someoneSayHelloPublisher(ctx.broker, {
      person: {
        name,
      },
    });

    return {
      person: {
        name,
      },
      type: HelloSampleCodes.HELLO,
    };
  },
};

import { EventSchema } from '@gobysend/goby-definition/dist/service';
import { SomeoneSayHelloEventSchema } from '@gobysend/hello-exposure';

export const listenActivityLog: EventSchema = {
  handler: async ctx => {
    console.log('listenActivityLog', ctx.params);
  },
};

export const listenSystemLog: EventSchema = {
  handler: async ctx => {
    console.log('listenSystemLog', ctx.params);
  },
};

export const listenSomeoneSayHello: SomeoneSayHelloEventSchema = {
  handler: async ctx => {
    console.log('listenSomeoneSayHello', ctx.params.person.name);
  },
};

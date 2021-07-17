import { Person } from './graphql/generated-graphql-types';
import { Context } from 'moleculer';
import { ContextMeta, EventSchema } from '@gobysend/goby-definition/dist/service';
/**------------------------------------------------------------------------------------------
 * When say hello to someone this event is trigged with person information
 *------------------------------------------------------------------------------------------*/

/**
 * Data of someone say hello event
 */
export interface SomeoneSayHelloEventData {
  // Omit some property not need
  person: Omit<Person, 'age'>;
}

export interface SomeoneSayHelloEventSchema extends EventSchema<SomeoneSayHelloEventData> {
  handler(context: Context<SomeoneSayHelloEventData, ContextMeta>): void;
}

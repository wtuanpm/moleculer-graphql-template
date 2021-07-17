import { ServiceSchema, ActionSchema, ServiceSettingSchema } from 'moleculer';
import { ContextMeta, BaseContext } from '@gobysend/goby-definition/dist/service';
import { QueryResolvers, MutationResolvers } from './generated-graphql-types';

export interface GraphqlActionSchema<TParams = {}, TResult = {}> extends ActionSchema {
  graphql: {
    query?: keyof QueryResolvers;
    mutation?: keyof MutationResolvers;
  };
  handler(context: BaseContext<TParams, ContextMeta>): Promise<TResult>;
}

export interface GraphqlServiceSettingSchema extends ServiceSettingSchema {
  graphql: {
    typeDefs?: string;
    resolvers?: object;
  };
}

export interface GraphqlServiceSchema extends ServiceSchema {
  settings: GraphqlServiceSettingSchema;
}

import { RoleCodes } from '@gobysend/goby-definition/dist/enums';
import { HelloSampleCodes } from '@gobysend/hello-exposure/dist/exposure/src/enums';
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};


export enum ErrorCodes {
  InvalidPassword = 'INVALID_PASSWORD',
  UserNotFound = 'USER_NOT_FOUND',
  RefreshTokenInvalid = 'REFRESH_TOKEN_INVALID',
  PhoneNumberAlreadyExists = 'PHONE_NUMBER_ALREADY_EXISTS',
  EmailAlreadyExists = 'EMAIL_ALREADY_EXISTS',
  BadUserInput = 'BAD_USER_INPUT',
  Forbidden = 'FORBIDDEN',
  CaptchaInvalid = 'CAPTCHA_INVALID'
}

export enum EventTypes {
  ActivityLog = 'ACTIVITY_LOG',
  SystemLog = 'SYSTEM_LOG',
  SomeOneSayHello = 'SOME_ONE_SAY_HELLO'
}

export { HelloSampleCodes };

export type Mutation = {
   __typename?: 'Mutation';
  hello?: Maybe<Person>;
};


export type MutationHelloArgs = {
  name?: Maybe<Scalars['String']>;
};

export type MutationHelloResponse = {
   __typename?: 'MutationHelloResponse';
  person?: Maybe<Person>;
  type?: Maybe<HelloSampleCodes>;
};

export type Paginate = {
   __typename?: 'Paginate';
  current?: Maybe<Scalars['Int']>;
  pageSize: Scalars['Int'];
  totalPage?: Maybe<Scalars['Int']>;
};

export type Person = {
   __typename?: 'Person';
  age?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Query = {
   __typename?: 'Query';
  greeter?: Maybe<Scalars['String']>;
};

export { RoleCodes };




export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Mutation: ResolverTypeWrapper<{}>,
  Person: ResolverTypeWrapper<Person>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Upload: ResolverTypeWrapper<Scalars['Upload']>,
  ErrorCodes: ErrorCodes,
  EventTypes: EventTypes,
  Paginate: ResolverTypeWrapper<Paginate>,
  RoleCodes: RoleCodes,
  HelloSampleCodes: HelloSampleCodes,
  MutationHelloResponse: ResolverTypeWrapper<MutationHelloResponse>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  String: Scalars['String'],
  Mutation: {},
  Person: Person,
  Int: Scalars['Int'],
  Boolean: Scalars['Boolean'],
  Upload: Scalars['Upload'],
  ErrorCodes: ErrorCodes,
  EventTypes: EventTypes,
  Paginate: Paginate,
  RoleCodes: RoleCodes,
  HelloSampleCodes: HelloSampleCodes,
  MutationHelloResponse: MutationHelloResponse,
};

export type AuthDirectiveArgs = {   roles?: Maybe<Array<Maybe<RoleCodes>>>;
  allowWithoutAccount?: Maybe<Scalars['Boolean']>;
  allowWithoutVerify?: Maybe<Scalars['Boolean']>; };

export type AuthDirectiveResolver<Result, Parent, ContextType = any, Args = AuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  hello?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<MutationHelloArgs, never>>,
};

export type MutationHelloResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['MutationHelloResponse'] = ResolversParentTypes['MutationHelloResponse']> = {
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType>,
  type?: Resolver<Maybe<ResolversTypes['HelloSampleCodes']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type PaginateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Paginate'] = ResolversParentTypes['Paginate']> = {
  current?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  pageSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  totalPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type PersonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person']> = {
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  greeter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload'
}

export type Resolvers<ContextType = any> = {
  Mutation?: MutationResolvers<ContextType>,
  MutationHelloResponse?: MutationHelloResponseResolvers<ContextType>,
  Paginate?: PaginateResolvers<ContextType>,
  Person?: PersonResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Upload?: GraphQLScalarType,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  auth?: AuthDirectiveResolver<any, any, ContextType>,
};


/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;
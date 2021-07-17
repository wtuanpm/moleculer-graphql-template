import { RoleCodes } from '@gobysend/goby-definition/dist/enums';
import { HelloSampleCodes } from '../enums';
export type Maybe<T> = T | null;
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


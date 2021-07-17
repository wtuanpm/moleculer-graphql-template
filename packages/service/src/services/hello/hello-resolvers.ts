import { $enum } from 'ts-enum-util';
import { HelloSampleCodes as EnumHelloSampleCodes } from '@gobysend/hello-exposure';
export const Person = {
  // payload: {
  //   action: `account.loaders`,
  //   dataLoader: true,
  //   rootParams: {
  //     uid: 'id',
  //   },
  // },
};

// resolver enum type RoleCodes in graphql
const wrappedHelloSampleCodes = {};
for (const [key, value] of $enum(EnumHelloSampleCodes)) {
  wrappedHelloSampleCodes[key] = value;
}
export const HelloSampleCodes = wrappedHelloSampleCodes;

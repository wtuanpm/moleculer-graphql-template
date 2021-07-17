/* eslint-disable no-prototype-builtins */
const { modules } = require('./dist/alias-modules');

const moduleNameMapper = {};
for (const module in modules) {
  if (modules.hasOwnProperty(module)) {
    const localPath = modules[module];
    moduleNameMapper[`${module}/(.*)`] = `<rootDir>/dist/${localPath}/$1`;
  }
}

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  moduleNameMapper,
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
};

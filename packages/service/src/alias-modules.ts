import env from './env';
import moduleAlias from 'module-alias';
import path from 'path';

const cwd = process.cwd();
const root = env.root;

export const modules = {
  '@': '',
  '@business': 'business',
  '@constants': 'constants',
  '@events-publishers': 'events-publishers',
  '@graphql': 'graphql',
  '@services': 'services',
  '@utils': 'utils',
};

const alias = {};
for (const module in modules) {
  if (modules.hasOwnProperty(module)) {
    const localPath = modules[module];
    alias[module] = path.join(cwd, root, localPath);
  }
}

moduleAlias.addAliases(alias);

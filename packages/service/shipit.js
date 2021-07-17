module.exports = shipit => {
  require('shipit-deploy')(shipit);
  const argv = require('yargs').argv;

  const yarn = '/root/.nvm/versions/node/v12.16.1/bin/yarn';
  const pm2 = '/root/.nvm/versions/node/v12.16.1/bin/pm2';

  shipit.initConfig({
    default: {
      deployTo: '/home/deployments/auth',
      repositoryUrl: 'git@bitbucket.org:trucdev/go-auth.git',
      ignores: ['.git', 'node_modules'],
      keepReleases: 2,
      keepWorkspace: true,
      shallowClone: true,
      branch: 'master',
    },
    staging: {
      servers: [
        {
          host: '128.199.184.210',
          user: 'root',
        },
      ],
    },
  });

  shipit.blTask('deploy:init', async () => {
    if (argv.v) shipit.config.branch = argv.v;
  });

  shipit.blTask('deploy:install', () => {
    return shipit.remote(`cd ${shipit.currentPath} && ${yarn} install`);
  });

  shipit.blTask('deploy:build', () => {
    return shipit.remote(`cd ${shipit.currentPath} && ${yarn} build`);
  });

  shipit.blTask('deploy:copy:env', () => {
    return shipit.remote(`cd ${shipit.currentPath} && cp ./.env.${shipit.environment} ./.env`);
  });

  shipit.blTask('deploy:serve', async () => {
    return shipit.remote(
      `cd ${shipit.currentPath} && ${pm2} reload goby-auth || ${pm2} start dist/index.js --name goby-auth`,
    );
  });

  const tasks = [
    'deploy:init',
    'deploy:fetch',
    'deploy:update',
    'deploy:publish',
    'deploy:clean',
    'deploy:finish',

    'deploy:install',
    'deploy:build',
    'deploy:copy:env',
    'deploy:serve',
  ];

  shipit.task('deploy', tasks);

  shipit.task('rollback', ['rollback:init', 'deploy:publish', 'deploy:clean', 'deploy:finish', 'deploy:serve']);
};

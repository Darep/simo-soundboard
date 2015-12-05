/* jshint node: true */
var Secrets = require('./secrets');

module.exports = function(deployTarget) {
  var ENV = {
    build: {}
  };

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';

    ENV.rsync = {
      type: "rsync",
      dest: Secrets.production.dest,
      host: Secrets.production.host,
      args: ["--verbose", "-ztl"]
    };
  }

  return ENV;
};

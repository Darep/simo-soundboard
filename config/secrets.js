var execSync = require('child_process').execSync;

var keyDir = '~/.ejson';
var ejsonFile = 'config/secrets.ejson';
var cmd = ['ejson', '--keydir', keyDir, 'decrypt', ejsonFile].join(' ');

var result = execSync(cmd);
var secretsJson = JSON.parse(result.toString());

module.exports = secretsJson;

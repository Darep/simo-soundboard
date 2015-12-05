/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    storeConfigInMeta: false
  });

  [
    'dadada_dadda_da',
    'hyva_darra',
    'maisemakossua_1',
    'maisemakossua_2',
    'mitas_perjantaina',
    'taskulammin_kossu',
    'vammalasta_kossun'
  ].forEach(name => {
    app.import(`vendor/audio/${name}.mp4`, { destDir: 'audio' });
  });

  app.import({
    development: 'bower_components/soundmanager/swf/soundmanager2_debug.swf',
    production: 'bower_components/soundmanager/swf/soundmanager2.swf'
  });

  app.import({
    development: 'bower_components/soundmanager/script/soundmanager2.js',
    production: 'bower_components/soundmanager/script/soundmanager2-nodebug-jsmin.js'
  });

  app.import('bower_components/ember-cli-soundmanager-shim/soundmanager2-shim.js', {
    exports: {
      soundManager: ['default']
    }
  });

  return app.toTree();
};

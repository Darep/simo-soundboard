import Ember from 'ember';
import soundManager from 'soundManager';
import config from '../config/environment';

export default Ember.Component.extend({
  tagName: 'button-container',
  classNameBindings: ['isLoading', 'isPlaying'],

  isLoading: Ember.computed.equal('state', 'loading'),
  isPlaying: Ember.computed.equal('state', 'playing'),

  getOrCreateSound() {
    var _this = this;
    var sound = this.get('sound');

    if (!sound) {
      var audio = this.get('audio');
      var url = config.baseURL + 'audio/' + audio.filename;

      this.set('state', 'loading');

      sound = soundManager.createSound({
        url: url,

        onload: function () {
          _this.set('state', 'playing');
        },

        onfinish: function () {
          _this.set('state', 'done');
        }
      });

      this.set('sound', sound);
    } else {
      this.set('state', 'playing');
    }

    return sound;
  },

  actions: {
    play() {
      if (this.get('isLoading') || this.get('isPlaying')) {
        return;
      }

      this.getOrCreateSound().play();
    }
  }
});

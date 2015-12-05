import Ember from 'ember';
import soundManager from 'soundManager';

export default Ember.Component.extend({
  tagName: 'button-container',
  classNameBindings: ['isPlaying'],

  actions: {
    play() {
      var _this = this;
      var audio = this.get('audio');
      var url = '/audio/' + audio.filename;

      if (this.get('isPlaying')) {
        return;
      }

      this.set('isPlaying', true);

      soundManager.createSound({
        url: url,
        autoPlay: true,

        onfinish: function () {
          this.destruct();
          _this.set('isPlaying', false);
        }
      });
    }
  }
});

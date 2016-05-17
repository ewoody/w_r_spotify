import Ember from 'ember';

export default Ember.Service.extend({

  audio: null,
  track: null,

  isPlaying: false,

  init() {
    let audio = new Audio();
    audio.autoplay = true;

    audio.onended = () => this.set('isPlaying', false);
    audio.onpause = () => this.set('isPlaying', false);
    audio.onplaying = () => this.set('isPlaying', true);

    this.set('audio', audio);
  },

  playTrack(track) {
    this.set('track', track);
    this.set('audio.src', track.get('previewUrl'));
  },

  play() {
    this.get('audio').play();
  },

  pause() {
    this.get('audio').pause();
  }
});
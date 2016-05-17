import Ember from 'ember';

export default Ember.Component.extend({
  trackPlayer: Ember.inject.service(),
  displayAlbum: true,
  playing:  Ember.computed.alias('trackPlayer.isPlaying'),
  currentTrackId: null,

  actions : {
    toggle(track) {
      this.get('trackPlayer').playTrack(track);
      if(this.get('trackPlayer').isPlaying){
        if(this.get('currentTrackId') === track.id){
          this.get('trackPlayer').pause();
          this.set('currentTrackId', null);
        }
        else{
          this.set('currentTrackId', track.id);
        }

      }
      else{
        this.get('trackPlayer').play();
        this.set('currentTrackId', track.id);
      }
    }
  }
});

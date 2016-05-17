import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  trackPlayer: Ember.inject.service(),

  model({ playlist_id, user_id}) {
    return this.store.findRecord('playlist', playlist_id, { adapterOptions: { user_id }});
  },

  actions : {
    toggle(track) {
      this.get('trackPlayer').playTrack(track);
      if(this.get('trackPlayer').isPlaying){
        this.get('trackPlayer').pause();
      }
      else{
        this.get('trackPlayer').play();
      }
    }
  }

});

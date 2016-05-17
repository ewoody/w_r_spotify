import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  token: Ember.inject.service(),
  host: 'https://api.spotify.com',
  namespace: 'v1',
  headers: Ember.computed(function() {
    return {
      'Authorization': `Bearer ${this.get('token').retreive()}`
    };
  }).volatile()
});
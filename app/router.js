import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.authenticatedRoute('player', {path: '/'}, function() {
    this.route('playlist', { path: 'playlist/:user_id/:playlist_id/', resetNamespace: true });
    this.route('album', { path: 'album/:album_id/', resetNamespace: true });
  });
  this.route('login');
});

export default Router;

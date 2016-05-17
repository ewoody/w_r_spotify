import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    signIn: function(){
      var route = this,
        controller = this.controllerFor('login');
      // The provider name is passed to `open`
      this.get('session').open('application').then(function(){
        route.transitionTo('player');
      }, function(error){
        controller.set('error', 'Could not sign you in: '+error.message);
      });
    }
  },

  beforeModel() {
    if (this.get('session.isAuthenticated')) {
      this.transitionTo('player');
    }
  }
});
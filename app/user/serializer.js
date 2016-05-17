import JSONSerializer from 'ember-data/serializers/json';

export default JSONSerializer.extend({
  normalize(typeClass, hash) {
    if (hash.hasOwnProperty('images')) {
      hash.avatar = hash.images[0] ? hash.images[0].url : '';
    }
    hash.links = {
      playlists: 'playlists'
    };
    return this._super.apply(this, arguments);
  }
});

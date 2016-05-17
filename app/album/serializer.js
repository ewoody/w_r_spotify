import Ember from 'ember';
import JSONSerializer from 'ember-data/serializers/json';
import EmbeddedRecordsMixin from 'ember-data/serializers/embedded-records-mixin';

export default JSONSerializer.extend(EmbeddedRecordsMixin, {
  attrs: {
    tracks: { embedded: 'always' }
  },
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    return this._super(store, primaryModelClass, payload.items, id, requestType);
  },

  normalize(modelName, payload) {
    if (Ember.get(payload, "tracks.items")) {
      payload.tracks = payload.tracks.items;
    } else {
      delete payload.tracks;
    }

    return this._super(modelName, payload);
  }
});

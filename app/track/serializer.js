import Ember from 'ember';
import JSONSerializer from 'ember-data/serializers/json';
import EmbeddedRecordsMixin from 'ember-data/serializers/embedded-records-mixin';

export default JSONSerializer.extend(EmbeddedRecordsMixin, {
  attrs: {
    artists: { embedded: 'always' },
    album: { embedded: 'always' }
  },
  keyForAttribute: Ember.String.underscore,
  normalize(modelClass, resourceHash, prop) {
    return this._super(modelClass, resourceHash.track || resourceHash, prop);
  }
});

import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import { hasMany } from 'ember-data/relationships';


export default Model.extend({
  name: attr('string'),
  user: belongsTo('user', { inverse: 'playlists' }),
  owner: belongsTo('user', { inverse: null }),
  tracks: hasMany()
});

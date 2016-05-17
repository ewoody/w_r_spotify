import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import { hasMany } from 'ember-data/relationships';

/**
 * search sample  -
 * https://gist.github.com/wecc/408e0b985c392de201ddc22233afeffe
 */
export default Model.extend({
  name: attr('string'),
  previewUrl: attr('string'),
  artists: hasMany(),
  album: belongsTo()
});

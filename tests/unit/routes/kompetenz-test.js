import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | kompetenz', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:kompetenz');
    assert.ok(route);
  });
});

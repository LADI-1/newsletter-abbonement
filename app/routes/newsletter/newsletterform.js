import Ember from 'ember';

export default Ember.Route.extend({
    controllerName: 'newsletter',
    model() {
        return this.modelFor('newsletter');
    }
});
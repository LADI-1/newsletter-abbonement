import Ember from 'ember';
import abbonent from '../models/abbonent';

export default Ember.Controller.extend({
  actions: {
    submitForm() {
      this.transitionToRoute('newsletter.aboabschluss');
    }
  }
});
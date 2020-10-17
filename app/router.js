import EmberRouter from '@ember/routing/router';
import config from 'newsletter-abbonement/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('relevanz');
  this.route('kompetenz');
  this.route('mission');
  this.route('fachbeitraege');
  this.route('newsletter', function() {
    this.route('newsletterform');
    this.route('aboabschluss');
  });
  this.route('kontakt');
  this.route('privacy');
});

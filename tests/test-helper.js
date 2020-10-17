import Application from 'newsletter-abbonement/app';
import config from 'newsletter-abbonement/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();

import DS from 'ember-data';



export default DS.Model.extend({
    email: DS.attr('string'),
    vorname: DS.attr('string'),
    nachname: DS.attr('string'),
    geschlecht: DS.attr('string'),
    privacy: DS.attr('string'),
});  
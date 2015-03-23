App = Em.Application.create({
  rootElement: $('#app')
});

App.ApplicationAdapter = DS.FixtureAdapter;

App.IndexRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('category');
  }
});

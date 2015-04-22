App = Ember.Application.create();

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Router.map(function() {
  this.route('about');
  //this.route('factors');
  this.route('risks');
  //this.route('change-management');
});

/*App.IndexController = Ember.Controller.extend({
});
*/

App.IndexRoute = Ember.Route.extend({
  
});

App.Risk = DS.Model.extend({
	text: DS.attr('string'),
	weight: DS.attr('number')
});

App.RisksRoute = Ember.Route.extend({
	model: function() {
		return this.store.findAll('risk');
	}
});

App.RisksController = Ember.ArrayController.extend({
    needsECP: function(){		
		var risks = this.filterBy('isSelected');
		var totalWeight = 0;
		risks.forEach(function(risk) {
			totalWeight += risk.get('weight');
		});
		return totalWeight >= 2;
		//return this.filterBy('isSelected').filterProperty('weight', 2).get('length')
		//return calcECP(this.filterBy('isSelected'));//.get('length')

    }.property('@each.isSelected'),
    hasRisk: function(){		
		var risks = this.filterBy('isSelected');
		var totalWeight = 0;
		risks.forEach(function(risk) {
			totalWeight += risk.get('weight');
		});
		return totalWeight >= 1;
    }.property('@each.isSelected')
	//http://emberjs.com/guides/object-model/computed-properties-and-aggregate-data/
});

App.Risk.FIXTURES = [
	{
		id: 1,
		text: 'Change is made to leveraged code, systems, or data that provide services (directly or indirectly) to multiple clients. Includes such things as web code, SQL code, DCL app code, shared clientside JavaScript (e.g., On-Demand-Analytics code), FeedMe tasks, etc.',
		weight: 1
	},
	{
		id: 2,
		text: 'The nature of what is being changed suggest that there is a fair risk that the change might negatively affect client-visible performance or response time, including impacts to other systems due to contention for database, CPU, network or other production resources.',
		weight: 1
	},
	{
		id: 3,
		text: 'Change cannot be quickly rolled back in a way that guarantees things are returned to their prior state.',
		weight: 1
	},
	{
		id: 4,
		text: 'Change can\'t be effectively tested prior to going to production.',
		weight: 1
	},
	{
		id: 5,
		text: 'Outcome of change will be difficult to assess post-deployment. This includes any change that might reasonably be expected to cause problems which wouldn\'t be readily apparent during the time windows(s) in which the developer will be monitoring that system.',
		weight: 1
	},
	{
		id: 6,
		text: 'An application is being deployed with a new version of any code developed by a different team. This would include new versions of shared in-house (Markit-developed) code and new versions of shared 3rd party code. (New versions of code that have been developed and tested by the same developers directly involved in the production release are not included.)',
		weight: 1
	},
	{
		id: 7,
		text: 'The developer or reviewer feels uncomfortable with the change, the speed at which it is being rolled-out, or any aspect of the deployment plan.',
		weight: 2
	},
	{
		id: 8,
		text: 'Change deployment involves manually changing/copying files, altering registry, executing SQL commands that could change data, or other manual intervention steps against production data or systems.',
		weight: 2
	},
	{
		id: 9,
		text: 'The change is expected to have visible impact to one or more clients, and the change is being made during a high-availability time period for those client(s), or a time during which changes are normally prohibited for those client(s).',
		weight: 2
	}
]

/*App.Factor = DS.Model.extend({
	text: DS.attr('string')
});

App.Factor.FIXTURES = [
	{
		id: 1,
		text: 'Number of clients that could be impacted.'
	},
	{
		id: 2,
		text: 'Changes to highly-leveraged apps, used by multiple clients, or upon which multiple other systems are dependent inherently carry much high risk.'
	},
	{
		id: 3,
		text: 'Changes that are highly dependent upon corresponding changes in other systems are more risky. Wherever possible, a "loose-coupling" approach should be used, such that the changes of one system (e.g., SQL) can be made ahead of, and independent of, the changes to the other system (e.g., an application or site).'
	},
	{
		id: 4,
		text: 'Number of clients that could be impacted.'
	},
	{
		id: 5,
		text: 'Number of clients that could be impacted.'
	},
	{
		id: 6,
		text: 'Number of clients that could be impacted.'
	},
	{
		id: 7,
		text: 'Number of clients that could be impacted.'
	},
	{
		id: 8,
		text: 'Number of clients that could be impacted.'
	},

]
*/
/*App.FactorsRoute = Ember.Route.extend({
	model: function() {
		return this.store.findAll('factor');
	}
});

App.FactorsController = Ember.ArrayController.extend({

});*/
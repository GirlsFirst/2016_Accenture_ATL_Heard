Template.findPenpal.helpers({
	'penpals': function(){
		var pals = [collection.find({gender: meteor.user().gender}).fetch(),
		collection.find({sexuality: meteor.user().sexulity}).fetch(),
		collection.find({mentalDisorder: meteor.user().mentalDisorder}).fetch(),
		collection.find({interests: meteor.user().interests}).fetch()];
		return pals;
		}
});


Template.home.events({
	'click #findPenpal': function(){
		FlowRouter.go('/findPenpal');
	},
    'click #send-button': function(e, t) {
        e.preventDefault();
		var msg = {
			from: Meteor.user()._id,
			to: Meteor.user().penpal,
			sent: new Date(),
			m: $('#message').val()
		};
		
		Messages.insert(msg);
	}
})

Template.home.helpers({
	'message': function(){

		return Messages.find(
			{$or: [{ to: Meteor.user()._id }, {from: Meteor.user()._id}]},
		{sort: {'sent': -1}}
		);
	},

	'bulletin': function(){
		return Messages.find({
			to: "all"
		},
		{$orderby: {Date: 1}}
	).fetch();
}
})


Template.findPenpal.helpers({
	'penpals': function(){
		var pals = [Meteor.users.find({gender: Meteor.user().gender}).fetch(),
			Meteor.users.find({sexuality: Meteor.user().sexulity}).fetch(),
			Meteor.users.find({mentalDisorder: Meteor.user().mentalDisorder}).fetch(),
			Meteor.users.find({interests: Meteor.user().interests}).fetch()];
		console.log(pals);
		console.log("test");
		return pals;
	}
})
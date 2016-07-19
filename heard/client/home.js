Template.home.events({
	'click #findPenpal': function(){
		FlowRouter.go('/findPenpal');
	},
    'click #send-button': function(e, t) {
        e.preventDefault();
		msg = {
			from: Meteor.user()._id,
			to: Meteor.user().penpal,
			sent: new Date(),
			message: $('#message').val()
		};
		
		Messages.insert(msg);
		console.log(Meteor.user());
		console.log(messages.find().fetch());
	}
})

Template.home.helpers({
	'message': function(){
		return Messages.find().fetch();
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
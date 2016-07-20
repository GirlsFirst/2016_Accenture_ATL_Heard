Template.home.events({
	'click #findPenpal': function(){
		FlowRouter.go('/findPenpal');
	},
    'click #send-button': function(e, t) {
        e.preventDefault();
		var msg = {
			from: Meteor.user()._id,
			to: Meteor.user().profile.penpal,
			sent: new Date(),
			m: $('#message').val(),
		};
		
		Messages.insert(msg);
		
		document.getElementById("message").value = "";
	},
	'click #signout': function() {
		Meteor.logout();
		FlowRouter.go('/login');
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
		);
	},
	
	'isSender': function(from){
		return from == Meteor.user()._id;
	}
})


Template.findPenpal.helpers({
	'penpals': function(){
		return Meteor.users.find({$or: [ {gender: Meteor.user().gender},
								{sexuality: Meteor.user().sexulity}, 
								{mentalDisorder: Meteor.user().mentalDisorder},
								{interests: Meteor.user().interests}]});
	}
})
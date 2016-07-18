messages = new Mongo.Collection('messages');

Template.home.events({
    'click #send-button': function(e, t) {
        e.preventDefault();
		msg = {
			from: Meteor.user()._id,
			to: Meteor.user().penpal,
			sent: new Date(),
			message: $('#message').val()
		};
				messages.insert({
			from: "A.A.Ron",
			to: Meteor.user()._id,
			sent: new Date(),
			message: "Hello!"			
		});
		
		messages.insert({
			from: "A.A.Ron",
			to: Meteor.user()._id,
			sent: new Date(),
			message: "Hello?"
		});
		
		messages.insert({
			from: "A.A.Ron",
			to: Meteor.user()._id,
			sent: new Date(),
			message: "hi"
		});
		
		messages.insert(msg);
		console.log(Meteor.user())
		console.log(messages.find().fetch())
	}
})

Template.messenger.helpers({
	'messages': function(){
		return messages.find({to: Meteor.user()._id});
	}
})
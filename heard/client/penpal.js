Template.findpenpal.events({
	'click .connect' : function (){
		var  penpal =this.id;
		Meteor.user().update(this.profile.penpal, {$set: {profile.penpal:penpal}});
	} 
})
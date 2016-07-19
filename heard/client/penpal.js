Template.findPenpal.events({
	'click .connect' : function (e){
		var penpal =$(e.currentTarget).attr("name");
		console.log(penpal);
		Meteor.users.update({_id:Meteor.user()._id},{$set:{'profile.penpal':penpal}});
	} 
})
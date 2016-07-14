Users = Mongo.Collection('users');

if (Meteor.isClient){
	Template.newUser.events({
		'submit form': function(){
			event.preventDefault();
			var month = event.target.month.value;
			var day = event.target.day.value;
			var year = event.target.year.value;
			var gender = event.target.gender.value;
			var genderAlt = event.target.otherGender.value;
			var sexuality = event.target.sexuality.value;
			var sexualityAlt = event.target.otherOrientation.value;
			var mental1 = event.target.mentaldisorder1.value;
			var mental2 = event.target.mentaldisorder2.value;
			var mental3 = event.target.mentaldisorder3.value;
			var interests = event.target.interests.value;
			var password = event.target.password.value;
			var rePassword = event.target.rePassword.value;
			
			Users.insert({
				month: month,
				day: day, 
				year: year, 
				gender: gender,
				genderAlt: genderAlt,
				sexuality: sexuality,
				sexualityAlt: sexualityAlt,
				mental1: mental1,
				mental2: mental2,
				mental3: mental3,
				interests: interests,
				password: password,
				rePassword: rePassword
			});
			console.log(Users.find().fetch());
		}
});
}
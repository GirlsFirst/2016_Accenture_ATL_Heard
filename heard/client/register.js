Template.register.events({
    'click #register-button': function(e, t) {
        e.preventDefault();
        // Retrieve the input field values
        var email = $('#email').val(),
			username = this._id,
            month = $('#month').val(),
			day = $('#day').val(),
			year = $('#year').val(),
			gender = $('#gender').val(),
			genderAlt = $('#otherGender').val(),
			sexuality = $('#sexualOrientation').val(),
			sexualityAtl = $('#otherOrientation').val()
			mentalDisorder = [$('#mental1').val(), 
							  $('#mental2').val(),
							  $('#mental3').val()]
			interests = $('#interests').val(),
            password = $('#password').val(),
            passwordAgain = $('#rePassword').val();
			penpals = [	
					Meteor.users.find({gender: Meteor.user().gender}).fetch(),
					Meteor.users.find({sexuality: Meteor.user().sexulity}).fetch(),
					Meteor.users.find({mentalDisorder: Meteor.user().mentalDisorder}).fetch(),
					Meteor.users.find({interests: Meteor.user().interests}).fetch()
			],
			inbox = [];

        /* Trim Helper
        var trimInput = function(val) {
            return val.replace(/^\s*|\s*$/g, "");
        }
        var email = trimInput(email);*/

        /*Check password is at least 6 chars long
        var isValidPassword = function(pwd, pwd2) {
            if (pwd === pwd2) {
                return true
            } else {
                return swal({
                    title: "Passwords don't match",
                    text: "Please try again",
                    showConfirmButton: true,
                    type: "error"
                });
            }
        }*/

        // If validation passes, supply the appropriate fields to the
        // Meteor.loginWithPassword() function.
        if (true) { 
            Accounts.createUser({
				email: email,
                month : month,
				day : day,
				year : year,
				gender : gender,
				genderAlt : genderAlt,
				sexuality : sexuality,
				sexualityAtl : sexualityAtl,
				mentalDisorder : mentalDisorder,
				interests : interests,
				penpals: penpals,
				inbox: inbox,
				password : password
            }, function(error) {
                if (error) {
                    return swal({
                    title: error.reason,
                    text: "Please try again",
                    showConfirmButton: true,
                    type: "error"
                });
                } else {
                    FlowRouter.go('/');
					console.log(Meteor.user());
                }
            });
        }
		

        return false;
		console.log("hello world")
		
    }
});

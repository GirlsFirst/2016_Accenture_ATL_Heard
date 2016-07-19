Template.login.events({
    'click #login-button': function(e, t) {
		console.log(Meteor.user().penpals);
		e.preventDefault();
        var email = $('#login-email').val(),
            password = $('#login-password').val();

        Meteor.loginWithPassword(email, password, function(error) {
            if (error) {
                return swal({
                    title: "Email or password Incorect",
                    text: "Please try again or create an account",
                    timer: 1700,
                    showConfirmButton: false,
                    type: "error"
                });
            } else {

                FlowRouter.go('/');
            }
        });
        return false;
    },
	'click #to-reg-page': function(){
		FlowRouter.go('/register');
	}
});

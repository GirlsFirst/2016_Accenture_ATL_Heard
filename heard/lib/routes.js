FlowRouter.route('/', {
    name: 'home',
    action: function() {
		if (Meteor.user()) {
			if (!Meteor.user().profile.penpal) {
				BlazeLayout.render("mainLayout", {
					content: "needPenpal"
				});
			}
			else {
				BlazeLayout.render("mainLayout", {
					content: "home"
				});			
			}
		}
		else {
			FlowRouter.go('/login');
		}
    }
});

FlowRouter.route('/login', {
    name: 'login',
    action: function() {
        BlazeLayout.render("mainLayout", {
            content: "login"
        });
    }
});

FlowRouter.route('/register', {
    name: 'register',
    action: function() {
        BlazeLayout.render("mainLayout", {
            content: "register"
        });
    }
});

FlowRouter.route('/findPenpal', {
    name: 'findPenpal',
    action: function() {
		if (Meteor.user().profile.penpal){
			BlazeLayout.render("mainLayout", {
				content: "alreadyPenpal"
			});
		}else {
			BlazeLayout.render("mainLayout", {
				content: "findPenpal"
			});			
		}

    }
});
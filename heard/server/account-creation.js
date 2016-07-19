Accounts.onCreateUser(function(options, user) {
    // Use provided profile in options, or create an empty profile object
    user.profile = options.profile || {};

    // Assigns the first and last names to the newly created user object
    user.profile.month = options.month;
	user.profile.day = options.day;
	user.profile.year = options.year;
	user.profile.gender = options.gender;
	user.profile.genderAlt = options.genderAlt;
	user.profile.sexuality = options.sexuality;
	user.profile.sexualityAlt = options.sexualityAlt;
	user.profile.mentalDisorder = options.mentalDisorder;
	user.profile.interests = options.insterests;
	user.profile.penpals = options.penpals;

    //Basic Role Set Up
    user.roles = ["User"];

    // Returns the user object
    return user;
});

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  if (Meteor.isClient){
	Posts =  new Mongo.Collection();
	Meteor.subscribe('all posts');
	var mysqlStringConnection=  "mysql://root:EG04202000@127.0.0.1:33060/database? debug=false&charset=utf8";
	var db = Mysql.connect(mysqlStringConnection);
	User= db.meteorCollection("user_account", "user_accountCollection");
	
	var newUser1 = { Username: 'kilt', Password: 'memesrkool', Age: 16, Birthday: '04/20/2000', Gender: female, SexualOrientation: heterosexual, MentalIllness: depression, Interest: memes, Location: Ga, PalRadius:10}
	var newUser2 = { Username: 'blahaha', Password: 'memesrkool', Age: 18, Birthday: '04/20/1998', Gender: male, SexualOrientation: homosexual, MentalIllness: anxiety, Interest: memes, Location: Ga, PalRadius:10}
	db.table("user_account").save(newUser1);
	db.table("user_account").save(newUser2);
	var test = getElementById("test");
	test.innerHTML= db.table("user_account") + "hey"
	}
});

if (Meteor.isServer) {
	Meteor.startup(function(){
	
	
	var mysqlStringConnection=  "mysql://root:EG04202000@127.0.0.1:33060/database? debug=false&charset=utf8";
	
	
	//makes connection between online hosted database 
	var db = Mysql.connect(mysqlStringConnection);
	
	var criteria = db.criteriaFor("user_account")
		.where("Age").gt(18);

	
	Posts = db.meteorCollection("user_account", "user_accountCollection", criteria);
	
	
	Meteor.publish("allPosts", function(){
		return Posts.find();
	});
});
}
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';



Router.route("/",{
	template: "home"
	});




Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
/**		var x = document.getElementById("demo");
		function getLocation() {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(showPosition);
			} else {
				x.innerHTML = "Geolocation is not supported by this browser.";
			}
		}
		function showPosition(position) {
			x.innerHTML = "Latitude: " + position.coords.latitude + 
			"<br>Longitude: " + position.coords.longitude; 
		}
		function showError(error) {
			switch(error.code) {
				case error.PERMISSION_DENIED:
					x.innerHTML = "User denied the request for Geolocation."
					break;
				case error.POSITION_UNAVAILABLE:
					x.innerHTML = "Location information is unavailable."
					break;
				case error.TIMEOUT:
					x.innerHTML = "The request to get user location timed out."
					break;
				case error.UNKNOWN_ERROR:
					x.innerHTML = "An unknown error occurred."
					break;
			}
		}
		/*
		Random link button- By JavaScript Kit (http://javascriptkit.com)
		Over 300+ free scripts!
		This credit MUST stay intact for use
		*/

/**		//specify random links below. You can have as many as you want
		var randomlinks=new Array()

		randomlinks[0]="https://en.wikipedia.org/wiki/Mount_Miwa"
		randomlinks[1]="https://en.wikipedia.org/wiki/George_Washington"
		randomlinks[2]="https://en.wikipedia.org/wiki/Canada"
		randomlinks[3]="https://en.wikipedia.org/wiki/Sherlock_Holmes"
		randomlinks[4]="https://en.wikipedia.org/wiki/Pivot_joint"
		randomlinks[5]="https://en.wikipedia.org/wiki/Beyonc%C3%A9"
		randomlinks[6]="https://en.wikipedia.org/wiki/Rentschler_Farm_Museum"
		randomlinks[7]="https://en.wikipedia.org/wiki/The_Beatles"
		randomlinks[8]="http://www.google.com/doodles/the-100th-tour-de-france"
		randomlinks[9]="https://en.wikipedia.org/wiki/Mario_Kart_8"
		randomlinks[10]="https://en.wikipedia.org/wiki/Meme"

		function randomlink(){
		window.location=randomlinks[Math.floor(Math.random()*randomlinks.length)]
		}*/
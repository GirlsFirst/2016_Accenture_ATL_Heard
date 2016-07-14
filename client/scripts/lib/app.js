// Libs
import 'angular-animate';
import 'angular-meteor';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';
import Angular from 'angular';
import Loader from 'angular-ecmascript/module-loader';
import { Meteor } from 'meteor/meteor';

// Modules
import ChatsCtrl from 'C:\Users\gwclead1\Desktop\Heard\2016_Accenture_ATL_heard\client\scripts\controllers\chats.controller';
import CalendarFilter from 'C:\Users\gwclead1\Desktop\Heard\2016_Accenture_ATL_heard\client\scripts\filters\calendar.filter'
import RoutesConfig from 'C:\Users\gwclead1\Desktop\Heard\2016_Accenture_ATL_heard\client\scripts\routes';

const App = 'Heard';

// App
Angular.module(App, [
	'angular-meteor',
	'ionic'
]);

new Loader(App)
	.load(ChatsCtrl)
	.load(CalendarFilter)
	.load(RoutesConfig);

// Startup
if (Meteor.isCordova) {
	Angular.element(document).on('deviceready', onReady);
}
else {
	Angular.element(document).ready(onReady);
}
 
function onReady() {
	Angular.bootstrap(document, [App]);
}
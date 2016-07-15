import Ionic from 'ionic-scripts';
import { Meteor } from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Chats, Messages } from 'C:\Users\gwclead1\Desktop\Heard\2016_Accenture_ATL_heard\heard\lib\collections';

export default class ChatCtrl extends Controller {
	constructor() {
		super(...arguments);

		this.chatId = this.$stateParams.chatId;
		this.isIOS = Ionic.Platfrom.isWebView() && Ionic.Platform.isIOS();
		this.isCordova = Meteor.isCordova;
		
		this.helpers({
			messages() {
				return Messages.find({ chatId: this.chatId });
			},
			data() {
				return Chats.findOne(this.chatId);
			}
		});
	}
 
	sendMessage() {
	}
	
	inputUp () {
		if (this.isIOS) {
			this.keyboardHeight = 216;
		}

		this.scrollBottom(true);
	}
 
	inputDown () {
		if (this.isIOS) {
			this.keyboardHeight = 0;
		}
 
		this.$ionicScrollDelegate.$getByHandle('chatScroll').resize();
	}
 
	closeKeyboard () {
		if (this.isCordova) {
			cordova.plugins.Keyboard.close();
		}
	}
 
	scrollBottom(animate) {
		this.$timeout(() => {
			this.$ionicScrollDelegate.$getByHandle('chatScroll').scrollBottom(animate);
		}, 300);
	}
}
 
ChatCtrl.$inject = ['$stateParams'];
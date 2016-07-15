
import Moment from 'moment';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Chats } from 'C:\Users\gwclead1\Desktop\Heard\2016_Accenture_ATL_heard\heard\libcollections';

//table goes here
//USE create_account;
//Insert INTO create_account(Username, Password, Age, Gender, Sexual Orientation, Mental Illness, Interest, 7Location, Pal Location)
//	Username = 


export default class ChatsCtrl extends Controller {
	constructor() {
		super(...arguments);

		this.helpers({
			data() {
				return Chats.find();
			}
		});
	}

	remove(chat) {
		this.data.remove(chat);
	}
}
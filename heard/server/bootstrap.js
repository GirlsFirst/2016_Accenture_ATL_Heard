import Moment from 'moment';
import { Meteor } from 'meteor/meteor';
import { Chats, Messages } from '../lib/collections';

Meteor.startup(function() {

	if (Chats.find().count() !== 0) return;

	Messages.remove({});

	const messages = [
	//	{
	//		text: 'I should buy a boat',
	//		timstamp: Moment().subtract(1, 'days').toDate()
	//	},
	];

	messages.forEach((m) => {
		Messages.insert(m);
	});

	const chats = [
	//	{
	//		name: 'Ethan Gonzalez',
	//		picture: 'some picture'
	//	},
	];

	chats.forEach((chat) => {
		const message = Messages.findOne({ chatId: { $exists: false } });
		chat.lastMessage = message;
		const chatId = Chats.insert(chat);
		Messages.update(message._id, { $set: { chatId } });
	});

});
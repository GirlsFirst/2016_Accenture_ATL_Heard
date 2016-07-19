Messages = new Mongo.Collection('Messages');

  Messages.allow({
    'insert': function (userId,doc) {
      /* user and doc checks ,
      return true to allow insert */
      return true; 
    },
	'remove': function() {
		return true;
	}
  });
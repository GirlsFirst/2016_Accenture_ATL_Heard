messages = new Mongo.Collection('messages');
messages.allow({
  insert: function (userId, doc) {
    return true;
  }
});
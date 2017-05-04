var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  caption: String,
  image: { data: Buffer, contentType: String }
  // account_id: ObjectId
});

module.exports = mongoose.model('CatPicture', schema);

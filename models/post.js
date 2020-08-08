const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title:String,
    description:String,
    author:{
        type: Schema.Types.ObjectId,
        ref: 'User'

    },
    replies:[String]

});

PostSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Post', PostSchema);
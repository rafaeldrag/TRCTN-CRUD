// imports to create a schema/model
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// create posts schema -- // moved from app.js //
const PostsSchema = new mongoose.Schema({
    name: {
        type: String
    },
    data: {
        type: Object   
    },
    desc: {
        type: String
    }
});

module.exports = mongoose.model('posts', PostsSchema);

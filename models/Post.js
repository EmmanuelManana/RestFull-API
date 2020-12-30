const mongoose = require('mongoose');

const PostSchemma = mongoose.Schema({
    title: {
        type: 'string',
        required: true
    },
    description: {
        type: 'string',
        required: true
    },
    date:{
        type: Date,
        default: Date.now

    }
})

module.exports = mongoose.model('PostsSchema', PostSchemma)
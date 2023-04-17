const mongoose = require('mongoose');

const PostSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        desc: String,
        likes: [],
        image: String,
    },
    {timestamps: true}
)

module.exports = mongoose.model("Posts", PostSchema);
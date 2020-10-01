const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
    id: ({ type: String, unique: true }),
    name: String,
    picture: String,
    resume: String,
    dislikedBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    likedBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
})

const Movie = mongoose.model('Movie', movieSchema)
module.exports = Movie
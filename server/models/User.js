const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: ({ type: String, unique: true }),
    lastAppOpen: Date,
    lastLogin: Date,
    lastLocationUpdate: Date,
    firstSignUp: String,
    firstLogin: Date,
    birthday: String,
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    friendRequests: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    friendships:[{type:Schema.Types.ObjectId, ref:'Friendship'}],
    firstName: String,
    surName: String,
    email: String,
    phone: String,
    likedMovies: [{ type: Schema.Types.ObjectId, ref: 'Movie' }],
    dislikedMovies: [{ type: Schema.Types.ObjectId, ref: 'Movie' }],
    password: String,
    showMap: {type: Boolean, default: true},
})

const User = mongoose.model('User', userSchema)
module.exports = User
const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: { type: String, default: 'No Tags' },
    createdAt: { type: Date, required: true },
    likes: { type: Number, required: true }
})

const profileSchema = new mongoose.Schema({
    fullname: { type: String, default: 'Anonymous' },
    profession: { type: String, default: 'Unemployed' },
    skills: { type: Array, default: [] },
    nationality: { type: String, default: 'India' },
    dateOfBirth: {
        yob: { type: Number, default: 0000 },
        mob: { type: Number, default: 00 },
        dob: { type: Number, default: 00 }
    },
    gender: { type: String, default: 'Not Provided' },
    currentlyLivingIn: { type: String, default: 'Jail' },
    bio: { type: String, default: 'This person is too lazy to write even two lines' },
    hobbies: { type: String }
})

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    joinedAt: { type: Date, required: true },
    blogs: { type: [blogSchema], default: [] },
    profile: { type: profileSchema, default: {} },
    following: { type: [String], default: [] },
    followers: { type: [String], default: [] }
})

module.exports = {
    User: mongoose.model('users', userSchema),
    Blog: mongoose.model('blogs', blogSchema),
    Profile: mongoose.model('profile', profileSchema)
}
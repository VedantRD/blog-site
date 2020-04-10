const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    username: { type: String, required: true },
    content: { type: String, required: true, trim: true },
    createdAt: { type: Date, required: true }
})

const blogSchema = new mongoose.Schema({
    writtenBy: { type: String, required: true },
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true, trim: true },
    tags: { type: String, default: 'No Tags' },
    createdAt: { type: Date, required: true },
    likes: { type: Number, required: true, default: 0 },
    comments: { type: [commentSchema], default: [] }
})

const profileSchema = new mongoose.Schema({
    fullname: { type: String, default: 'Anonymous', trim: true },
    profession: { type: String, default: 'Unemployed', trim: true },
    skills: {
        skill1: { type: String, default: 'skill1', trim: true },
        skill2: { type: String, default: 'skill2', trim: true },
        skill3: { type: String, default: 'skill3', trim: true },
        skill4: { type: String, default: 'skill4', trim: true }
    },
    nationality: { type: String, default: 'India' },
    dateOfBirth: {
        yob: { type: Number, default: 0000 },
        mob: { type: Number, default: 00 },
        dob: { type: Number, default: 00 }
    },
    gender: { type: String, default: 'Male' },
    currentlyLivingIn: { type: String, default: 'India' },
    bio: { type: String, default: 'This person is too lazy to write even two lines', trim: true },
    hobbies: { type: String, default: 'I like nothing', trim: true }
})

const activitySchema = new mongoose.Schema({
    content: { type: String, required: true, trim: true },
    createdAt: { type: Date, required: true }
})

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, trim: true },
    joinedAt: { type: Date, required: true },
    isVerified: { type: Boolean, required: true, default: false },
    blogs: { type: [blogSchema], default: [] },
    profile: { type: profileSchema, default: {} },
    following: { type: [String], default: [] },
    followers: { type: [String], default: [] },
    likedBlogs: { type: [String], default: [] },
    activity: { type: [activitySchema], default: [] }
})

module.exports = {
    User: mongoose.model('users', userSchema),
    Blog: mongoose.model('blogs', blogSchema),
    Profile: mongoose.model('profile', profileSchema),
    Comment: mongoose.model('comment', commentSchema)
}
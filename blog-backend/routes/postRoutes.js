const router = require('express').Router()
// const Post = require('../models/postModel')
const mySchemas = require('../models/userModel')
const User = mySchemas.User
const Blog = mySchemas.Blog
const Profile = mySchemas.Profile

// ========================= Post new blog =========================== //
router.post('/users/blogs', async (req, res) => {
    console.log('in the update function')
    // const newblog = req.body
    const { title, content, tags, createdAt, username } = req.body
    const newblog = {
        title, content, tags, createdAt, likes: 0
    }
    User.findOneAndUpdate({ username }
        , { $push: { blogs: newblog } }
        , function (err, doc) {

            if (err) {

                console.log("update document error");

            } else {

                console.log("update document success");

                console.log(doc);
            }
        });
    res.json('hello')
})

// ========================= Update Profile by Username =========================== //
router.post('/users/user/profile', async (req, res) => {
    console.log('in the update function')
    const { username, profile } = req.body
    console.log(profile)
    User.findOneAndUpdate({ username }, { profile },
        function (err, doc) {

            if (err) {

                console.log("update document error");

            } else {

                console.log("update document success");

                console.log(doc);
            }
        });
    res.json('hello')
})

// ========================== Get all Blogs or Profile of a User by Username ========================= //
router.get('/users/:username', async (req, res) => {
    const user = await User.findOne({ username: req.params.username })
    res.json(user)
})

// ========================= Get One Blog =========================== //
router.get('/users/blogs/:blogId/:username', async (req, res) => {
    console.log(req.params.blogId)
    console.log(req.params.username)
    const blog = await User.findOne({ "blogs._id": req.params.blogId }, { 'blogs.$': 1 })
    res.json(blog)
})

// ================== Create new User ======================== //
router.post('/users', async (req, res) => {
    const { username, password } = req.body
    // console.log(title, createdAt, tags, html)
    const joinedAt = new Date
    const newUser = new User({
        username, password, joinedAt
    })

    try {
        const reqPost = await newUser.save()
        res.json(reqPost)
        console.log(reqPost)
    } catch (err) {
        console.log(err)
    }

})

// ===================== Get User with Username and Password ======================= //
router.get('/user/:username/:password', async (req, res) => {
    const { username, password } = req.params
    console.log(username, password)
    const user = await User.findOne({ username, password })
    res.json(user)
})

module.exports = router


// ========================== Follow other User by Username ============================ //
router.post('/users/follow/:myUsername/:otherUser', async (req, res) => {
    console.log('in the update function')
    const myUsername = req.params.myUsername
    const otherUser = req.params.otherUser
    User.findOneAndUpdate({ username: myUsername }
        , { $push: { following: otherUser } }
        , function (err, doc) {

            if (err) {

                console.log("update document error");

            } else {

                User.findOneAndUpdate({ username: otherUser }, { $push: { followers: myUsername } }, function (err, doc) {
                    if (err) {
                        console.log('update document error')
                    } else {
                        console.log('update document success')
                        console.log(doc)
                    }
                })
                console.log(doc);
            }
        });
    res.json('hello')
})

// =============================== Unfollow Other User by Username ================================== //
router.post('/users/unfollow/:myUsername/:otherUser', async (req, res) => {
    console.log('in the update function')
    const myUsername = req.params.myUsername
    const otherUser = req.params.otherUser
    User.findOneAndUpdate({ username: myUsername }
        , { $pull: { following: otherUser } }
        , function (err, doc) {

            if (err) {

                console.log("update document error");

            } else {

                User.findOneAndUpdate({ username: otherUser }, { $pull: { followers: myUsername } }, function (err, doc) {
                    if (err) {
                        console.log('update document error')
                    } else {
                        console.log('update document success')
                        console.log(doc)
                    }
                })
                console.log(doc);
            }
        });
    res.json('hello')
})

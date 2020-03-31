const router = require('express').Router()
// const Post = require('../models/postModel')
const mySchemas = require('../models/userModel')
const User = mySchemas.User

// ========================= Post new blog =========================== //
router.post('/users/blogs', async (req, res) => {
    console.log('in the update function')
    // const newblog = req.body
    const { title, content, tags, createdAt, username } = req.body
    const newblog = {
        writtenBy: username, title, content, tags, createdAt
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

// ========================= Load User Feed by Following array ===============================
router.get('/users/feed/:following', async (req, res) => {
    let users = req.params.following
    users = [...(users.split(","))]
    const blogs = await User.find({ username: { $in: users } }, { 'username': 1, 'blogs': 1 })
    res.json(blogs)
})

// ============================= Find user and blogs from search bar ===============================
router.get('/users/find/:input', async (req, res) => {
    const input = req.params.input
    const users = await User.find({ username: { $regex: `.*${input}.*` } }, { blogs: 0 })
    const blogs = await User.find({ 'blogs.title': { $regex: `.*${input}.*` } }, { 'blogs.$': 1, _id: 0 })
    res.json({ blogs, users })
})

// ================================= Like and Unlike Blog using blogId =====================================
router.post('/users/blogs/:myUsername/:blogId/:act', async (req, res) => {
    console.log('in the blog like route')
    const myUsername = req.params.myUsername
    const blogId = req.params.blogId
    const act = req.params.act
    let incrementor
    if (act === 'Like')
        incrementor = 1
    else
        incrementor = -1

    User.findOneAndUpdate({ 'blogs._id': blogId }
        , { $inc: { 'blogs.$.likes': incrementor } }
        , function (err, doc) {

            if (err) {

                console.log("update document error for liking a blog");

            } else {

                if (act === 'Like') {
                    User.findOneAndUpdate({ username: myUsername }, { $push: { likedBlogs: blogId } }, function (err, doc) {
                        if (err) {
                            console.log('update document error')
                        } else {
                            console.log('update document success')
                            console.log(doc)
                        }
                    })
                } else {
                    User.findOneAndUpdate({ username: myUsername }, { $pull: { likedBlogs: blogId } }, function (err, doc) {
                        if (err) {
                            console.log('update document error')
                        } else {
                            console.log('update document success')
                            console.log(doc)
                        }
                    })
                }
                console.log(doc);
            }
        });
    res.json('hello')
})

// ========================== Comment the blog =============================
router.post('/users/blogs/comments/:blogId', async (req, res) => {
    console.log('in the update function')
    const blogId = req.params.blogId
    const { username, content, createdAt } = req.body
    const newComment = {
        username, content, createdAt
    }
    console.log(newComment)
    console.log(blogId)
    User.findOneAndUpdate({ 'blogs._id': blogId }
        , { $push: { 'blogs.$.comments': newComment } }
        , function (err, doc) {

            if (err) {

                console.log("Error in Adding New Comment");

            } else {

                console.log("Comment Added Successfully");

                console.log(doc);
            }
        });
    res.json('hello')
})

// ================================ Get all Comments ==================================
router.get('/users/blogs/:blogId/', async (req, res) => {
    const blogId = req.params.blogId
    const blog = await User.find({ 'blogs._id': blogId }, { 'username': 1, 'blogs.$': 1 })
    console.log(blog)
    res.json(blog)
})
const express = require('express')
const app = express()
const router = express.Router()
const Post = require('../Model/post.model')

app.use(express.json())

// get all posts
router.get('/', async (req, res) => {
    try {
        const post = await Post.find()
        res.json(post)
    } catch (err) {
        res.send(err)
    }
})

// save posts
router.post('/', async (req, res) => {
    const posts = new Post({
        userId: req.body.userId,
        date: req.body.date,
        time: req.body.time,
        title: req.body.title,
        body: req.body.body,
    })

    try {
        const savePost = await posts.save()
        res.json(savePost)
    } catch (err) {
        res.send('Err: ' + err)
    }
})

// get id by posts
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.json(post)
    } catch (err) {
        res.send('Err: ' + err)
    }
})

// update posts
router.put('/:id', async(req, res)=>{
    try {
        const postUpdate = await Post.findById(req.params.id)
        postUpdate.userId = req.body.userId
        postUpdate.date = req.body.date
        postUpdate.time = req.body.time
        postUpdate.title = req.body.title
        postUpdate.body = req.body.body

        const update = await postUpdate.save()
        res.json(update)
    } catch (error) {
        res.send('Err: ' + err)
    }
})

//delete user
router.delete('/:id', async (req, res) => {
    try {
        const userId = await Post.findById(req.params.id)
        const response = await userId.remove();
        res.json(response)
    } catch (err) {
        res.send('Err: ' + err)
    }
})

module.exports = router
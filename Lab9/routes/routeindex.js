const { render } = require('ejs')
const express = require('express')
const router = express.Router()
const Posts = require('../model/Posts')
//const Task = require('../model/task');

router.get('/', async function (req, res) {
  var posts = await Posts.find()
  res.render('index', { posts })
})

router.get('/newPost', async (req, res) => {
  res.render('newPost')
})

router.post('/newPost', async (req, res) => {
  var post = new Posts(req.body)
  await post.save()
  res.redirect('/')
  res.end()
})

router.get('/edit/:id', async (req, res) => {
  var id = req.params.id
  var posts = await Posts.findById(id)

  res.render('edit', { posts })
})

router.post('/edit/:id', async (req, res) => {
  var id = req.params.id
  await Posts.updateOne({ _id: id }, req.body)

  res.redirect('/')
})

router.get('/delete/:id', async (req, res) => {
  var id = req.params.id
  var posts = await Posts.findById(id)

  res.render('delete', { posts })
})

router.post('/delete/:id', async (req, res) => {
  var id = req.params.id
  await Posts.remove({ _id: id })
  res.redirect('/')
})
module.exports = router

const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is Twigs root!'))

router.get('/blogposts', controllers.getBlogPosts)

router.post('/blogposts', controllers.createBlogPosts)



module.exports = router;
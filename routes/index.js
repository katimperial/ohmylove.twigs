const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is Twigs root!'))

router.get('/blogposts', controllers.getBlogPosts)

router.post('/blogposts', controllers.createBlogPosts)

router.get('/comments', controllers.getComments)

router.post('/comments', controllers.createComment)

router.put('/comments/:_id', controllers.updateComment)

router.delete('/comments/:_id', controllers.deleteComment)

router.get('/gallery', controllers.getGallery)

router.get('/vids', controllers.getVids)

module.exports = router;
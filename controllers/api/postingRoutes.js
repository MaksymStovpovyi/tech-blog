const router = require('express').Router();
const { Posting } = require('../../models');

// new post
router.post('/', async (req, res) => {
  try {
    const newPost = Object.assign({}, req.body);
    const response = await Posting.create(newPost);

    res.status(200).json(response);
  } catch(e) {
    console.log(e);
    res.status(400).json(e);
  }
});

// delete post
router.delete('/:id', async (req, res) => {
  try {
    const postData = await Posting.destroy({
      where: {
        id: req.params.id,
      }
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
const router = require('express').Router();
const { Posting } = require('../../models');

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

module.exports = router;
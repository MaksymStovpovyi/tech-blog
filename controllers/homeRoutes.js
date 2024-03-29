const router = require('express').Router();
const { User, Posting } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });
    const postingData = await Posting.findAll();


    const users = userData.map((project) => project.get({ plain: true }));
    const postings = postingData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
      postings
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// to signup
router.get('/signup', (req, res) => {
  try {
    res.render('signup');
  } catch(e) {
    res.status(500).json(e);
  }
});

// to new post
router.get('/newpost', (req, res) => {
  try {
    res.render('newpost');
  } catch(e) {
    res.status(500).json(e);
  }
});

// to update post
router.get('/update/:id', (req, res) => {
  try {
    res.render('update');
  } catch(e) {
    res.status(500).json(e);
  }
});

module.exports = router;

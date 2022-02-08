var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Armando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function(req, res) {
  res.render('form', { title: 'Form' });
});

router.post('/new', function(req, res) {
  let message = req.body.message
  let messageUser = req.body.user

  messages.push({text: message, user: messageUser, added: new Date()})

  res.redirect('/');
});

module.exports = router;

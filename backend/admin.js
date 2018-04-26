var express = require('express');
var router = express.Router();
var models = require('../database/models');

router.get('/admins', (req, res) => {
  if (!req.user || req.user.userType != "admin"){
    res.send('No');
  }else {
    models.Admin.findAll()
    .then(resp => res.send(resp))
    .catch(err => res.send(err))
  }
});

module.exports = router;

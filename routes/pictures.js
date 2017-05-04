var express = require('express');
var router = express.Router();
var fs = require('fs');
var CatPicture = require('../models/cat_picture');

router.get('/', function (req,res,next){
  CatPicture.find({}).exec(function (err, catPictures) {
    console.log(catPictures);
    res.render('pictures/index', {catPictures})
  });
})

router.get('/new', function (req,res,next){
  res.render('pictures/new')
})

router.post('/', function (req, res, next) {
  var catPicture = new CatPicture(req.body);
  catPicture.image.data = req.files.image.data;
  catPicture.image.contentType = req.files.image.mimetype;
  catPicture.save(function (err, catPicture) {
    if (err) throw err;
    res.redirect('/pictures')
  })
})
router.get('/:id/photo', function (req, res) {
  CatPicture.findById(req.params.id, function (err, doc) {
     if (err) return next(err);
     res.contentType(doc.image.contentType);
     res.send(doc.image.data);
   });
})



module.exports = router;

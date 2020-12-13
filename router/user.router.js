var express = require('express');
var multer  = require('multer');

var controllers = require('../controllers/user.controller');
var validate = require('../validate/user.validate');

var router = express.Router();

var upload = multer({ dest: 'public/uploads/' })

router.get('/', controllers.index);

router.get('/cookie', function(req, res){
    res.cookie('user-id', 12345);
    res.send("hehehehe");
});


router.get('/search', controllers.search);

router.get('/create', controllers.create);

router.get("/:id", controllers.getID);

router.post('/create',
    upload.single('avatar'),
    validate.postCreate ,
    controllers.postCreate
);

module.exports = router;
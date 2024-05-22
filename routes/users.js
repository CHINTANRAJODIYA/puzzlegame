var express = require('express');
var router = express.Router();

var user = require('../controller/usercontroller')

router.post('/',user.login)
router.post('/register',user.register)
router.get('/register/view_cat',user.viewcategory)
router.get('/register/cat_id/:id',user.catidselect)
router.get('/register/puz_id/:id',user.puzidselect)
router.post('/register/puz_id/:id',user.winidupdate)

module.exports = router;

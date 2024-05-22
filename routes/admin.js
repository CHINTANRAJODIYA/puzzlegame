var express = require('express');
var router = express.Router();
const multer = require('multer');


var admin = require('../controller/admincontroller')

const storageEngine = multer.diskStorage({
    destination: "public/images",
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  const upload = multer({
    storage: storageEngine,
  });

router.post('/login',admin.login)
// router.post('/register',admin.register)
router.post('/login/addcategory',upload.single('cat_image'),admin.addcategory)
router.post('/login/addpuzzle',upload.single('puz_image'),admin.addpuzzle)
router.get('/login/viewuser',admin.viewuser)



module.exports = router;

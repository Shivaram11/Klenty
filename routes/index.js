var express = require('express');
var router = express.Router();
const {
  registerUser,
  viewForum,
  showLogin,
  loginUser
} = require("../controllers/index");

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render("index");
});

router.get("/login", showLogin);
router.post("/login", loginUser);
router.get("/forum", viewForum);
router.get("/register",(req,res,next)=>{
  res.render("register");
});
router.post("/register", registerUser);

module.exports = router;

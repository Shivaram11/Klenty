var express = require('express');
var router = express.Router();
const {
  registerUser,
  showRegister,
  showLogin,
  loginUser,
  logoutUser
} = require("../controllers/index");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index");
});
router.get("/logout",logoutUser);
router.get("/login", showLogin);
router.post("/login", loginUser);
router.get("/register", showRegister);
router.post("/register", registerUser);

module.exports = router;

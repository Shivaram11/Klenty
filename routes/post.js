const express = require('express');
const router = express.Router();
const {postIndex}=require("../controllers/post");

/* GET users listing. */
router.get('/', postIndex);

module.exports = router;

const express = require('express');
const router = express.Router();
const {
  postIndex,
  viewNew,
  postNew,
  viewPost,
  createReview
} = require("../controllers/post");

/* GET users listing. */
router.get('/', postIndex);
router.get("/new",viewNew);
router.post("/new", postNew);
router.post("/review/:id",createReview);
router.get("/:id",viewPost);

module.exports = router;

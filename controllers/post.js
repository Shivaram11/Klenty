const Post = require("../models/post");
const { findById } = require("../models/post");

module.exports={
    async postIndex(req,res,next){
        let loggedIn= req.isAuthenticated();
        let posts=await Post.find({});
        res.render("posts",{posts,loggedIn});

    },
    viewNew(req,res,next){
        if(req.isAuthenticated()){

            res.render("new");
        }else{
            res.send("stop snooping");
        }
    },
    async postNew(req,res,next){
        if(req.isAuthenticated()){
            let post = await new Post(req.body);
            post.save(function (err) {
                if (err) {
                    console.log(err);
                }
            });
            res.redirect("/posts")
        }else{
            res.send("stop snooping");
        }
        
        
        // res.send("hey")
    },
    async viewPost(req,res,next){
        // if(req.isAuthenticated()){
           
        // }else{
        //     res.send("stop snooping");
        // }
        let loggedIn=req.isAuthenticated();
         let post = await Post.findById(req.params.id);
         res.render("post", {
             post,
             loggedIn
         });

    },
     async createReview(req, res, next) {
         if (req.isAuthenticated()) {
             let post = await Post.findById(req.params.id);
             post.replies.push(req.body.reply);
             post.save();
             res.redirect(`/posts/${req.params.id}`);
         } else {
             res.send("stop snooping");
         }

     }



}
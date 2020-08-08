const User = require("../models/user");
const passport = require("passport");
const { Passport } = require("passport");
module.exports={
    registerUser(req,res,next){
        console.log("hey ther");
        User.register({username:req.body.username},req.body.password,(err,user)=>{
            if(err){
                console.log(err);
                res.redirect("/register")
            }else{
                passport.authenticate("local")(req,res,()=>{
                    res.redirect("/forum");
                })
                
            }

        })
    },
    viewForum(req,res,next){
        if(req.isAuthenticated()){
            res.send("welcome to the forum ");
        }else{
            res.redirect("/");
        }
        
    },
    loginUser(req,res,next){
        const user = new User({
            username:req.body.username,
            password:req.body.password
        });
        req.login(user,(err)=>{
            if(err){
                console.log(err);
                res.redirect("/");
            }else{
                passport.authenticate("local")(req,res,()=>{
                    res.redirect("/forum"); 
                });
            }
        })

    },
    showLogin(req,res,next){
        res.render("login");

    }



}
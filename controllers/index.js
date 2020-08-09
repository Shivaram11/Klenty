const User = require("../models/user");
const passport = require("passport");
const { Passport } = require("passport");
module.exports={
    registerUser(req,res,next){
        console.log("hey ther");
        User.register({username:req.body.username},req.body.password,(err,user)=>{
            if(err){
                console.log(err);
                res.render("register",{message:"ALready registered"})
            }else{
                passport.authenticate("local")(req,res,()=>{
                    res.redirect("/posts");
                })
                
            }

        })
    },
    
    loginUser(req,res,next){
        const user = new User({
            username:req.body.username,
            password:req.body.password
        });
        req.login(user,(err)=>{
            if(err){
                console.log(err);
                res.redirect("/login");
            }else{
                passport.authenticate("local")(req,res,()=>{
                    res.redirect("/posts"); 
                });
            }
        })

    },
    showLogin(req,res,next){
        res.render("login",{message:""});

    },
    showRegister(req,res,next){
      res.render("register",{message:""});

    },
    logoutUser(req,res,next){
        req.logout();
        res.redirect("/posts");
    }



};
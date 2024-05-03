const express = require('express')
const router = express.Router()
var user = require('../models/model')
const passport = require('passport')
const localstrategy = require('passport-local')

passport.use(new localstrategy(user.authenticate()))

router.get('/',(req,res)=>{
    res.render('index')
})
router.get('/profile',isloggedin,(req,res)=>{
    res.send('hey devesh')
})
router.post('/register',(req,res)=>{
    var usr = user({
        username: req.body.username,
        password: req.body.password,
        secret: req.body.secret
    })
    res.send("hey")
})
router.post('/login',passport.authenticate("local",{
    successRedirect: "/profile",
    failureRedirect: "/"
}),(req,res)=>{

})

router.get("/logout",(req,res,next)=>{
    req.logout((err)=>{
        if(err){return next(err)}
        res.redirect('/')
    })
})

// isse user ka account bangya
user.register( usr,req.body.password).then((registereduser)=>{
passport.authenticate("local")(req,res,()=>{
    res.redirect('/profile')
})
})


//jaha v ye wala function laga diya to ye check krega ki kya aap login ho
function isloggedin(req,res,next){
    if(req.isAuthincated()){
        return next()
    }
    res.redirect("/")
}
module.exports = router
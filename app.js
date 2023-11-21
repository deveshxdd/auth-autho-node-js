const express = require('express')
const app = express()
const session = require('express-session')
const passport = require('passport')
const port = 1005
app.set('view engine','ejs')


app.use(session({
    resave:false,
    saveUninitialized:false,
    secret:"uhjbcbfesjfb"
}))

app.use(passport.initialize())
app.use(passport.session())
passport.serializeUser(usersRouter.serializeUser())
passport.deserializeUser(usersRouter.deserializeUser())





app.listen(port,()=>{
    console.log("server started")
})
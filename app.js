const express = require('express')
const app = express()
const session = require('express-session')
const passport = require('passport')
const port = 1005
const router = require('./routers/index')
app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs')


app.use(session({
    resave:false,
    saveUninitialized:false,
    secret:"uhjbcbfesjfb"
}))

app.use(passport.initialize())
app.use(passport.session())
passport.serializeUser(router.serializeUser())
passport.deserializeUser(router.deserializeUser())

//--> userrouter import huaa hai require islia hum likhe hai 
// itne code me hum server ko allow krrhe hai session ke lia




app.use(router)


app.listen(port,()=>{
    console.log("server started")
})


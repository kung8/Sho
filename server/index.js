require('dotenv/config')
const {SERVER_PORT,CONNECTION_STRING,SESSION_SECRET} = process.env
const express = require('express')
const massive = require('massive')
const session = require('express-session')

const AuthCtrl = require('./controllers/auth_controller')
const ProdCtrl = require('./controllers/product_controller')
const OrderCtrl = require('./controllers/order_controller')

const app = express()
app.use(express.json())
massive(CONNECTION_STRING).then(db=>{
    app.set('db',db)
    app.listen(SERVER_PORT,()=>console.log(`Keep running on ${SERVER_PORT}`))
})

app.use(session({
    saveUninitialized:false,
    resave:false,
    secret:SESSION_SECRET,
    cookie:{
        maxAge:600000
    }
}))

app.post('/api/payment',OrderCtrl.pay)

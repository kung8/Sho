import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './components/Login'
import profile from './components/Profile'
import Blogs from './components/Blogs'
import Blog from './components/Blog'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Dash from './components/Dash'
import Product from './components/Product'
import Products from './components/Products'
import Social from './components/Social'

export default (
    <Switch>
        <Route path='/authentication' component={Login}/>
        <Route path='/profile' component={profile}/>
        <Route path='/blogs/:id' component={Blog}/>
        <Route path='/blogs' component={Blogs}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/checkout' component={Checkout}/>
        <Route path='/products/:id' component={Product}/>
        <Route path='/products' component={Products}/>
        <Route path='/social' component={Social}/>
        <Route exact path='/' component={Dash}/>
        <Route component={redirect}/>
    </Switch>
)

function redirect(){
    return <Redirect to='/'/>
}
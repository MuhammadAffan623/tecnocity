import React from 'react'
import { Route,  Switch } from 'react-router'
import Home from './Home'
import Product from './Product'
import Projects from './Projects'
import Contact from './Contact'
import Services from './Services'

function Main() {
    return (
        <div>
            <Switch>
            <Route exact path="/" component={Home} />
        <Route exact path="/product" component={Product} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/services' component={Services} />
            </Switch>
        </div>
    )
}

export default Main

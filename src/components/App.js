import React from 'react'
 import {Switch, Route } from 'react-router-dom'
import AboutPage from './about/about'
import HomePage from './home/home'
import Header from '../common/header.js';
import PageNotFound from './PageNotFound.js';
import CoursesPage from './courses/CoursesPage.js';

function App() {
    console.log('i am in app')
    return (
        <div className="container-fluid">
            <Header/>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/courses" component={CoursesPage} />
            <Route component={PageNotFound} />
        </Switch>
        </div>
    );
}

export default App;
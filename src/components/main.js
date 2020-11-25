import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import AboutMe from './aboutme';
import Projects from './projects';
import Resume from './resume';

const Main = Component => (
    <Switch>
        <Route path="/home" component={Home} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
    </Switch>
)
export default Main; 
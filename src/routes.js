import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Schedule, Contact } from './containers';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { AnimatedSwitch } from 'react-router-transition';

const Routes = () => (
  <AnimatedSwitch
    atEnter={{ opacity: 0 }}
    atLeave={{ opacity: 1 }}
    atActive={{ opacity: 1 }}
    className="switch-wrapper"
  >
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/raspored" component={Schedule} />
    <Route exact path="/kontakt" component={Contact} />
  </AnimatedSwitch>
);

export default Routes;

import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { render } from 'react-dom'

import './index.css'

import { Main } from './pages/Main'
import { Details } from './pages/Details'

render(
  <Router>
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/:type/:id' component={Details} />
    </Switch>
  </Router>
  , document.querySelector('#root'))

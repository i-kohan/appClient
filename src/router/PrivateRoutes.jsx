import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Loading } from '../components'
import {
  ExercisesPage,
  ProgramsPage,
} from '../pages'

const PrivateRoutes = () => (
  <Switch>
    <Route exact path="/" component={() => <Loading type="circular" />} />
    <Route path="/trainingDay" component={() => <h1>home</h1>} />
    <Route path="/programs" component={ProgramsPage} />
    <Route path="/exercises" component={ExercisesPage} />
    <Route path="/home" component={() => <h1>home</h1>} />
    <Route render={() => <Redirect to="/" />} />
  </Switch>
)

export default PrivateRoutes

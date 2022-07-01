import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Movies from './components/Movies'
import MovieDetail from './components/MovieDetail'
import NotFound from './components/NotFound'


function App() {



  return <>
    <Router>
      <Switch>
        <Route exact path='/' component={Movies}></Route>
        <Route path='/movies/:movie_id' component={MovieDetail} />
        <Route path='*' component={NotFound}></Route>
      </Switch>
    </Router>
  </>
}

export default App

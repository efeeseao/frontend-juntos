import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home, Members, Profile, NotFound } from 'pages'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/members" component={Members} />
        <Route path="/members/:postcode" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Routes

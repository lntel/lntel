import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './pages/Main'

const App = () => {
    return (
        <Router basename="/">
            <Switch>
                <Route path='/' exact component={Main} />
            </Switch>
        </Router>
    )
}

export default App

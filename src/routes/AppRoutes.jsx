
import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import LessonsScreen from '../pages/LessonsScreen'
const AppRoutes = () => {
    return (
        <Router>
       <Switch>
           <Route component={LessonsScreen}/>
        </Switch>
        </Router>
    )
}
export default AppRoutes;
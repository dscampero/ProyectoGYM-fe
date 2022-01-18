
import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import LessonsScreen from '../pages/LessonsScreen'
const AppRoutes = () => {
    return (
        <Router>
        <Route component={LessonsScreen}/>
        </Router>
    )
}
export default AppRoutes;
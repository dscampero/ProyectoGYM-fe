
import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import LessonsScreen from '../pages/LessonsScreen'
import HomeScreen from '../pages/HomeScreen'
const AppRoutes = () => {
    return (
        <Router>
            <Route exact path="/" component={HomeScreen}/>
            <Route exact path="/clases"component={LessonsScreen}/>
        </Router>
    )
}
export default AppRoutes;
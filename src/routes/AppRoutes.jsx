
import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import LessonsScreen from '../pages/LessonsScreen'
import HomeScreen from '../pages/HomeScreen'
import LoginComponent from '../components/LoginComponent'
const AppRoutes = () => {
    return (
        <Router>
            <Route exact path="/" component={HomeScreen}/>
            <Route exact path="/clases"component={LessonsScreen}/>
            <Route exact path="/login" component={LoginComponent}/>
        </Router>
    )
}
export default AppRoutes;

import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import HomeScreen from '../pages/HomeScreen'
import LoginComponent from '../components/LoginComponent'
import LessonsScreen from '../pages/LessonsScreen'
import AppointmentScreen from '../pages/AppointmentScreen'

const AppRoutes = () => {
    return (
        <Router>
            <Route exact path="/" component={HomeScreen}/>
            <Route exact path="/clases"component={LessonsScreen}/>
            <Route exact path="/login" component={LoginComponent}/>
            <Route exact path="/turnos"component={AppointmentScreen}/>
        </Router>
    )
}
export default AppRoutes;
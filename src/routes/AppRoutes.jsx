
import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import HomeScreen from '../pages/HomeScreen'
import LoginScreen from '../pages/LoginScreen'
import LessonsScreen from '../pages/LessonsScreen'
import AppointmentScreen from '../pages/AppointmentScreen'
import InstitutionalScreen from '../pages/InstitutionalScreen'

const AppRoutes = () => {
    return (
        <Router>
            <Route exact path="/" component={HomeScreen}/>
            <Route exact path="/clases"component={LessonsScreen}/>
            <Route exact path="/login" component={LoginScreen}/>
            <Route exact path="/turnos"component={AppointmentScreen}/>
            <Route exact path="/nosotros"component={InstitutionalScreen}/>
        </Router>
    )
}
export default AppRoutes;
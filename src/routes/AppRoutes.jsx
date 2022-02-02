
import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import HomeScreen from '../pages/HomeScreen'
import LoginScreen from '../pages/LoginScreen'
import LessonsScreen from '../pages/LessonsScreen'
import AppointmentScreen from '../pages/AppointmentScreen'
import InstitutionalScreen from '../pages/InstitutionalScreen'
import RegisterScreen from '../pages/RegisterScreen'
import UsersAdminScreen from '../pages/adminPage/UsersAdminScreen'
import InstructorsAdminScreen from '../pages/adminPage/InstructorsAdminScreen'
import AlumnsAdminScreen from '../pages/adminPage/AlumnsAdminScreen'
import QueriesAdminScreen from '../pages/adminPage/QueriesAdminScreen'

const AppRoutes = () => {
    return (
        <Router>
            <Route exact path="/" component={HomeScreen}/>
            <Route exact path="/clases"component={LessonsScreen}/>
            <Route exact path="/login" component={LoginScreen}/>
            <Route exact path="/turnos"component={AppointmentScreen}/>
            <Route exact path="/nosotros"component={InstitutionalScreen}/>
            <Route exact path="/register" component={RegisterScreen}/>
            <Route exact path="/admin/usuarios" component={UsersAdminScreen}/>
            <Route exact path="/admin/instructores" component={InstructorsAdminScreen}/>
            <Route exact path="/admin/alumnos" component={AlumnsAdminScreen}/>
            <Route exact path="/admin/consultas"component={QueriesAdminScreen}/>
        </Router>
    )
}
export default AppRoutes;
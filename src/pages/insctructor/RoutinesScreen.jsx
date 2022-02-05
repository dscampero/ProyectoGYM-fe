import React from 'react';
import InstructorNavbar from '../../components/admin/instructors/InstructorNavbar';
import RutinesTable from '../../components/admin/instructors/RutinesTable';
import Footer from '../../components/Footer';

const RoutinesScreen = () => {
  return <>
  <div className="adminContainer h-100">
  <InstructorNavbar/>
  <h2 className="usersPagesHeader">RUTINAS</h2>
  <RutinesTable/>
  <Footer/>
  </div>
  </>;
};

export default RoutinesScreen;

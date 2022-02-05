import React from 'react';
import InstructorNavbar from '../../components/admin/instructors/InstructorNavbar';
import ControlTable from '../../components/admin/instructors/ControlTable';
import Footer from '../../components/Footer';

const InstructorQueris = () => {
  return <div>
    <InstructorNavbar/>
    <h2 className="usersPagesHeader">ALUMNOS</h2>
    <ControlTable/>
    <Footer/>   

  </div>;
};

export default InstructorQueris;

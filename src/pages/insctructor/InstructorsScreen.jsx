import React from 'react';
import InstructorNavbar from '../../components/admin/instructors/InstructorNavbar';
import InstructorTable from '../../components/admin/instructors/InstructorTable'
import Footer from '../../components/Footer';
const InstructorsScreen = () => {
  return <>
  <InstructorNavbar/>
  <h2 className="usersPagesHeader">MIS CLASES</h2>
   <InstructorTable/> 
   <Footer></Footer>
  </>;
};

export default InstructorsScreen;

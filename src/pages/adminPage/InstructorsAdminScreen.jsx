import React from 'react';
import AdminNavbar from "../../components/admin/AdminNavbar";
import Footer from "../../components/Footer";
import FunctionalInstructorsTable from "../../components/admin/instructors/FuntionalInstructorsTable";
import RhythmsInstructorsTable from "../../components/admin/instructors/RhythmsInstructorsTable";
import YogaInstructorsTable from '../../components/admin/instructors/YogaInstructorsTable';

const InstructorsAdminScreen = () => {
  return <div className="adminContainer">
      <AdminNavbar />
      <h2 className="usersPagesHeader">HORARIOS DE INSTRUCTORES</h2>
      <FunctionalInstructorsTable />
      <RhythmsInstructorsTable />
      <YogaInstructorsTable />
      <Footer />
  </div>;
};

export default InstructorsAdminScreen;

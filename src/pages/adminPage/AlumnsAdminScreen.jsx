import React from 'react';
import AdminNavbar from "../../components/admin/AdminNavbar";
import Footer from "../../components/Footer";
import FunctionalAlumnsTable from '../../components/admin/alumns/FunctionalAlumnsTable';
import RhythmsAlumnsTable from '../../components/admin/alumns/RhythmsAlumnsTable';
import YogaAlumnsTable from '../../components/admin/alumns/YogaAlumnsTable';

const AlumnsAdminScreen = () => {
  return <div className="adminContainer">
      <AdminNavbar />
      <h2 className="usersPagesHeader">HORARIOS DE ALUMNOS</h2>
      <FunctionalAlumnsTable />
      <RhythmsAlumnsTable />
      <YogaAlumnsTable />
      <Footer />
  </div>;
};

export default AlumnsAdminScreen;

import React from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";
import Footer from "../../components/Footer";
import UsersTable from "../../components/admin/UsersTable";

const adminScreen = () => {
  return (
    <div className="adminContainer">
      <AdminNavbar />
      <h2 className='usersPagesHeader'>USUARIOS REGISTRADOS</h2>
      <UsersTable />
      <Footer />
    </div>
  );
};

export default adminScreen;

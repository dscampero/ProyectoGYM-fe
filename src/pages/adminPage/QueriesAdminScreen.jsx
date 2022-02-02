import React from 'react';
import AdminNavbar from "../../components/admin/AdminNavbar";
import Footer from "../../components/Footer";
import QueriesTable from '../../components/admin/QueriesTable';

const QueriesAdminScreen = () => {
  return <div className="adminContainer">
<AdminNavbar />
<QueriesTable />
<Footer />
  </div>;
};

export default QueriesAdminScreen;

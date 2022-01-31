import React from "react";
import HomeNavbar from "../components/HomeNavbar";
import Footer from "../components/Footer";
import AppointmentsForm from "../components/AppointmentsForm";

const AppointmentScreen = () => {
  return (
    <div>
      <HomeNavbar />
      <AppointmentsForm />
      <Footer />
    </div>
  );
};

export default AppointmentScreen;

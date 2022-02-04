import React from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import SearchIcon from '@mui/icons-material/Search';

const days = [
  { day: "Lunes" },
  { day: "Martes" },
  { day: "Miércoles" },
  { day: "Jueves" },
  { day: "Viernes" },
  { day: "Sábado" },
];
const schedules = [
  { time: "8 Hs" },
  { time: "9 Hs" },
  { time: "10 Hs" },
  { time: "11 Hs" },
  { time: "12 Hs" },
  { time: "16 Hs" },
  { time: "17 Hs" },
  { time: "18 Hs" },
  { time: "19 Hs" },
  { time: "20 Hs" },
  { time: "21 Hs" },
  { time: "22 Hs" },
];

const schedulesData = [
  {
    day: "Lunes",
    time: "8 Hs",
    clase: "Funcional",
  },
  {
    day: "Martes",
    time: "8 Hs",
    clase: "Aeróbico",
  },
  {
    day: "Miércoles",
    time: "15 Hs",
    clase: "Aeró Combat",
  },
  {
    day: "Jueves",
    time: "12 Hs",
    clase: "Aero Local",
  },
  {
    day: "Viernes",
    time: "21 Hs",
    clase: "Ritmos",
  },
  {
    day: "Sábado",
    time: "11 Hs",
    clase: "Funcional",
  },
  {
    day: "Lunes",
    time: "10 Hs",
    clase: "Aerobico",
  },
];

const InstructorTable = () => {
  return (
    <div className="adminContainer h-100">
    <div className="usersContainer">
      <Card className="tableContainerCard" style={{ marginBottom: "4%" }}>
        <Card.Body>
          <h6 style={{ marginBottom: "1%" }}>
          En la siguiente tabla podrá ver los datos de las clases que le fueron asignadas.
          </h6>
          <div style={{ display: "flex", marginBottom: "2%" }}>
            <Form.Select className="lessonsSelect me-4">
              <option>Seleccione un día</option>
              {days.map((date) => (
                <option value="1">{date.day}</option>
              ))}
            </Form.Select>
            <Form.Select className="lessonsSelect me-4">
              <option>Seleccione un horario</option>
              {schedules.map((hour) => (
                <option value="1">{hour.time}</option>
              ))}
            </Form.Select>
            <SearchIcon style={{ fontSize: "35px", color: "#ee256c" }} />
          </div>
          <div className="scrollTable">
            <Table
              bordered
              hover
              responsive="md"
              style={{ border: "1.5px solid #3b3b3b" }}
            >
              <thead>
                <tr
                  style={{
                    backgroundColor: "#3b3b3b",
                    color: "white",
                    position: "sticky",
                    zIndex: 10,
                    top: 0,textAlign:"center"
                    
                  }}
                >
                  <th>DÍAS</th>
                  <th>HORARIOS</th>
                  <th>TIPO DE CLASE</th>
                </tr>
              </thead>
              <tbody>
                {schedulesData.map((schedule) => (
                  <tr style={{ backgroundColor: "white" }}>
                    <td>{schedule.day}</td>
                    <td>{schedule.time}</td>
                    <td>{schedule.clase}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </div>
    </div>
  );
};

export default InstructorTable;

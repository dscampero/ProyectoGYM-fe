import React from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AttachFileIcon from '@mui/icons-material/AttachFile';
const alumns = [
    { name: "Lucas Medina" },
    { name: "Juán López" },
    { name: "Mariana Mohedano" },
    { name: "Julieta Díaz" },
    { name: "Marcos Peña" },
    { name: "Juliana Páez" },
    { name: "Lucas Castro"}
];
const duration = [
  { time: "1 mes" },
  { time: "2 meses" },
  { time: "3 meses" },
];

const durationData = [
  {
    name: "Lucas Medina",
    time: "2 meses",
    routine: "Rutina.pdf",
  },
  {
    name: "Juán López",
    time: "2 meses",
    routine: "Rutina.pdf",
  },
  {
    name: "Mariana Mohedano",
    time: "1 mes",
    routine: "Rutina.pdf",
  },
  {
    name: "Julieta Díaz",
    time: "1 mes",
    routine: "Rutina.pdf",
  },
  {
    name: "Marcos Peña",
    time: "3 meses",
    routine: "Rutina.pdf",
  },
  {
    name: "Juliana Páez",
    time: "2 meses",
    routine: "Rutina.pdf",
  },
  {
    name: "Lucas Castro",
    time: "1 mes",
    routine: "Rutina.pdf",
  },
];

const RutinesTable = () => {
  return (
    <div className="adminContainer h-100">
    <div className="usersContainer">
      <Card className="tableContainerCard" style={{ marginBottom: "4%" }}>
        <Card.Body>
          <h6 style={{ marginBottom: "1%" }}>
          En la siguiente sección podrá subir la rutinas a los alumnos/alumnas.
          </h6>
          <div style={{ display: "flex", marginBottom: "2%" }}>
          <Form.Select className="lessonsSelect me-2">
              <option>Seleccione un alumno</option>
              {alumns.map((alumn) => (
                <option value="1">{alumn.name}</option>
              ))}
            </Form.Select>
            <Form.Select className="lessonsSelect me-4">
              <option>Duracion de Rutina</option>
              {duration.map((hour) => (
                <option value="1">{hour.time}</option>
              ))}
            </Form.Select>
            <AttachFileIcon style={{ fontSize: "35px", color: "#ee256c" }}/>
            <AddCircleIcon style={{ fontSize: "35px", color: "#ee256c" }} />

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
                  <th>ALUMNO</th>
                  <th>DURACION DE RUTINA</th>
                  <th>RUTINA</th>
                </tr>
              </thead>
              <tbody>
                {durationData.map((schedule) => (
                  <tr style={{ backgroundColor: "white" }}>
                    <td>{schedule.name}</td>
                    <td>{schedule.time}</td>
                    <td>{schedule.routine}</td>
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

export default RutinesTable;

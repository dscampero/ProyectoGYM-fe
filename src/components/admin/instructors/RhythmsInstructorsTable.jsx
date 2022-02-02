import React from 'react';
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Card from "react-bootstrap/Card";

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
  const instructors = [
    { name: "Lucas Medina" },
    { name: "Juán López" },
    { name: "Mariana Mohedano" },
    { name: "Julieta Díaz" },
    { name: "Marcos Peña" },
    { name: "Juliana Páez" },
  ];
  
  const schedulesData = [
    {
      day: "Lunes",
      time: "8 Hs",
      capacity: "15",
      instructor: "Lucas Medina",
    },
    {
      day: "Martes",
      time: "8 Hs",
      capacity: "10",
      instructor: "Juan López",
    },
    {
      day: "Miércoles",
      time: "15 Hs",
      capacity: "10",
      instructor: "Mariana Mohedano",
    },
    {
      day: "Jueves",
      time: "12 Hs",
      capacity: "15",
      instructor: "Julieta Díaz",
    },
    {
      day: "Viernes",
      time: "21 Hs",
      capacity: "15",
      instructor: "Marcos Peña",
    },
    {
      day: "Sábado",
      time: "11 Hs",
      capacity: "12",
      instructor: "Juliana Páez",
    },
    {
      day: "Lunes",
      time: "10 Hs",
      capacity: "8",
      instructor: "Juan López",
    },
  ];

const RhythmsInstructorsTable = () => {
  return <div className="usersContainer">
  <Card className='tableContainerCard' style={{marginBottom: '4%'}}>
    <Card.Body>
      <h3 className="usersPageSubTitle">Ritmos</h3>
      <h6 style={{ marginBottom: "1%" }}>
        Elija una opción en cada campo y presione el botón para asignar o
        quitar un profesor a una clase.
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
        <Form.Select className="lessonsSelect me-2">
          <option>Seleccione un profesor</option>
          {instructors.map((instructor) => (
            <option value="1">{instructor.name}</option>
          ))}
        </Form.Select>
        <AddCircleIcon style={{ fontSize: "35px", color: "#ee256c" }} />
        <RemoveCircleIcon style={{ fontSize: "35px", color: "grey" }} />
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
                top: 0,
              }}
            >
              <th>DÍAS</th>
              <th>HORARIOS</th>
              <th>CUPO</th>
              <th>PROF. A CARGO</th>
            </tr>
          </thead>
          <tbody>
            {schedulesData.map((schedule) => (
              <tr style={{ backgroundColor: "white" }}>
                <td>{schedule.day}</td>
                <td>{schedule.time}</td>
                <td>{schedule.capacity}</td>
                <td>{schedule.instructor}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Card.Body>
  </Card>
</div>;
};

export default RhythmsInstructorsTable;

import React from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { FormControl,InputGroup } from "react-bootstrap";
const alumns = [
    { name: "Lucas Medina" },
    { name: "Juán López" },
    { name: "Mariana Mohedano" },
    { name: "Julieta Díaz" },
    { name: "Marcos Peña" },
    { name: "Juliana Páez" },
    { name: "Lucas Castro"}
];

const durationData = [
  {
    name: "Lucas Medina",
    date: "05/02/2022",
    peso: "68",
    altura:170,
    IMC:18.50
  },
  {
    name: "Juán López",
    date: "29/01/2022",
    peso: "90",
    altura:180,
    IMC:27.8
  },
  {
    name: "Mariana Mohedano",
    date: "10/01/2022",
    peso: "68",
    altura:160,
    IMC:23.4
  },
  {
    name: "Julieta Díaz",
    date: "12/12/2021",
    peso: "55",
    altura:155,
    IMC:22.9
  },
  {
    name: "Marcos Peña",
    date: "10/12/2021",
    peso: "80",
    altura:1.80,
    IMC:24.7
  },
  {
    name: "Juliana Páez",
    date: "08/11/2021",
    peso: "65",
    altura:165,
    IMC:23.9
  },
  {
    name: "Lucas Castro",
    date: "07/11/2021",
    peso: "80",
    altura:175,
    IMC:26.1
  },
];

const ControlTable = () => {
  return (
    <div className="adminContainer h-100">
    <div className="usersContainer">
      <Card className="tableContainerCard" style={{ marginBottom: "4%" }}>
        <Card.Body>
          <h6 style={{ marginBottom: "1%" }}>
          En la siguiente tabla podrá ver los datos de las pesos que le fueron asignadas.
          </h6>
          <div style={{ display: "flex", marginBottom: "2%" }}>
          <Form.Select className="lessonsSelect me-2">
              <option>Seleccione un alumno</option>
              {alumns.map((alumn) => (
                <option value="1">{alumn.name}</option>
              ))}
            </Form.Select>
            
            <input className="lessonsSelect me-4" type="date"/>

            <InputGroup className="lessonsSelect me-4 ">
            <FormControl aria-label="Peso" placeholder="Ingrese el peso del alumno"
                        />
            <InputGroup.Text>KG</InputGroup.Text>
            
            </InputGroup>
            <InputGroup className="lessonsSelect me-4 ">
            <FormControl aria-label="Altura" placeholder="Ingrese la estatura"
                        />
            <InputGroup.Text>CMS</InputGroup.Text>
            </InputGroup>
                     
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
                  <th>FECHA DE CONTROL</th>
                  <th>PESO</th>
                  <th>ALTURA</th>
                  <th>IMC</th>

                </tr>
              </thead>
              <tbody>
                {durationData.map((schedule) => (
                  <tr style={{ backgroundColor: "white" }}>
                    <td>{schedule.name}</td>
                    <td>{schedule.date}</td>
                    <td>{schedule.peso}</td>
                    <td>{schedule.altura}</td>
                    <td>{schedule.IMC}</td>

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

export default ControlTable;

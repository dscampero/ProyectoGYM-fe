import React from "react";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";
import CheckIcon from "@mui/icons-material/Check";
import BlockIcon from "@mui/icons-material/Block";
import Card from "react-bootstrap/Card";

const userData = [
  {
    userID: 1,
    userName: "dscampero",
    name: "Diego",
    lastName: "Campero",
    age: 28,
    address: "Av Independencia 1580",
  },
  {
    userID: 2,
    userName: "rcastillo10",
    name: "Rodrigo",
    lastName: "Castillo",
    age: 23,
    address: "Libertad 1456",
  },
  {
    userID: 2,
    userName: "rcastillo10",
    name: "Rodrigo",
    lastName: "Castillo",
    age: 23,
    address: "Libertad 1456",
  },
  {
    userID: 2,
    userName: "rcastillo10",
    name: "Rodrigo",
    lastName: "Castillo",
    age: 23,
    address: "Libertad 1456",
  },
  {
    userID: 2,
    userName: "rcastillo10",
    name: "Rodrigo",
    lastName: "Castillo",
    age: 23,
    address: "Libertad 1456",
  },
  {
    userID: 2,
    userName: "rcastillo10",
    name: "Rodrigo",
    lastName: "Castillo",
    age: 23,
    address: "Libertad 1456",
  },
  {
    userID: 2,
    userName: "rcastillo10",
    name: "Rodrigo",
    lastName: "Castillo",
    age: 23,
    address: "Libertad 1456",
  },
  {
    userID: 2,
    userName: "rcastillo10",
    name: "Rodrigo",
    lastName: "Castillo",
    age: 23,
    address: "Libertad 1456",
  },
  {
    userID: 2,
    userName: "rcastillo10",
    name: "Rodrigo",
    lastName: "Castillo",
    age: 23,
    address: "Libertad 1456",
  },
  {
    userID: 3,
    userName: "jmamani",
    name: "Julián",
    lastName: "Mamaní",
    age: 27,
    address: "Colombia 973",
  },
  {
    userID: 3,
    userName: "jmamani",
    name: "Julián",
    lastName: "Mamaní",
    age: 27,
    address: "Colombia 973",
  },
  {
    userID: 3,
    userName: "jmamani",
    name: "Julián",
    lastName: "Mamaní",
    age: 27,
    address: "Colombia 973",
  },
  {
    userID: 3,
    userName: "jmamani",
    name: "Julián",
    lastName: "Mamaní",
    age: 27,
    address: "Colombia 973",
  },
  {
    userID: 3,
    userName: "jmamani",
    name: "Julián",
    lastName: "Mamaní",
    age: 27,
    address: "Colombia 973",
  },
  {
    userID: 3,
    userName: "jmamani",
    name: "Julián",
    lastName: "Mamaní",
    age: 27,
    address: "Colombia 973",
  },
];

const UsersTable = () => {
  return (
    <div className="usersContainer">
      <Card className="tableContainerCard" style={{ marginBottom: "5%" }}>
        <Card.Body>
          <h3 className="usersPageSubTitle">Administración de usuarios </h3>
          <h6 style={{ marginBottom: "1%" }}>
            En esta sección usted puede seleccionar un usuario y darlo de alta o
            baja utilizando los íconos de la columna "Opciones"
          </h6>
          <div className="usersScrollTable">
            <Table
              bordered
              hover
              responsive="md"
              style={{ border: "1px solid #3b3b3b" }}
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
                  <th></th>
                  <th>USUARIO</th>
                  <th>NOMBRE</th>
                  <th>APELLIDO</th>
                  <th>EDAD</th>
                  <th>DOMICILIO</th>
                  <th>ESTADO</th>
                  <th>OPCIONES</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((user) => (
                  <tr style={{ backgroundColor: "white" }}>
                    <td>{user.userID}</td>
                    <td>{user.userName}</td>
                    <td>{user.name}</td>
                    <td>{user.lastName}</td>
                    <td>{user.age}</td>
                    <td>{user.address}</td>
                    <td className="usersIcons">
                      <Badge bg="success">ACTIVO</Badge>
                    </td>
                    <td className="usersIcons">
                      <CheckIcon
                        className="me-3"
                        style={{ fontSize: "25px", color: "#ee256c" }}
                      />
                      <BlockIcon style={{ fontSize: "25px", color: "grey" }} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UsersTable;

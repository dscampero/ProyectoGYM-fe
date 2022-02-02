import React from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";

const queriesData = [
  {
    queryID: 1,
    name: "Diego",
    lastName: "Campero",
    phone: 3815496469,
    email: "dscampero@gmail.com",
    message: 'Hola! Me gustaría empezar a entrenar pero no se mucho. Podrían informarme? Gracias.'
  },
  {
    queryID: 2,
    name: "Rodrigo",
    lastName: "Castillo",
    phone: 3815033445,
    email: "rcastillo@gmail.com",
    message: 'Hola! Me gustaría empezar a entrenar pero no se mucho. Podrían informarme? Gracias.'
  },
  {
    queryID: 3,
    name: "Maximiliano",
    lastName: "Bernasconi",
    phone: 3815496469,
    email: "mberna@gmail.com",
    message: 'Hola! Me gustaría empezar a entrenar pero no se mucho. Podrían informarme? Gracias.'
  },
  {
    queryID: 4,
    name: "Pablo",
    lastName: "Marino",
    phone: 3815496469,
    email: "pomarino@gmail.com",
    message: 'Hola! Me gustaría empezar a entrenar pero no se mucho. Podrían informarme? Gracias.'
  },
  {
    queryID: 5,
    name: "Diego",
    lastName: "Campero",
    phone: 3815496469,
    email: "dscampero@gmail.com",
    message: 'Hola! Me gustaría empezar a entrenar pero no se mucho. Podrían informarme? Gracias.'
  },
  {
    queryID: 6,
    name: "Rodrigo",
    lastName: "Castillo",
    phone: 3815033445,
    email: "rcastillo@gmail.com",
    message: 'Hola! Me gustaría empezar a entrenar pero no se mucho. Podrían informarme? Gracias.'
  },
  {
    queryID: 7,
    name: "Maximiliano",
    lastName: "Bernasconi",
    phone: 3815496469,
    email: "mberna@gmail.com",
    message: 'Hola! Me gustaría empezar a entrenar pero no se mucho. Podrían informarme? Gracias.'
  },
  {
    queryID: 8,
    name: "Pablo",
    lastName: "Marino",
    phone: 3815496469,
    email: "pomarino@gmail.com",
    message: 'Hola! Me gustaría empezar a entrenar pero no se mucho. Podrían informarme? Gracias.'
  },
  {
    queryID: 9,
    name: "Diego",
    lastName: "Campero",
    phone: 3815496469,
    email: "dscampero@gmail.com",
    message: 'Hola! Me gustaría empezar a entrenar pero no se mucho. Podrían informarme? Gracias.'
  },
  {
    queryID: 10,
    name: "Rodrigo",
    lastName: "Castillo",
    phone: 3815033445,
    email: "rcastillo@gmail.com",
    message: 'Hola! Me gustaría empezar a entrenar pero no se mucho. Podrían informarme? Gracias.'
  },
  {
    queryID: 11,
    name: "Maximiliano",
    lastName: "Bernasconi",
    phone: 3815496469,
    email: "mberna@gmail.com",
    message: 'Hola! Me gustaría empezar a entrenar pero no se mucho. Podrían informarme? Gracias.'
  },
  {
    queryID: 12,
    name: "Pablo",
    lastName: "Marino",
    phone: 3815496469,
    email: "pomarino@gmail.com",
    message: 'Hola! Me gustaría empezar a entrenar pero no se mucho. Podrían informarme? Gracias.'
  },
  {
    queryID: 13,
    name: "Diego",
    lastName: "Campero",
    phone: 3815496469,
    email: "dscampero@gmail.com",
    message: 'Hola! Me gustaría empezar a entrenar pero no se mucho. Podrían informarme? Gracias.'
  },
  {
    queryID: 14,
    name: "Rodrigo",
    lastName: "Castillo",
    phone: 3815033445,
    email: "rcastillo@gmail.com",
    message: 'Hola! Me gustaría empezar a entrenar pero no se mucho. Podrían informarme? Gracias.'
  },
  {
    queryID: 15,
    name: "Maximiliano",
    lastName: "Bernasconi",
    phone: 3815496469,
    email: "mberna@gmail.com",
    message: 'Hola! Me gustaría empezar a entrenar pero no se mucho. Podrían informarme? Gracias.'
  },
  {
    queryID: 16,
    name: "Pablo",
    lastName: "Marino",
    phone: 3815496469,
    email: "pomarino@gmail.com",
    message: 'Hola! Me gustaría empezar a entrenar pero no se mucho. Podrían informarme? Gracias.'
  },
];

const QueriesTable = () => {
  return (
    <div className="usersContainer">
      <Card className="tableContainerCard" style={{ marginBottom: "5%" }}>
        <Card.Body>
          <h3 className="usersPageSubTitle">Administración de consultas </h3>
          <h6 style={{ marginBottom: "1%" }}>
            En esta sección usted puede acceder a las consultas que se
            realizaron desde el formulario en el Home del sitio.
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
                  <th>NOMBRE</th>
                  <th>APELLIDO</th>
                  <th>TELEFONO</th>
                  <th>MAIL</th>
                  <th>MENSAJE</th>
                </tr>
              </thead>
              <tbody>
                {queriesData.map((query) => (
                  <tr style={{ backgroundColor: "white" }}>
                    <td>{query.queryID}</td>
                    <td>{query.name}</td>
                    <td>{query.lastName}</td>
                    <td>{query.phone}</td>
                    <td>{query.email}</td>
                    <td>{query.message}</td>
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

export default QueriesTable;

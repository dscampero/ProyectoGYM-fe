import React from 'react';
import { Form,Button } from 'react-bootstrap';

const LoginComponent = () => {
  return <>SOY LOGIN
<Form >
  <Form.Group className="mb-3"  controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Nombre de Usuario" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Constraseña" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  </Form.Group>
  <Button className="buttonlogin">
    Ingresar
  </Button>
</Form>
  
  </>;
};

export default LoginComponent;

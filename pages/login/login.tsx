import React from "react";
import {useState} from 'react'
import {
  Button,
  Form,
  Col,
  Label,
  Row,
  FormGroup,
  Input,
  FormFeedback,
  FormText,
  Card,
  CardBody,
} from "reactstrap";

export const Login: React.FC  = () => {
  const []= useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const submit = () =>{
    const logar = {
      email, senha
    }
    //testando logar, lembrar de apagar depois
    console.log (logar)
  }
    return (
    <div className="container">
      <div className="row flex-row align-items-center justify-content-center">
        <div className="col-md-6">
          <Card className="mt-5">
            <CardBody>
              <div className="register text-center">
                <h2 className="mt-3">Login</h2>
                <Form className="form mt-6">
                  <Col md={12}>
                    <FormGroup>
                      <Label htmlFor="email" className="text-center">Email</Label>
                      <Input
                        type="email"
                        name="email"
                        id="loginEmail" value={email}
                        onChange = {event => setEmail(event.target.value)}
                        placeholder="example@example.com"
                        className="text-center"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="loginPassword">Password</Label>
                      <Input
                        type="password"
                        name="password"
                        id="loginPassword" value={senha}
                        onChange = {event => setSenha(event.target.value)}
                        placeholder="********"
                        className="text-center"
                      />
                    </FormGroup>
                  </Col>
                  <Button onClick={submit}>Submit</Button>
                </Form>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Login;
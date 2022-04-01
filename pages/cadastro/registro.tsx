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

const Submit =() =>{

}

export const Cadastro: React.FC  = () => {

  const []= useState('')
  const [nome, setNome]= useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const submit = () =>{
    const cadastrando = {
      nome, email, senha
    }
    console.log (cadastrando)
  }

  return (
    <div className="container">
      <div className="row flex-row align-items-center justify-content-center">
        <div className="col-md-6">
          <Card className="mt-5">
            <CardBody>
              <div className="register text-center">
                <h2 className="mt-3">Cadastro</h2>
                <Form className="form mt-6">
                  <Col md={12}>
                    <FormGroup>
                      <Label for="name">Name</Label>
                      <Input
                        type="text"
                        name="name"
                        id="name" value={nome}
                        onChange = {event => setNome(event.target.value)}
                        placeholder="Full name"
                        className="text-center"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleEmail" className="text-center">Email</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail" value={email}
                        onChange = {event => setEmail(event.target.value)}
                        placeholder="example@example.com"
                        className="text-center"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="examplePassword">Password</Label>
                      <Input
                        type="password"
                        name="password"
                        id="examplePassword" value={senha}
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
export default Cadastro;
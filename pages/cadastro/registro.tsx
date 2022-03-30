import React from 'react';
import { Button, Form, Col, Label, Row, FormGroup, Input, FormFeedback, FormText, Card, CardBody } from 'reactstrap';


export default function cadastro(){
    return(
<div className='row'>
  <div className='col-md-3 center'>
    <Card>
      <CardBody>
        <div className="register">
                <h2 className='mt-3'>Cadastro</h2>
                <Form className="form mt-3">
                  <Col md={6}>
                  <FormGroup>
                    <Label for='name'>Name</Label>
                    <Input
                      type="text"
                      name="name"
                      id = "name"
                      placeholder='Full name'
                      />

                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="example@example.com"
                      />

                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="********"
                      />
                    
                  </FormGroup>
                  </Col>
                <Button>Submit</Button>
              </Form>
        </div>
      </CardBody>  
    </Card>  
  </div> 
  
</div>       
    )
}

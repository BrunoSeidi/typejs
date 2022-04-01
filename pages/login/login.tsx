import React from "react";
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

const Login: React.FC  = () => {
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
                      <Label for="loginEmail" className="text-center">Email</Label>
                      <Input
                        type="email"
                        name="email"
                        id="loginEmail"
                        placeholder="example@example.com"
                        className="text-center"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="loginPassword">Password</Label>
                      <Input
                        type="password"
                        name="password"
                        id="loginPassword"
                        placeholder="********"
                        className="text-center"
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
    </div>
  );
}
export default Login;
import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from 'next/app'
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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
    <img src="/wegimage.png" width="7%"></img>
    <Component {...pageProps} />
    </div>
  )
}

export default MyApp

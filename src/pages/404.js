import React from "react";
import Container from "../components/container";
import Navbar from "../components/navbar";

const NotFoundPage = () => (
  <Container nav>
    <br />
    <br />
    <br />
    <h1 className="page-title" style={{textAlign:'center'}}>Oop! <br/>Found nothing!</h1>
    <Navbar />
  </Container>
);

export default NotFoundPage;
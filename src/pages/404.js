import React from "react";
import Container from "../components/container";
import Header from '../components/header'
import Navbar from "../components/navbar";

export default () => (
  <Container nav>
    <Header />
    <br />
    <br />
    <br />
    <h1 className="page-title" style={{textAlign:'center'}}>Oop! <br/>Found nothing!</h1>
    <Navbar />
  </Container>
);

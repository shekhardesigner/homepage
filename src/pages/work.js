import React from "react";
import Container from '../components/container';
import Header from '../components/header'
import SEO from "../components/seo";

export default () => <Container>
    <SEO title="My Work" />
    <Header />
    <h1>Work.</h1>
    <p>I have been involved in many wonderful software projects during my 12+ years of being in the industry!</p>
    <p>Domains include: Healthcare, Insurance, Fashion houses</p>
    <p>Skills I have used in past projects are:</p>
    <ul style={{marginLeft: '2rem'}}>
        <li>NodeJS (SailsJS, Fastify, NestJS)</li>
        <li>SQL Server, MySQL, PostgreSQL, MongoDB</li>
        <li>PHP (WordPress), ASP.net Core</li>
        <li>React and React Native, a bit of Angular@1</li>
    </ul>
    <br />
    <h4>Hire me!</h4>
    <p>Interested in sharing project work? - write me: work at shekhardesigner dot com</p>
    <h4>Send me encrypted email</h4>
    <p><a href="https://keybase.io/shekhardesigner/">Keybase - @shekhardesigner</a></p>
    <br /><br /><br />
    <p><small>Project gallery and case studies are work in progress!</small><br /><small>Last updated: Jan 17, 2020</small></p>
</Container>;
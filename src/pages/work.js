import React from "react";
import { useStaticQuery, graphql } from 'gatsby'

import Container from '../components/container';
import Header from '../components/header'
import SEO from "../components/seo";

const query = graphql`
  query Info {
    site {
      buildTime(formatString: "DD/MM/YYYY")
    }
  }
`
export default () => {
    const data = useStaticQuery(query);

    return <Container>
        <SEO title="My Work" />
        <Header />
        <h1>My Work.</h1>
        <article>
            <p>I have been involved in many wonderful software projects during my 12+ years of being in the industry!</p>
            <p>Domains include: Healthcare, Insurance, Fashion houses</p>
            <h2>Skills, used in past projects:</h2>
            <ul style={{marginLeft: '2rem'}}>
                <li>NodeJS (SailsJS, Fastify, NestJS)</li>
                <li>SQL Server, MySQL, PostgreSQL, MongoDB</li>
                <li>PHP (WordPress), ASP.net Core</li>
                <li>React and React Native, a bit of Angular@1</li>
            </ul>
            <br />
            <h2>Want to talk?</h2>
            <p>Interested in sharing project work? - write me: work at shekhardesigner dot com</p>
            <p>I stay away, as much as possible, from all FAANG and other social media channels. If you wish to communicate via an encrypted method, please contact me on <a href="https://keybase.io/shekhardesigner/">Keybase - @shekhardesigner</a></p>
            <br /><br /><br />
            <p><small>A project gallery and few case studies are coming soon!</small><br /><small>Last updated: {data.site.buildTime}</small></p>
        </article>
    </Container>
};
import React from "react";
import { useStaticQuery, graphql } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl';

import Container from '../components/container';
import SEO from "../components/seo";
import Navbar from "../components/navbar";
import { SocialNav } from "../components/intro";

const query = graphql`
  query Info {
    site {
      buildTime(formatString: "DD/MM/YYYY")
    }
  }
`
export default () => {
    const data = useStaticQuery(query);
    const intl = useIntl();

    return <Container nav>
        <SEO title={intl.formatMessage({ id: "workPageTitle" })} />
        <h1 className="page-title">{intl.formatMessage({ id: "workPageTitle"})}</h1>
        <article>
            <p>In the past, I am involved in many beautiful software projects during my 12+ years of being in the industry.</p>
            <p>Domains include healthcare, insurance, fashion houses, design studios, government agencies, and social services to name few.</p>
            <h2>Highlights:</h2>
            <ul style={{marginLeft: '2rem'}}>
                <li>NodeJS (SailsJS, Fastify, NestJS)</li>
                <li>SQL Server, MySQL, MongoDB</li>
                <li>PHP (WordPress and Laravel)</li>
                <li>React and React Native</li>
                <li>Python (Flask, CLI, Tkinter, wxPython)</li>
                <li>Go (Learning nowadays...)</li>
            </ul>
            <br />
            <h2>Want to talk?</h2>
            <p>Should you need to discuss a project? - write to me: work@&lt;this_website_address&gt;</p>

            <br />
            <SocialNav />
            <p><small>A project gallery and few case studies are coming soon!</small><br /><small>Last updated: {data.site.buildTime}</small></p>
        </article>
        <Navbar />
    </Container>
};
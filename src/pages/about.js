import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import Container from '../components/container';
import Header from '../components/header'
import SEO from '../components/seo';
import Icons from '../components/icons';
import Navbar from '../components/navbar';
import { SocialNav } from '../components/intro';

export default () => {
    const intl = useIntl();

    return <Container>
        <SEO title={intl.formatMessage({ id: "aboutPageTitle" })} />
        <Header />
        <h1 className="page-title">{intl.formatMessage({ id: "aboutPageTitle"})}</h1>
        <article>
            <p>A self-taught, ever learning software engineering professional. Began my career in 2008 as a Jr. Web Designer with a precise role to design mockups in Photoshop, I quickly started to learn HTML/CSS Programming.</p>
            <p>By 2011, I had acquired good JavaScript and jQuery skills, along with sharpening my User Experience skillset.</p>
            <p>By 2014, I was already working for the world's top tech company.</p>
            <p>As of 2020, I am back in my native country Nepal having traveled half of the world.</p>
            <p>Speaking of my <strong>skillset</strong>, I posses strong knowledge in JavaScript (NodeJS, React, SailsJS), User Experience design (Prototyping new solutions), etc.</p>
            <p>View My <a rel="nofollow noopener noreferrer" href="/Shekhar_K_Sharma_Public_Resume.pdf">Resume <Icons size="s" name="External" inline /></a>.</p>
        </article>
        <SocialNav />
        <Navbar />
    </Container>
}
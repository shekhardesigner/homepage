import React from 'react'

import SEO from '../components/seo';
import Container from '../components/container';
import Header from '../components/header'
import Intro, { IntroNav } from '../components/intro'

export default () => <Container>
    <SEO />
    <Header />
    <Intro>
        <small>I'm a </small>
        <span>Full-stack Developer</span>
        <span>UX Designer</span>
        <span>Software Programmer</span>
    </Intro>
    <IntroNav />
</Container>
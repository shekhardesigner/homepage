import React from 'react'
import { useIntl } from 'gatsby-plugin-intl';
import SEO from '../components/seo';
import Container from '../components/container';
import Intro, { IntroNav, SocialNav } from '../components/intro'

export default () => {
    const intl = useIntl();

    return <Container>
        <SEO />
        <Intro>
            <small>{intl.formatMessage({ id: "homeIam"})}</small>
            <span>{intl.formatMessage({ id: "homeUxDesigner"})}</span>
            <span>{intl.formatMessage({ id: "homeSwEng"})}</span>
            <span>{intl.formatMessage({ id: "homeFullStack"})}</span>
        </Intro>
        <IntroNav />
        <SocialNav />
    </Container>
}
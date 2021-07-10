import React from 'react'
import { useIntl } from 'gatsby-plugin-intl';
import SeoMeta from '../components/seo';
import Container from '../components/container';
import Intro, { IntroNav, SocialNav } from '../components/intro'

const IndexPage = () => {
    const intl = useIntl();

    return <Container>
        <SeoMeta />
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

export default IndexPage;
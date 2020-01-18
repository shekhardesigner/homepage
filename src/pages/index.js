import React from "react"
import styled, { keyframes } from 'styled-components';

import SEO from '../components/seo';
import Container from '../components/container';
import Header from '../components/header'

const rotateUpAnim = keyframes`
    0% {
        transform: translate3d(0, 40px, 0);
        opacity: 0;
    }
    
    20%, 80% {
        transform: translate3d(0, 0, 0);
        opacity: 1;
    }
    
    100% {
        transform: translate3d(0, -40px, 0);
        opacity: 0;
    }
`;

const fadeTextAnim = keyframes`
    0% {
        opacity: 0;
        transform: translate3d(0, 60px, 0);
    }
    
    20%,
    80%,
    100% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
`;

const Intro = styled.h1`
    font-size: 3rem;
    position: relative;
    margin-top: 4rem;
    line-height: 1;

    > small {
        font-size: 60%;
        background: #FFEB3B;
    }

    > span {
        display: block;
        opacity: 0;
        position: absolute;
        top: 5rem;

        &:nth-of-type(1) { 
            animation: ${rotateUpAnim} 2.5s .5s; 
        }
        
        &:nth-of-type(2) { 
            animation: ${rotateUpAnim} 2.5s 3s; 
        }  
        
        &:nth-of-type(3) { 
            animation: ${fadeTextAnim} 2.5s 5s forwards;
        }
    }

    @media screen and (min-width: 700px) {
        font-size: 5rem;
    }
`;

export default () => <Container>
    <SEO />
    <Header />
    <Intro>
        <small>I'm a </small>
        <span>Full-stack Developer</span>
        <span>UX Designer</span>
        <span>Software Programmer</span>
    </Intro>
</Container>
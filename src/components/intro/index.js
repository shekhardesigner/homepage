import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useIntl, Link } from 'gatsby-plugin-intl';

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
    height: 12rem;
    font-family: 'Abril Fatface', cursive;

    > small {
        font-size: 60%;
        background: #FFD37F;
        padding: 0 0.5rem;
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

    @media (prefers-color-scheme: dark) {
        > small {
            color: #222;
        }
    }
`;

const IntroUL = styled.ul`
    margin: 5rem 0 2rem;
    padding: 0;
    list-style: none;

    > li {
        display: inline-block;

        &:first-letter {
            font-style: italic;
        }

        &:not(:last-child) {
            margin-right: 8rem;
        }

        > a {
            position: relative;
            padding-left: 4rem;
            display: block;
            color: #4CAF50;
            font-family: 'Stalemate', cursive;
            font-size: 3rem;
            margin: 0 0 1rem; 

            &::before,
            &::after {
                content: ' ';
                display: block;
                width: 0;
                height: 0;
                position: absolute;
                left:0;
                top: 1rem;
                transition-property: transform, border-color;
                transition-duration: .3s, .4s;
                transition-timing-function: cubic-bezier(.82, .1, .14, 2.12), ease-in-out;
            }
    
            &::before {
                border-top: 20px solid transparent;
                border-bottom: 20px solid transparent;
                border-left: 50px solid black;
                transform: rotate(18deg);

                @media (prefers-color-scheme: dark) {
                    border-left-color: #eee;
                }
            }
    
            &::after {
                border-top: 20px solid transparent;
                border-bottom: 20px solid transparent;
                border-left: 45px solid #4CAF50;
                transform: rotate(30deg);
            }

            &:hover,
            &:focus {
                color: black;

                &::before {
                    transform: rotate(28deg);
                }
                &::after {
                    transform: rotate(12deg);
                    border-left-color: #FFD37F;
                }
                
                @media (prefers-color-scheme: dark) {
                    color: #eee;

                    &::after {
                        border-left-color: #FF5722;
                    }
                }
            }

            @media screen and (min-width: 700px) {
                padding-left: 7rem;
                font-size: 3.5rem;
                margin: 0;

                &::before,
                &::after {
                    top: 0;
                }

                &::before {
                    border-top: 32px solid transparent;
                    border-bottom: 30px solid transparent;
                    border-left: 100px solid black;
                }
                &::after {
                    border-top: 32px solid transparent;
                    border-bottom: 30px solid transparent;
                    border-left: 80px solid #4CAF50;
                }   
            }

        }

    }
`;

const IntroNav = () => {
    const intl = useIntl();

    return <IntroUL>
        <li><Link to="/about">{intl.formatMessage({ id: "who" })}</Link></li>
        <li><Link to="/work">{intl.formatMessage({ id: "work" })}</Link></li>
    </IntroUL>
};

export { IntroNav };
export default ({children}) => <Intro>{children}</Intro>
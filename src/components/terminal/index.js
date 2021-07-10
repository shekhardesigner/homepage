import React from 'react';
import css from './terminal.module.scss';
import styled from 'styled-components';

const Input = styled.input`
    border: 0;
    background: transparent;
    color: #eee;
    font: inherit;
    display: block;
    width: 100%;

    &:focus {
        outline: none;
    }
`

export default () => <section className={css.terminal}>
    <header>Site Navigation</header>
    <article>
        <Input type="text" placeholder="Type your command here!" />
    </article>
</section>
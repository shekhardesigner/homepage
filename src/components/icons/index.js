/**
 * Component: Icons
 */

import React from 'react';
import * as css from './icons.module.scss'

const Icons = ({ name, size, color, inline }) => {
    const iconName = `gg${name}`;
    return <i className={`icon ${css[iconName]} icon-${size ? size : `r`} icon-${inline ? `i` : `b`}`} style={{color: color}}></i>
}

export default Icons;
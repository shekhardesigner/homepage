/**
 * Component: Icons
 */

import React from 'react';
import css from './icons.module.css'

export default ({ name, size, color }) => {
    const iconName = `gg${name}`;
    return <i className={`icon ${css[iconName]} icon-${size}`} style={{color: color}}></i>
}
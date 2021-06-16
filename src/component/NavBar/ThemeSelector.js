import React from 'react';

import IconButton from "@material-ui/core/IconButton";
import Brightness3Icon from '@material-ui/icons/Brightness3';

const ThemeSelector = (props) => {
    const {switch_theme} = props

    return (
        <IconButton aria-label="switch Theme" onClick={switch_theme} style={{marginRight: 15, color: '#fff'}}>
            <Brightness3Icon />
        </IconButton>
    );
};

export default ThemeSelector;

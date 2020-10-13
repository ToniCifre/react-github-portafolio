import React from 'react';

import IconButton from "@material-ui/core/IconButton";
import Brightness3Icon from '@material-ui/icons/Brightness3';

const ThemeSelector = (props) => {
    const {switchTheme} = props

    return (
        <IconButton aria-label="switch Theme" onClick={switchTheme}  {...props}>
            <Brightness3Icon />
        </IconButton>
    );
};

export default ThemeSelector;

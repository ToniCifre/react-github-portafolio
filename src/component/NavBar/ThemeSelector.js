import React from 'react';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import { useTranslations } from 'context-multi-language';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";

const ThemeSelector = (props) => {
    const {switchTheme} = props

    return (
        <IconButton aria-label="switch Theme" onClick={switchTheme}  {...props}>
            <Brightness3Icon />
        </IconButton>
    );
};

export default ThemeSelector;

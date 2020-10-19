import React from 'react';
import {Link} from "react-router-dom";

import Menu from '@material-ui/core/Menu';
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from "@material-ui/core/IconButton";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import makeStyles from "@material-ui/core/styles/makeStyles";

import AssessmentIcon from '@material-ui/icons/Assessment';
import Brightness3Icon from "@material-ui/icons/Brightness3";
import DescriptionIcon from '@material-ui/icons/Description';

import LanguageSelector from "./LanguageSelector";


const StyledMenu = ((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
    }, link: {
        color: '#fff',
        textDecoration: 'none',
    }
}));

export default function ButtonMenu(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const {translator, switch_theme} = props

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <IconButton
                aria-haspopup="true"
                variant="contained"
                onClick={handleClick}
            >
                <MenuIcon style={{color: '#fff'}}/>
            </IconButton>
            <StyledMenu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                style={{marginTop:8}}
            >
                <Link to='/' className={classes.link}>
                    <MenuItem onClick={handleClose} >
                        <ListItemIcon>
                            <DescriptionIcon fontSize="small" style={{color:'#fff'}}/>
                        </ListItemIcon>
                        <ListItemText primary={translator.resume} />
                    </MenuItem>
                </Link>
                <Link to='/github' className={classes.link}>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <AssessmentIcon fontSize="small" style={{color:'#fff'}}/>
                        </ListItemIcon>
                        <ListItemText primary={translator.repository} />
                    </MenuItem>
                </Link>

                <MenuItem onClick={() => {handleClose();switch_theme();}}>
                    <ListItemIcon>
                        <Brightness3Icon fontSize="small" style={{color:'#fff'}}/>
                    </ListItemIcon>
                    <ListItemText primary={translator.switch_theme} style={{color:'#fff'}}/>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                    <LanguageSelector />
                </MenuItem>
            </StyledMenu>
        </div>
    );
}

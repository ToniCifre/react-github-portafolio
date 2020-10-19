import React, {useState} from 'react';
import {Link} from "react-router-dom";

import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import makeStyles from "@material-ui/core/styles/makeStyles";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import ButtonMenu from "./ButtonMenu";
import ThemeSelector from "./ThemeSelector";
import LanguageSelector from "./LanguageSelector";


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#00000099'
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: '#fff'
    },
    options: {
        flexGrow: 1,
        textAlign: "center",
    },
    link: {
        color: '#fff',
        margin: '0 10px',
        textDecoration: 'none'
    },
    whiteColor: {
        color: '#fff'
    }
}));

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

export default function NavBar(props) {
    const classes = useStyles();
    const [width, setWidth] = useState(window.innerWidth);

    const {translator, switch_theme} = props

    const updateWidth = () => {
        setWidth(window.innerWidth);
    };

    React.useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    });

    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar className={classes.root}>
                    <Toolbar>
                        {width < 630? <ButtonMenu translator={translator} switch_theme={switch_theme}/> : ''}

                        <Typography variant="h5" align={"center"} style={width < 630? {width: '100%'} : {}} className={classes.whiteColor} >Toni Cifre</Typography>

                        {width >= 630?
                            <div  className={classes.options}>
                                <div style={{display: 'inline-flex'}}>
                                    <Link to='/' className={classes.link}>
                                        <Typography variant="h6" >{translator.resume}</Typography>
                                    </Link>
                                    <Link to='/github' className={classes.link}>
                                        <Typography variant="h6" >{translator.repository}</Typography>
                                    </Link>
                                </div>
                            </div>

                            : ''}
                        {width >= 630?
                            <div>
                                <ThemeSelector switch_theme={switch_theme} style={{marginRight: 15, color: '#fff'}}/>
                                <LanguageSelector />
                            </div>
                            : ''}

                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            {/*<Toolbar />*/}
        </React.Fragment>
    );
}

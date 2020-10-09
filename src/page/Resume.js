import React, {useEffect, useState} from 'react';

import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import {Alert, AlertTitle} from "@material-ui/lab";
import Container from "@material-ui/core/Container";
import {Box} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";



const Resume = (translator) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            backgroundColor: '#00000099'
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            textAlign: "center",
        },
        link: {
            textDecoration: 'none',
            color: '#fff',
            margin: '0 10px'
        }
    }));

    const classes = useStyles();

    return (
        <Container maxWidth={"md"}>
            <Typography variant="h1">. . .</Typography>

        </Container>
    )


};
export default Resume;

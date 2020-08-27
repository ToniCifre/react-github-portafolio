import React, {useEffect, useState} from 'react';

import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import {Alert, AlertTitle} from "@material-ui/lab";

import GithubRepo from "./GithubRepo";
import Loader from "../component/Loading";


import Container from "@material-ui/core/Container";
import {Box} from "@material-ui/core";
import GithubMain from "../component/GithubMain";

const {Octokit} = require("@octokit/rest");


const Github = (translator) => {
    const [owner, setOwner] = useState(0);
    const [error, setError] = useState(0);

    const octokit = new Octokit({auth: "Your_Token_ID",});

    useEffect(() => {
        octokit.request("/user").then(value => {
            setOwner(value.data.login);
        }).catch(reason => {
            console.log(reason.toString());
            if(reason.toString() === 'HttpError: Bad credentials'){
                setError("Bad credentials.\nGithub API key is wrong.");
            }else{
                setError(reason.toString());
            }
        });
    }, []);

    if (error){
        return (
            <Container maxWidth={"md"}>
                <Box bgcolor='rgb(253, 236, 234)' border={1} borderColor="grey.300" boxShadow={2} borderRadius="20px" p={[2, 3, 4]}>
                    <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        {error}
                    </Alert>
                </Box>
            </Container>
        )
    }else if (owner){
        return (
            <Router>
                <Switch>
                    <Route path="/github/:name"
                           render={({ match }) =>
                               <GithubRepo translator={translator} octokit={octokit} owner={owner} repo={match.params.name}/>
                           } />

                    <Route path="/github">
                        <GithubMain translator={translator} octokit={octokit}/>
                    </Route>
                    <Route exact path="/">
                        <Redirect to={'/github'}/>
                    </Route>
                    <Route path='*' exact>
                        <h1>Page not found</h1>
                    </Route>
                </Switch>
            </Router>
        )
    }else {
        return <Loader {...{size: 200, center: true}} />
    }

};
export default Github;

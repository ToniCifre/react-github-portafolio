import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import GithubRepo from "./GithubRepo";
import Loader from "../component/NavBar/Loading";
import GithubMain from "../component/Github/GithubMain";

import {Box} from "@material-ui/core";
import {Alert, AlertTitle} from "@material-ui/lab";
import Container from "@material-ui/core/Container";

const {Octokit} = require("@octokit/rest");


const Github = (translator) => {
    const [owner, setOwner] = useState(0);
    const [error, setError] = useState(0);

    const octokit = new Octokit({auth: "7ebc239d19be4b7393a51c07b510275339569df4",});

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
                    <Alert severity="error" style={{borderRadius:20}}>
                        <AlertTitle>Error</AlertTitle>
                        {error}
                    </Alert>
            </Container>
        )
    }else if (owner){
        return (
            <Router>
                <Switch>

                    <Route exact path="/github">
                        <GithubMain translator={translator} octokit={octokit}/>
                    </Route>

                    <Route path="/github/:name" exact
                           render={({ match }) =>
                               <GithubRepo translator={translator} octokit={octokit} owner={owner} repo={match.params.name}/>
                           } />

                </Switch>
            </Router>
        )
    }else {
        return <Loader {...{size: 200, center: true}} />
    }

};
export default Github;

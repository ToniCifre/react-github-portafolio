import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Container from "@material-ui/core/Container";
import {Alert, AlertTitle} from "@material-ui/lab";

import GithubRepo from "./GithubRepo";
import Loader from "../component/Loading";
import GithubMain from "../component/Github/GithubMain";

const {Octokit} = require("@octokit/rest");


const Github = (translator) => {
    const [owner, setOwner] = useState(0);
    const [error, setError] = useState(0);

    const octokit = new Octokit({auth: "537d0fd5d8dc5d58d622a0fa74a72f829b00680e",});

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

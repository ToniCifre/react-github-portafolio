import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import GithubRepo from "../component/Github/GithubRepo";
import GithubMain from "../component/Github/GithubMain";

const {Octokit} = require("@octokit/rest");


const Github = (translator) => {
    const octokit = new Octokit({auth:
            process.env.REACT_APP_GITHUB_API_1 +
            process.env.REACT_APP_GITHUB_API_2 +
            process.env.REACT_APP_GITHUB_API_3 +
            process.env.REACT_APP_GITHUB_API_4,});

    return (
            <Router>
                <Switch>

                    <Route exact path="/github">
                        <GithubMain translator={translator} octokit={octokit}/>
                    </Route>

                    <Route path="/github/:name"
                           render={({ match }) =>
                               <GithubRepo translator={translator} octokit={octokit} repo={match.params.name}/>
                           } />

                </Switch>
            </Router>
        )
};
export default Github;

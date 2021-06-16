import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import { ThemeProvider } from "@material-ui/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

import {useTranslations} from 'context-multi-language';

import SEO from "./component/SEO";
import Resume from "./page/Resume";
import Loader from "./component/Loading";
import NavBar from "./component/NavBar/NavBar";
import CustomizedSnackbar from "./component/Snackbars";
import GithubMain from "./component/Github/GithubMain";
import GithubRepo from "./component/Github/GithubRepo";

require('dotenv').config()

const {Octokit} = require("@octokit/rest");

const App = () => {
    const {t} = useTranslations();

    const [darkState, setDarkState] = useState(false);
    const palletType = darkState ? "dark" : "light";
    const darkerBackgroundColor = darkState ? '#262626' : '#fff';
    const darkTheme = createMuiTheme({
        palette: {
            type: palletType,
            background: {
                darker: darkerBackgroundColor,
            }
        }
    });

    const switch_theme = () => {
        setDarkState(!darkState);
    }

    if (Object.entries(t).length !== 0) {
        const octokit = new Octokit({auth:
                process.env.REACT_APP_GITHUB_API_1 +
                process.env.REACT_APP_GITHUB_API_2 +
                process.env.REACT_APP_GITHUB_API_3 +
                process.env.REACT_APP_GITHUB_API_4,});
        return (
            <main>
                <SEO/>
                <ThemeProvider theme={darkTheme}>
                    <div className="App">
                        <Router>
                            <CustomizedSnackbar message={"Esta página aún está en progreso"} time={6000} severity='info'/>
                            <NavBar translator={t.navBar} switch_theme={switch_theme}/>

                            <Switch>
                                <Route exact path="/github">
                                    <GithubMain translator={t.github} octokit={octokit}/>
                                </Route>

                                <Route path="/github/:name"
                                       render={({ match }) =>
                                           <GithubRepo translator={t.github} octokit={octokit} repo={match.params.name}/>
                                       } />
                                <Route exact path="/">
                                    <Resume translator={t.resume}/>
                                </Route>

                                <Route path='*' exact>
                                    <h1>Page not found</h1>
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </ThemeProvider>
            </main>

        );
    } else {
        return <ThemeProvider theme={darkTheme}> <Loader {...{size: 200, center: true}} />; </ThemeProvider>
    }
};

export default App;

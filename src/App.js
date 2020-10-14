import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {ThemeProvider} from "@material-ui/styles";
import orange from "@material-ui/core/colors/orange";
import lightBlue from "@material-ui/core/colors/lightBlue";
import deepPurple from "@material-ui/core/colors/deepPurple";
import deepOrange from "@material-ui/core/colors/deepOrange";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

import {useTranslations} from 'context-multi-language';

import Resume from "./page/Resume";
import Github from "./page/Github";
import NavBar from "./component/NavBar/NavBar";
import Loader from "./component/Loading";
import Toolbar from "@material-ui/core/Toolbar";


const App = () => {
    const {t} = useTranslations();


    const [darkState, setDarkState] = useState(false);
    const palletType = darkState ? "dark" : "light";
    const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
    const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];
    const darkerBackgroundColor = darkState ? '#262626' : '#fff';
    const darkTheme = createMuiTheme({
        palette: {
            type: palletType,
            primary: {
                main: mainPrimaryColor
            },
            secondary: {
                main: mainSecondaryColor
            },
            background: {
                darker: darkerBackgroundColor,
            }
        }
    });

    const switch_theme = () => {
        setDarkState(!darkState);
    }

    if (Object.entries(t).length !== 0) {
        return (
            <ThemeProvider theme={darkTheme}>

                <div className="App">
                    <Router>
                        <NavBar translator={t.navBar} switch_theme={switch_theme}/>

                        <Switch>
                            <Route path="/github">
                                <Toolbar />
                                <Github translator={t.github}/>
                            </Route>

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

        );
    } else {
        return <ThemeProvider theme={darkTheme}> <Loader {...{size: 200, center: true}} />; </ThemeProvider>

    }
};

export default App;

import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Helmet from "react-helmet";

import Toolbar from "@material-ui/core/Toolbar";
import {ThemeProvider} from "@material-ui/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

import {useTranslations} from 'context-multi-language';

import Resume from "./page/Resume";
import Github from "./page/Github";
import NavBar from "./component/NavBar/NavBar";
import Loader from "./component/Loading";
import CustomizedSnackbar from "./component/Snackbars";


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
        return (
            <main>
                <Helmet>
                    {/*{!--HTML Meta Tags --}*/}
                    <title>Toni Cifre Portfolio</title>
                    <meta name="description" content="Curriculum vitae y portfolio web de Toni Cifre creado con React, Material-UI y Github-API"/>
                    {/*{!--Google / Search Engine Tags --}*/}
                    <meta itemprop="name" content="Toni Cifre Portfolio"/>
                    <meta itemprop="description" content="Curriculum vitae y portfolio web de Toni Cifre creado con React, Material-UI y Github-API"/>
                    <meta itemprop="image" content=""/>

                    {/*{!--Facebook Meta Tags --}*/}
                    <meta property="og:url" content="tonicifre.com"/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:title" content="Toni Cifre Portfolio"/>
                    <meta property="og:description" content="Curriculum vitae y portfolio web de Toni Cifre creado con React, Material-UI y Github-API"/>
                    <meta property="og:image" content=""/>

                    {/*{!--Twitter Meta Tags --}*/}
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:title" content="Toni Cifre Portfolio"/>
                    <meta name="twitter:description" content="Curriculum vitae y portfolio web de Toni Cifre creado con React, Material-UI y Github-API"/>
                    <meta name="twitter:image" content=""/>

                </Helmet>

                <ThemeProvider theme={darkTheme}>
                    <div className="App">
                        <Router>
                            <CustomizedSnackbar message={"Esta página aún está en progreso"}/>
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
            </main>

        );
    } else {
        return <ThemeProvider theme={darkTheme}> <Loader {...{size: 200, center: true}} />; </ThemeProvider>

    }
};

export default App;

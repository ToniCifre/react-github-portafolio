import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import './css/App.css';

import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import { useTranslations } from 'context-multi-language';
import Example from "./component/Example";
import Github from "./page/Github";
import Loader from "./component/Loading";


const App = () => {
  const { t, changeLanguage, languages } = useTranslations();

    if (Object.entries(t).length !== 0){
        return (
            <div className="App">

                <ButtonGroup>
                    {languages.map((language) => (
                        <Button key={language} onClick={() => changeLanguage(language)}>
                            {language}
                        </Button>
                    ))}
                </ButtonGroup>


                <Router>
                    <Switch>

                        <Route exact path="/trad">
                            <Example t={t}/>
                        </Route>
                        <Route path="/github">
                            <Github translator={t.github}/>
                        </Route>
                        <Route exact path="/">
                            <Redirect to={'/github'}/>
                        </Route>
                        <Route path='*' exact>
                            <h1>Page not found</h1>
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }else {
        return <Loader {...{size: 200, center: true}} />;
    }
};

export default App;

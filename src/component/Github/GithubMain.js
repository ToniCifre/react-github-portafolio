import React, {Component} from 'react';

import {Alert, AlertTitle} from '@material-ui/lab';
import Container from "@material-ui/core/Container";

import GithubMainTop from "./GithubMainTop";
import GithubMainTable from "./GithubMainTable";


class GithubMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: '',
            isLoaded: false,
            data: null
        };
    }

    componentDidMount() {
        const octokit = this.props.octokit;

        octokit.repos.listForAuthenticatedUser({type: 'owner', sort: 'created'}).then(value => {
            console.log(value.data);
            this.setState({data: value.data, isLoaded: true})
        }).catch(reason => {
            console.log(reason.toString());
            this.setState({error: reason.toString(), isLoaded: true})
        });
    }

    render() {
        const {error} = this.state;

        if (error !== '') {
            return (
                <Alert severity="error" style={{borderRadius:20}}>
                    <AlertTitle>Error</AlertTitle>
                    {error}
                </Alert>
            )
        }else {
            const {data} = this.state;
            const {translator} = this.props.translator;


            return (
                <Container maxWidth={"lg"} style={{marginTop: 25, marginBottom: 25}}>
                    <GithubMainTop translator={translator} repoList={data}/>
                    <GithubMainTable translator={translator} repoList={data}/>
                </Container>
            )
        }
    }


}

export default GithubMain;

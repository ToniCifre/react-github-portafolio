import React, {Component} from 'react';

import {Box} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import GitHubIcon from "@material-ui/icons/GitHub";

import marked from "marked";
import {Base64} from 'js-base64';

import Loader from "../component/Loading";
import GithubRepoLanguages from "../component/GithubRepoLanguages";
import GithubRepoReadme from "../component/GithubRepoReadme";
import GithubRepoDescription from "../component/GithubRepoDescription";
import {Alert, AlertTitle} from "@material-ui/lab";
import Typography from "@material-ui/core/Typography";


class GithubRepo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            repo: '',
            error: '',

            languages: {},
            errorLanguages: '',
            isLoadedLanguages: false,

            readme: '',
            errorReadme: '',
            isLoadedReadme: false,
        };

    }

    componentDidMount() {
        const {octokit, owner, repo} = this.props;

        octokit.repos.get({owner, repo})
            .then(value => {

                octokit.repos.listLanguages({owner, repo})
                    .then(value => {
                        this.setState({languages: value.data, isLoadedLanguages: true})
                    }).catch(reason => {
                    console.log(reason.toString());
                    this.setState({errorLanguages: reason.toString(), isLoadedLanguages: true})
                });

                octokit.repos.getReadme({owner, repo,})
                    .then(value => {
                        this.setState({readme: marked(Base64.decode(value.data.content)), isLoadedReadme: true});
                    }).catch(reason => {
                    console.log(reason.toString());
                    this.setState({errorReadme: reason.toString(), isLoadedReadme: true})
                });

                this.setState({repo: value.data})
            }).catch(reason => {
                console.log(reason.toString());
                this.setState({error: reason.toString()})
        });

    }

    render() {
        let { error } = this.state;

        const {translator} = this.props.translator;

        if (error){

            if (error === 'HttpError: Not Found') {
                error = translator.noRepo
            }

            return (
                <Container maxWidth={"md"} style={{marginTop: 25, marginBottom: 25}}>
                    <h1>{this.props.repo}</h1>

                    <Box bgcolor='rgb(253, 236, 234)' border={1} borderColor="grey.300" boxShadow={1} borderRadius="20px" p={[2, 3, 4]}>
                        <Alert severity="error">
                            <AlertTitle>Error</AlertTitle>
                            {error}
                        </Alert>
                    </Box>
                </Container>
                )
        }else {

            const {
                repo,
                languages, errorLanguages, isLoadedLanguages,
                readme, isLoadedReadme
            } = this.state;
            let { errorReadme } = this.state;

            if (errorReadme === 'HttpError: Not Found'){
                errorReadme = translator.noReadme;
            }

            return (
                <Container maxWidth={"md"} style={{marginTop: 25, marginBottom: 25}}>
                    {!isLoadedLanguages || !isLoadedReadme ? <Loader {...{size: 200, center: true}} /> : null}

                    <Grid container alignItems="stretch" spacing={3} style={{marginBottom: 8}}>
                        <Grid item xs={12} sm={8} md={9} zeroMinWidth={true}>
                            <Typography variant="h3" component="h4" gutterBottom>
                                {this.props.repo}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3} style={{margin: "auto"}} zeroMinWidth={true}>
                            <Button href={repo.html_url}>
                                <GitHubIcon style={{marginRight: 6}}/>{translator.viewGithub}
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container alignItems="stretch" spacing={3} style={{marginBottom: 8}}>
                        <Grid item xs={12} sm={7} md={8} style={{display: "grid"}} zeroMinWidth={true}>
                            <GithubRepoDescription translator={translator} description={repo.description}/>
                        </Grid>
                        <Grid item xs={12} sm={5} md={4} zeroMinWidth={true}>
                            <GithubRepoLanguages translator={translator} languages={languages} error={errorLanguages}/>
                        </Grid>
                    </Grid>

                    <GithubRepoReadme readme={readme} error={errorReadme}/>

                </Container>
            )
        }
    }


}

export default GithubRepo;

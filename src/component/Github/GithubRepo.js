import React, {Component} from 'react';
import {Link} from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {Alert, AlertTitle} from "@material-ui/lab";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import marked from "marked";
import {Base64} from 'js-base64';

import Loader from "../Loading";
import GithubRepoReadme from "./GithubRepoReadme";
import GithubRepoLanguages from "./GithubRepoLanguages";
import GithubRepoDescription from "./GithubRepoDescription";
import CustomizedSnackbar from "../Snackbars";

class GithubRepo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            repo: '',
            errorRepo: '',
            isLoadedRepo:false,

            languages: {},
            errorLanguages: '',
            isLoadedLanguages: false,

            readme: '',
            errorReadme: '',
            isLoadedReadme: false,
        };

    }

    componentDidMount() {
        const {octokit, repo} = this.props;
        const owner = process.env.REACT_APP_GITHUB_OWNER

        octokit.repos.get({owner, repo})
            .then(value => {



                this.setState({repo: value.data})
            }).catch(reason => {
                console.log(reason.toString());
                this.setState({errorRepo: reason.toString(), isLoadedRepo: true})
        });
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


    }

    render() {
        const {translator} = this.props;
        let { errorRepo } = this.state;

        if (errorRepo){

            if (errorRepo === 'HttpError: Not Found') {
                errorRepo = translator.noRepo
            }

            return (
                <Container maxWidth={"md"} style={{marginTop: 85, marginBottom: 25}}>
                    <Grid container>
                        <Grid item sm={1}>
                            <IconButton aria-label="Back">
                                <Link to='/github' style={{height: 24, width:24, color:'inherit'}}><ArrowBackIcon /></Link>
                            </IconButton>
                        </Grid>
                        <Grid item sm={11}>
                            <Typography variant="h3" component="h4" gutterBottom>{this.props.repo}</Typography>
                        </Grid>
                    </Grid>

                        <Alert severity="error" style={{borderRadius:20}}>
                            <AlertTitle>Error</AlertTitle>
                            {errorRepo}
                        </Alert>
                </Container>
                )
        }else {
            const {
                repo, isLoadedRepo,
                languages, errorLanguages, isLoadedLanguages,
                readme, isLoadedReadme
            } = this.state;
            let { errorReadme } = this.state;

            if (errorReadme === 'HttpError: Not Found'){
                errorReadme = translator.noReadme;
            }

            return (
                <Container maxWidth={"md"} style={{marginTop: 85, marginBottom: 25}}>
                    {!isLoadedLanguages || !isLoadedReadme || isLoadedRepo ? <Loader {...{size: 200, center: true}} /> : null}

                    {repo.private && <CustomizedSnackbar message={"En los repositorios privados las imagenes del README no se mostraran"} time={8000}/>}

                    <Grid container alignItems="stretch" spacing={3} style={{marginBottom: 8}}>
                        <Grid item sm={1} md={1} zeroMinWidth >
                            <IconButton aria-label="Back">
                                <Link to='/github' style={{height: 24, width:24, color:'inherit'}}><ArrowBackIcon /></Link>
                            </IconButton>
                        </Grid>
                        <Grid item sm={11} md={8} zeroMinWidth>
                            <Typography variant="h3" component="h4" gutterBottom>{this.props.repo}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} style={{margin: "auto"}} zeroMinWidth={true}>
                            {repo.private ? '' :
                                <Button href={repo.html_url} >
                                    <GitHubIcon style={{marginRight: 6}}/>{translator.viewGithub}
                                </Button>
                            }
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

                    <GithubRepoReadme repo={this.props.repo} readme={readme} error={errorReadme}/>

                </Container>
            )
        }
    }


}

export default GithubRepo;

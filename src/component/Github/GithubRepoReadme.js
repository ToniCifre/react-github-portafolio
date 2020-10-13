import React, {Component} from 'react';

import {Box} from "@material-ui/core";
import { Alert, AlertTitle } from '@material-ui/lab';

import '../../css/github-markdown.css'


class GithubRepoReadme extends Component{

    render() {
        const { error } = this.props;

        if (error !== '') {
            return (
                <Box border={1} borderColor="grey.300" boxShadow={2} borderRadius="20px" p={2}>
                    <h3>README.md</h3>
                        <Alert severity="info" style={{borderRadius:20}}>
                            <AlertTitle>Info</AlertTitle>
                            {error}
                        </Alert>
                </Box>

            )
        } else {
            const { readme } = this.props;

            return (
                <Box border={1} borderColor="background.darker" bgcolor="background.darker" boxShadow={2} borderRadius="20px" p={[1, 2, 3]}>
                    <h3>README.md</h3>

                    <article className={'markdown-body'} style={{padding: 10}} dangerouslySetInnerHTML={{__html: readme}}/>
                </Box>
            )
        }
    }


}
export default GithubRepoReadme;

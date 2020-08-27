import React, {Component} from 'react';

import { Alert, AlertTitle } from '@material-ui/lab';

import 'github-markdown-css/github-markdown.css'
import {Box} from "@material-ui/core";


class GithubRepoReadme extends Component{

    render() {
        const { error } = this.props;

        if (error !== '') {
            return (
                <Box border={1} borderColor="grey.300" boxShadow={2} borderRadius="20px" p={2}>
                    <h3>README.md</h3>
                    <Box bgcolor='rgb(232, 244, 253)' border={1} borderColor="grey.300" boxShadow={1} borderRadius="20px" p={[2, 3, 4]}>
                        <Alert severity="info">
                            <AlertTitle>Info</AlertTitle>
                            {error}
                        </Alert>
                    </Box>
                </Box>

            )
        } else {
            const { readme } = this.props;

            return (
                <Box border={1} borderColor="grey.300" boxShadow={2} borderRadius="20px" p={[1, 2, 3]}>
                    <h3>README.md</h3>
                    <article className={'markdown-body'} style={{padding: 10}} dangerouslySetInnerHTML={{__html: readme}}/>
                </Box>
            )
        }
    }


}
export default GithubRepoReadme;

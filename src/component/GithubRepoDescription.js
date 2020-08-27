import React, {Component} from 'react';

import { Alert, AlertTitle } from '@material-ui/lab';

import 'github-markdown-css/github-markdown.css'
import {Box} from "@material-ui/core";


class GithubRepoDescription extends Component{

    render() {
        const { description, translator } = this.props;

        if (description === null) {
            return (
                <Box border={1} borderColor="grey.300" boxShadow={2} borderRadius="20px" p={2}>
                    <h3>{translator.description}</h3>
                    <Box bgcolor='rgb(232, 244, 253)' border={1} borderColor="grey.300" boxShadow={1} borderRadius="20px" p={2}>
                        <Alert severity="info">
                            <AlertTitle>Info</AlertTitle>
                            {translator.noDescript}
                        </Alert>
                    </Box>
                </Box>

            )
        } else {
            return (
                <Box border={1} borderColor="grey.300" boxShadow={2} borderRadius="20px" p={[1, 2, 3]}>
                    <h3>{translator.description}</h3>
                    {description}
                    <br/>
                    <br/>
                </Box>
            )
        }
    }


}
export default GithubRepoDescription;

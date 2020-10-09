import React, {Component} from 'react';

import { Alert, AlertTitle } from '@material-ui/lab';

import {Box} from "@material-ui/core";


class GithubRepoDescription extends Component{

    render() {
        const { description, translator } = this.props;

        if (description === null) {
            return (
                <Box border={1} borderColor="background.darker" bgcolor="background.darker" boxShadow={2} borderRadius="20px" p={2}>
                    <h3>{translator.description}</h3>
                    <Alert severity="info" style={{borderRadius:20}}>
                        <AlertTitle>Info</AlertTitle>
                        {translator.noDescript}
                    </Alert>
                </Box>
            )
        } else {
            return (
                <Box border={1}borderColor="background.darker" bgcolor="background.darker" boxShadow={2} borderRadius="20px" p={[1, 2, 3]}>
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

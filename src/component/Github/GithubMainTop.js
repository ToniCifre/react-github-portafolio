import React, {Component} from 'react';

import {Box} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";

import GithubMainTopCard from "./GithubMainTopCard";
import GithubMainTopCardSkeleton from "./GithubMainTopCardSkeleton";


class GithubMainTop extends Component {

    render() {
        const {repoList, translator} = this.props;
        const top_list = Object.keys(translator.repoDescription);


        return (
            <Box border={1} borderColor="background.darker" bgcolor="background.darker" boxShadow={2} borderRadius="20px" p={2} style={{paddingBottom: 30}}>
                <Typography variant="h3" gutterBottom align={"center"}>
                    {translator.topRepo}
                </Typography>
                <Grid container direction="row" justify="center" alignItems="stretch" spacing={3} style={{marginTop: 3}}>
                    {repoList ?
                        repoList.filter(data => top_list.includes(data.name)).map((data) => (
                            <Grid item key={data.id}>
                                <GithubMainTopCard data={data} translator={translator}/>
                            </Grid>
                        ))
                        :
                        top_list.map((data, index) => (
                            <Grid item key={index}>
                                <GithubMainTopCardSkeleton/>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        )
    }

}

export default GithubMainTop;

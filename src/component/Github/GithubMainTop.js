import React, {Component} from 'react';

import {Box} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Skeleton from "@material-ui/lab/Skeleton";
import Typography from "@material-ui/core/Typography";

import GithubMainTopCard from "./GithubMainTopCard";


class GithubMainTop extends Component {

    render() {
        const {repoList} = this.props;

        const top_list = ["Erlang_Chat", "GameBoyJs", "HexGame", "home-cloud", "B1"];

        if (!repoList) {
            return (
                <Box border={1} borderColor="background.paper" bgcolor="background.darker" boxShadow={2} borderRadius="20px" p={2}  style={{paddingBottom: 30}}>
                    <Typography variant="h2" component="h3" gutterBottom>
                        <Skeleton/>
                    </Typography>
                    <Grid container direction="row" justify="center" alignItems="stretch" spacing={3}>
                        {top_list.map((data) => (
                            <Grid item key={data}>
                                <GithubMainTopCard key={data} data={false} translator={null}/>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            )
        } else {
            const {translator} = this.props;
            return (
                <Box border={1} borderColor="background.darker" bgcolor="background.darker" boxShadow={2} borderRadius="20px" p={2} style={{paddingBottom: 30}}>
                    <Typography variant="h3" gutterBottom align={"center"}>
                        {translator.topRepo}
                    </Typography>
                    <Grid container direction="row" justify="center" alignItems="stretch" spacing={3} style={{marginTop: 3}}>
                        {repoList.filter(data => top_list.includes(data.name)).map((data) => (
                            <Grid item key={data.id}>
                                <GithubMainTopCard key={data.id} data={data} translator={translator}/>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            )
        }
    }


}

export default GithubMainTop;

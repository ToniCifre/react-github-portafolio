import React from 'react';

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {Box} from "@material-ui/core";

import ResumeAbilitiesPunctuation from "./ResumeAbilitiesPunctuation";

const ResumeAbilities = (props) => {
    const {translator} = props

    return (
        <Box border={1} borderColor="background.darker" bgcolor="background.darker" boxShadow={2} borderRadius="20px" p={2} style={{paddingBottom: 30}}>
            <Typography variant="h3" gutterBottom align={"center"}>
                {translator.title}
            </Typography>
            <Grid container justify="center" spacing={3} style={{marginTop: 3}}>
                {translator.abilitiesList.map((data) => (
                    <Grid item key={data[0]} style={{ display: 'inline' , marginRight: '7px'}}>
                        <Typography variant="h6" gutterBottom style={{ display: 'inline' }}>{data[0]}: </Typography>
                        <ResumeAbilitiesPunctuation key={data} points={data[1]}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )


};
export default ResumeAbilities;
import React from 'react';

import {Box} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


const ResumeProgramming = (props) => {
    const {translator} = props
    return (
        <Box border={1} borderColor="background.darker" bgcolor="background.darker" boxShadow={2} borderRadius="20px" p={[1, 2, 3]} m={[1,2]} style={{paddingBottom: 30}}>
            <Typography variant="h3" gutterBottom align={"center"}>
                {translator.title}
            </Typography>
            <Typography variant="subtitle1" color='textSecondary' align={"center"}>
                {translator.description}
            </Typography>
            <Grid container justify="center" spacing={5} style={{marginTop: 3}}>
                {translator.languagesList.map((data, index) => (
                    <Grid item key={index} xs={12}>
                        <Typography variant="h6" gutterBottom align={"center"}>
                            {data[0]}
                        </Typography>
                        {data[1].map((row, index) => (
                            <Typography key={index} variant="body1" gutterBottom align={"center"}>
                                {row}
                            </Typography>
                        ))}
                    </Grid>
                ))}
            </Grid>
        </Box>
    )


};
export default ResumeProgramming;

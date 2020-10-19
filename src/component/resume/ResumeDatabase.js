import React from 'react';

import {Box} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


const ResumeDatabase = (props) => {
    const {translator} = props
    return (
        <Box border={1} borderColor="background.darker" bgcolor="background.darker" boxShadow={2} borderRadius="20px" p={[1, 2, 4]} m={[1,2]} style={{paddingBottom: 30}}>
            <Typography variant="h3" gutterBottom align={"center"}>
                {translator.title}
            </Typography>
            <Typography variant="subtitle1" color='textSecondary' align={"center"}>
                {translator.description}
            </Typography>
            <Grid container justify="center" spacing={5} style={{marginTop: 3}}>
                {translator.databaseList.map((data, index) => (
                    <Grid item key={index} xs={12}>
                        <Typography variant="h6" align={"center"}>
                            {data[0]}
                        </Typography>
                        <Typography variant="body1" align={"center"}>
                            {data[1]}
                        </Typography>

                    </Grid>
                ))}
            </Grid>
        </Box>
    )


};
export default ResumeDatabase;

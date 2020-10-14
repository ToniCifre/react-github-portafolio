import React from 'react';

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {Box} from "@material-ui/core";

import ResumeAbilitiesPunctuation from "./ResumeAbilitiesPunctuation";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const ResumeAbilities = (props) => {
    const {translator} = props
    return (
        <Box border={1} borderColor="background.darker" bgcolor="background.darker" boxShadow={2} borderRadius="20px" p={2} m={[1,3,5]} style={{paddingBottom: 30}}>
            <Typography variant="h3" gutterBottom align={"center"}>
                {translator.title}
            </Typography>
            <Grid container justify="center" spacing={3} style={{marginTop: 3}}>
                {translator.abilitiesList.map((data, index) => (
                    <Grid item key={index} style={{ display: 'inline' , marginRight: '7px'}}>
                        <ListItem>
                            <ListItemText primary={data[0]+':'}/>
                            <ListItemIcon><ResumeAbilitiesPunctuation points={data[1]}/></ListItemIcon>
                        </ListItem>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )


};
export default ResumeAbilities;

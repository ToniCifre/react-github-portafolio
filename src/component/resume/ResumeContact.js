import React from 'react';

import {Box} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import WebIcon from '@material-ui/icons/Web';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "@material-ui/core/Link";


const selectIcon = (contact) =>{
    switch(contact){
        case 'mail': return <MailIcon/>;
        case 'github': return <GitHubIcon/>;
        case 'phone': return <PhoneIcon/>;
        case 'linkedin': return <LinkedInIcon/>;
        case 'web': return <WebIcon />;
        default : return '';
    }
}
const ResumeContact = (props) => {
    const {translator} = props



    return (
        <Box border={1} borderColor="background.darker" bgcolor="background.darker" boxShadow={2} borderRadius="20px" p={2} m={[1,3,5]} style={{paddingBottom: 30}}>
            <Typography variant="h3" gutterBottom align={"center"}>
                {translator.title}
            </Typography>
            <Grid container justify="center" spacing={3} style={{marginTop: 3}}>
                {translator.contactList.map((data,index) => (
                    <Grid item key={index} style={{ display: 'inline' , marginRight: '7px'}}>
                        <ListItem button component='a' href={data[2]}>
                            <ListItemIcon>
                                {selectIcon(data[0])}
                            </ListItemIcon>
                            <ListItemText primary={data[1]} />
                        </ListItem>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )


};
export default ResumeContact;

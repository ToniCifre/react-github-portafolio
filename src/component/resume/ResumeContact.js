import React from 'react';

import {Box} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import WebIcon from '@material-ui/icons/Web';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import useGAEventTracker from "../../useGAEventTracker";


const selectIcon = (contact) =>{
    switch(contact){
        case 'mail': return <MailIcon/>;
        case 'github': return <GitHubIcon/>;
        case 'phone': return <PhoneIcon/>;
        case 'linkedin': return <LinkedInIcon/>;
        case 'web': return <WebIcon />;
        case 'cv': return <DescriptionIcon />;
        default : return '';
    }
}
const ResumeContact = (props) => {
    const {translator} = props

    const GAEventTaker = useGAEventTracker("GithubVisit");


    return (
        <Box border={1} borderColor="background.darker" bgcolor="background.darker" boxShadow={2} borderRadius="20px" p={[1, 2]} m={[1, 2]} style={{paddingBottom: 30}}>
            <Typography variant="h3" gutterBottom align={"center"}>
                {translator.title}
            </Typography>
            <Grid container justify="center" spacing={3} style={{marginTop: 3}}>
                {translator.contactList.map((data,index) => (
                    <Grid item key={index} style={{ display: 'inline' , marginRight: '7px'}}>

                        {data[2] ?
                            <ListItem button component='a' href={data[2]} onClick={(e) => GAEventTaker("ClickContact", data[0])}>
                                <ListItemIcon>
                                    {selectIcon(data[0])}
                                </ListItemIcon>
                                <ListItemText primary={data[1]} />
                            </ListItem>
                            :
                            <ListItem onSelect={(e) => GAEventTaker("SelectContact", data[0])}>
                                <ListItemIcon>
                                    {selectIcon(data[0])}
                                </ListItemIcon>
                                <ListItemText primary={data[1]} />
                            </ListItem>
                        }



                    </Grid>
                ))}
            </Grid>
        </Box>
    )


};
export default ResumeContact;

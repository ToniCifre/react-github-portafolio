import React from 'react';

import {Box, Typography} from "@material-ui/core";

import WebIcon from '@material-ui/icons/Web';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';

import {List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";


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

    return (
        <Box border={1} borderColor="background.darker" bgcolor="background.darker" boxShadow={2} borderRadius="20px" p={[1, 2]} m={[1, 2]} style={{paddingBottom: 30}}>
            <Typography variant="h3" gutterBottom align={"center"}>
                {translator.title}
            </Typography>
                <List style={{marginTop: '3vh', marginBottom: '2vh', textAlign: 'center'}}>
                {translator.contactList.map((data,index) =>
                        data[2] ?
                            <ListItem key={index} button component='a' href={data[2]} className={'MuiListItem-multilist'} >
                                <ListItemIcon>
                                    {selectIcon(data[0])}
                                </ListItemIcon>
                                <ListItemText primary={data[1]}/>
                            </ListItem>
                            :
                            <ListItem key={index} className={'MuiListItem-multilist'} >
                                <ListItemIcon>
                                    {selectIcon(data[0])}
                                </ListItemIcon>
                                <ListItemText primary={data[1]}/>
                            </ListItem>
                )}
                </List>
        </Box>
    )


};
export default ResumeContact;

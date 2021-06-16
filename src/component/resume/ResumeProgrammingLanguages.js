import React from 'react';

import {Box, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const ResumeProgramming = (props) => {
    const {translator} = props
    return (
        <Box border={1} borderColor="background.darker" bgcolor="background.darker" boxShadow={2} borderRadius="20px" p={[1, 3, 8]} m={[1,2]} style={{paddingBottom: 30}}>
            <Typography variant="h3" gutterBottom align={"center"}>{translator.title}</Typography>
            <Typography variant="subtitle1" color='textSecondary' align={"center"}>
                {translator.description}
            </Typography>

            <div style={{marginTop: "5vh", marginBottom: "5vh", paddingLeft:"2vw", paddingRight:"2vw"}}>
                {translator.languagesList.map((data, index) => (
                    <List key={index} dense style={{paddingTop:"3vw", paddingBottom:"3vw"}}>
                        <div style={{display:"inline-flex", marginBottom:15}}>
                            {data['icon'] && <img src={"LanguageIcons/"+data['icon']+".svg"} alt="React Logo"  style={{width:30, height:30, marginRight:10}}/>}
                            <Typography variant="h6" align={"left"}>{data['lang']}</Typography>
                        </div>

                        {data['con'].map((row, index) => (
                            <ListItem key={index}>
                                <ListItemIcon style={{width:35, minWidth:"auto"}}>
                                    <FiberManualRecordIcon style={{width:10}}/>
                                </ListItemIcon>
                                <ListItemText primary={row} style={{flex: 'inherit'}}/>
                            </ListItem>
                        ))}
                    </List>
                ))}
            </div>
        </Box>
    )


};
export default ResumeProgramming;

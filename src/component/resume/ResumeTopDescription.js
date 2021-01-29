import React from 'react';


import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

import bg2 from '../../images/B2.jpg'
import bg3 from '../../images/B3.jpg'
import bg4 from '../../images/B4.jpg'
import bg5 from '../../images/B5.jpg'
import bg6 from '../../images/B6.jpg'
import bg7 from '../../images/B7.jpg'
import bg8 from '../../images/B8.jpg'

const useStyles = makeStyles((theme) => ({
   bgImage: {
       // width: '100vw',
       height: '100vh',
       backgroundPosition: 'center',
       backgroundRepeat: 'no-repeat',
       backgroundSize: 'cover'
    }, container: {
        height: '100%',
        width: '100%',
        position: 'relative'
    }, centerDiv: {
        top: '40%',
        padding: '20px 27px',
        position: 'relative',
        transform: 'translateY(-50%)',
        borderRadius: '32px',
        backgroundColor: '#0c0a0f82'
    }
}));

const ResumeTopDescription = (props) => {
    const classes = useStyles();
    const {description} = props

    const bgImages = [bg2, bg3, bg4, bg5, bg6, bg7, bg8]
    const bgSelected = Math.floor(Math.random() * 7)

    return (
    <div className={classes.bgImage} style={{backgroundImage: `url(${bgImages[bgSelected]})`}}>
        <Container  className={classes.container} maxWidth={"md"}>
            <div className={classes.centerDiv}>
                <Typography variant="h5" align={"center"} style={{color: '#FFF'}}>
                    Toni Cifre
                </Typography>
                <Typography variant="body1" align={"center"} style={{color: '#FFF'}}>
                    {description}
                </Typography>
            </div>
        </Container>
    </div>
)


};
export default ResumeTopDescription;

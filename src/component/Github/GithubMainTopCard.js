import React from 'react';
import {Link} from "react-router-dom";

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';

import LockIcon from '@material-ui/icons/Lock';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles({
    root: {
        maxWidth: 345
    },
    icon: {
        marginRight: 10
    },
    imageMedia: {
        height: 175,
        width: 335,
        borderRadius: 5,
    },
    boxMedia: {
        margin: 5,
        borderRadius: 5,
        height: 175,
        width: 335,
    },
    link: {
        color: 'black',
        textDecoration: 'none',
    }
});

export default function GithubMainTopCard({data, translator}) {
    const classes = useStyles();

    return (
        <Card className={classes.root} bgcolor="textPrimary">
            <Link to={'/github/' + data.name} className={classes.link} >
                <CardActionArea>
                    <Box boxShadow={3} className={classes.boxMedia}>
                        <CardMedia
                            component="img"
                            alt={data.name}
                            height="140"
                            image={process.env.PUBLIC_URL + '/GithupRepoImages/code.jpg'}
                            title={data.name}
                            className={classes.imageMedia}
                        />
                    </Box>
                    <CardContent>
                        <React.Fragment>
                            <Typography gutterBottom variant="h5" color="textPrimary">
                                {data.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {translator.repoDescription[data.name]}
                            </Typography>
                        </React.Fragment>
                    </CardContent>
                </CardActionArea>
            </Link>
            <CardActions>
                <React.Fragment>
                    {data.private ?
                        <Chip icon={<LockIcon/>} label={translator.private} variant="outlined"/>
                        :
                        <Button size="small" href={data.html_url} >
                            <GitHubIcon className={classes.icon}/>
                            {translator.viewGithub}
                        </Button>
                    }
                </React.Fragment>
            </CardActions>
        </Card>
    )
}



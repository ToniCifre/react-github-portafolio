import React from 'react';
import {Link} from "react-router-dom";

import LockIcon from '@material-ui/icons/Lock';
import Chip from '@material-ui/core/Chip';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import GitHubIcon from '@material-ui/icons/GitHub';
import Box from '@material-ui/core/Box';

import code from "../../images/code.jpg"


const useStyles = makeStyles({
    root: {
        maxWidth: 345
    },
    icon: {
        marginRight: 10
    },
    skeletonMedia: {
        width: 335,
        height: 175,
        margin: 5,
        borderRadius: 5,
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

export default function GithubMainTopCard({data, translator }) {
    const classes = useStyles();

    return (
        <Card className={classes.root} bgcolor="textPrimary">
            <Link to={'/github/'+data.name} className={classes.link}>
            <CardActionArea>
                {data ?
                    <Box boxShadow={3} className={classes.boxMedia}>
                        <CardMedia
                            component="img"
                            alt={data.name}
                            height="140"
                            image={code}
                            title={data.name}
                            className={classes.imageMedia}
                        />
                    </Box>

                    :
                    <Skeleton animation="wave" variant="rect" className={classes.skeletonMedia}/>
                }
                <CardContent>
                    {data ?
                        (
                            <React.Fragment>
                                <Typography gutterBottom variant="h5" color="textPrimary">
                                    {data.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {translator.repoDescription[data.name]}
                                </Typography>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <Typography gutterBottom variant="h5">
                                    <Skeleton/>
                                </Typography>
                                <Typography variant="body2">
                                    <Skeleton/>
                                    <Skeleton/>
                                    <Skeleton/>
                                </Typography>
                            </React.Fragment>
                        )
                    }
                </CardContent>
            </CardActionArea>
            </Link>
            <CardActions>
                {data ? (
                    <React.Fragment>

                        {data.private ?
                            <Chip icon={<LockIcon/>}
                                  label={translator.private}
                                  variant="outlined"/>
                            :
                            <Button size="small" href={data.html_url}>
                                <GitHubIcon className={classes.icon}/>
                                {translator.viewGithub}
                            </Button>
                        }
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Skeleton variant="circle">
                            <GitHubIcon className={classes.icon}/>
                        </Skeleton>
                        <Skeleton width="50%">
                            <Typography>.</Typography>
                        </Skeleton>
                    </React.Fragment>
                )}
            </CardActions>
        </Card>
    )
}



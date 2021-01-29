import React from 'react';

import Card from '@material-ui/core/Card';
import Skeleton from '@material-ui/lab/Skeleton';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';

import GitHubIcon from '@material-ui/icons/GitHub';


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
});

export default function GithubMainTopCardSkeleton() {
    const classes = useStyles();

    return (
        <Card className={classes.root} bgcolor="textPrimary">
            <CardActionArea>
                <Skeleton animation="wave" variant="rect" className={classes.skeletonMedia}/>
                <CardContent>
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
                </CardContent>
            </CardActionArea>
            <CardActions>
                <React.Fragment>
                    <Skeleton variant="circle">
                        <GitHubIcon className={classes.icon}/>
                    </Skeleton>
                    <Skeleton width="50%">
                        <Typography>.</Typography>
                    </Skeleton>
                </React.Fragment>
            </CardActions>
        </Card>
    )
}



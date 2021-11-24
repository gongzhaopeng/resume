import React, {Fragment} from 'react';

import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded';

import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import {red, lime} from '@material-ui/core/colors';

import UniformCard from './UniformCard';

import journeyToMars from '../assets/images/journeyToMars.jpeg'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 'auto',
        backgroundColor: lime[300]
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function Profile() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Fragment>
            <UniformCard className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="profile" className={classes.avatar}>
                            P
                        </Avatar>
                    }
                    title="Zhaopeng Gong"
                    titleTypographyProps={{'variant': "h6"}}
                    subheader="October, 1985"
                    subheaderTypographyProps={{'variant': "subtitle2"}}
                />
                <CardMedia
                    className={classes.media}
                    image={journeyToMars}
                    title="Journey To Mars"
                />
                <CardContent>
                    <Typography variant="body1" color="textSecondary" component="p">
                        Coding is a lifestyle.
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        Coding is a philosophy.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon fontSize='large' color="secondary"/>
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            I am a senior software developer armed with versatile architecting/programming
                            skills and experiences.
                        </Typography>
                        <Typography paragraph>
                            So far, within the most of my career, Java has been used predominantly.
                        </Typography>
                        <Typography>
                            I am very familiar with Spring framework, including the related
                            Spring Boot, Spring Cloud, and so on.
                        </Typography>
                    </CardContent>
                </Collapse>
            </UniformCard>
            <UniformCard style={{backgroundColor: lime[100], height: 200}}>
                <Typography>
                    Here is a treasure!
                </Typography>
            </UniformCard>
        </Fragment>
    );
}

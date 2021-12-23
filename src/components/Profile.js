import React, {Fragment} from 'react';

import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from "@material-ui/core/Grid";
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded';
import {DatePicker} from '@material-ui/pickers';

import {useTranslation} from "react-i18next";

import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import {red, lime} from '@material-ui/core/colors';

import UniformCard from './UniformCard';

import avatarImage from '../assets/images/avatar.jpeg'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 'auto', backgroundColor: lime[300]
    }, media: {
        height: 0, paddingTop: '133.385%', // 1279x1706 => 1706/1279 => 133.385%
    }, expand: {
        transform: 'rotate(0deg)', marginLeft: 'auto', transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }, expandOpen: {
        transform: 'rotate(180deg)',
    }, avatar: {
        backgroundColor: red[500],
    },
}));

export default function Profile() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const {t} = useTranslation('me');

    return (<Fragment>
        <UniformCard className={classes.root}>
            <CardHeader
                avatar={<Avatar aria-label="profile" className={classes.avatar}>
                    P
                </Avatar>}
                title={t('me:genInfo.name')}
                titleTypographyProps={{'variant': "h6"}}
                subheader={t('me:genInfo.motto')}
                subheaderTypographyProps={{'variant': "subtitle2"}}
            />
            <CardContent>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <CardMedia
                            className={classes.media}
                            image={avatarImage}
                            title="Avatar"
                        />
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        style={{textAlign: "right"}}
                    >
                        <DatePicker
                            readOnly
                            inputVariant="outlined"
                            label={t('me:genInfo.birth.label')}
                            value={new Date(1985, 9)}
                            views={['year', 'month']}
                        />
                    </Grid>
                </Grid>
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
                        I am very familiar with Spring Framework, including the related
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
    </Fragment>);
}

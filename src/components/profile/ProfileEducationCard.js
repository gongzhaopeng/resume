import React from 'react';

import CardContent from '@material-ui/core/CardContent';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMoreRounded";
import Collapse from "@material-ui/core/Collapse";
import Rating from '@material-ui/lab/Rating';

import {useTranslation} from "react-i18next";

import {makeStyles} from '@material-ui/core/styles';
import clsx from "clsx";
import {lime} from '@material-ui/core/colors';

import UniformCard from '../UniformCard';
import GeneralHorizontalCrossDivider from '../GeneralHorizontalCrossDivider';

import pkuLogo from "../../assets/images/pku-logo.svg"
import englishLevelIcon from '../../assets/images/language-level/english.level.language.icon.png'
import languageReadingIcon from '../../assets/images/language-level/reading.language.icon.png'
import languageWritingIcon from '../../assets/images/language-level/writing.language.icon.png'
import languageListeningIcon from '../../assets/images/language-level/listening.language.icon.png'
import languageSpeakingIcon from '../../assets/images/language-level/speaking.language.icon.png'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: lime[100]
    }, expand: {
        transform: 'rotate(0deg)', marginLeft: 'auto', transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }, expandOpen: {
        transform: 'rotate(180deg)',
    }, pkuLogo: {
        width: 100, height: 100
    }, englishLevelIcon: {
        width: 156, height: 156
    }, languageSkillIcon: {
        width: 48, height: 36
    }
}));

export default function ProfileRunnerCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const {t} = useTranslation('me');

    return (<UniformCard className={classes.root}>
        <CardContent>
            <Grid container spacing={2}>
                <Grid container xs={4} alignContent="center" justifyContent="center">
                    <CardMedia
                        image={pkuLogo}
                        title="PKU Logo"
                        className={classes.pkuLogo}
                    />
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="h6" align="center" color="primary" display="block">
                        {t('me:genInfo.education.college.name')}
                    </Typography>
                    <Typography variant="caption" align="center" color="textSecondary" display="block">
                        {t('me:genInfo.education.college.major')}
                    </Typography>
                    <Typography variant="caption" align="center" color="textSecondary" display="block">
                        {t('me:genInfo.education.college.approach')}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <GeneralHorizontalCrossDivider/>
                </Grid>
                <Grid container xs={4} alignContent="center" justifyContent="center">
                    <Grid container xs={12} justifyContent="center">
                        <CardMedia
                            image={englishLevelIcon}
                            title="English Level Icon"
                            className={classes.englishLevelIcon}
                        />
                    </Grid>
                    <Typography variant="button" align="center" color="primary" display="block">
                        {t('me:genInfo.education.englishLevel.title')}
                    </Typography>
                </Grid>
                <Grid container xs={8} spacing={1} alignItems="center" alignContent="center" justifyContent="center">
                    <Grid item xs={6}>
                        <Grid container alignContent="center" justifyContent="center">
                            <CardMedia
                                image={languageReadingIcon}
                                title="Reading Icon"
                                className={classes.languageSkillIcon}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container justifyContent="center">
                            <Rating defaultValue={4.5} precision={0.5} size='small' readOnly/>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container alignContent="center" justifyContent="center">
                            <CardMedia
                                image={languageWritingIcon}
                                title="Reading Icon"
                                className={classes.languageSkillIcon}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container justifyContent="center">
                            <Rating defaultValue={4} precision={0.5} size='small' readOnly/>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container alignContent="center" justifyContent="center">
                            <CardMedia
                                image={languageListeningIcon}
                                title="Reading Icon"
                                className={classes.languageSkillIcon}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container justifyContent="center">
                            <Rating defaultValue={4} precision={0.5} size='small' readOnly/>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container alignContent="center" justifyContent="center">
                            <CardMedia
                                image={languageSpeakingIcon}
                                title="Reading Icon"
                                className={classes.languageSkillIcon}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container justifyContent="center">
                            <Rating defaultValue={3.5} precision={0.5} size='small' readOnly/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <GeneralHorizontalCrossDivider/>
                </Grid>
            </Grid>
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
                Microservice Patterns
            </CardContent>
        </Collapse>
    </UniformCard>)
}

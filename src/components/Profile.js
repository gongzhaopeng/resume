import React, {Fragment} from 'react';

import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded';
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import {DatePicker} from '@material-ui/pickers';

import {useTranslation} from "react-i18next";

import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import {red, lime} from '@material-ui/core/colors';

import UniformCard from './UniformCard';

import avatarImage from '../assets/images/avatar.jpeg'
import lactoOvoIcon from "../assets/images/lacto-ovo.vegetarian.icon.jpeg"

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

    const {t, i18n} = useTranslation('me');

    return (<Fragment>
        <UniformCard className={classes.root}>
            <CardHeader
                avatar={<Avatar aria-label="profile" className={classes.avatar}>
                    P
                </Avatar>}
                disableTypography
                title={
                    <Grid container alignItems="center">
                        <Button size="small" variant="outlined" color="primary">
                            <Typography variant="body1">{t('me:genInfo.name')}</Typography>
                        </Button>
                        <Breadcrumbs style={{marginLeft: 20}}>
                            <Chip label={t('me:genInfo.domain.levelOne')} size="small" variant="outlined"
                                  color="secondary"/>
                            <Chip label={t('me:genInfo.domain.levelTwo')} size="small" variant="outlined"
                                  color="secondary"/>
                        </Breadcrumbs>
                    </Grid>
                }
                subheader={
                    <Typography variant="body2" color="textSecondary" style={{marginTop: 5}}>
                        {t('me:genInfo.motto')}
                    </Typography>
                }
            />
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <CardMedia
                            className={classes.media}
                            image={avatarImage}
                            title="Avatar"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <DatePicker
                                    readOnly
                                    inputVariant="outlined"
                                    label={t('me:genInfo.birth.label')}
                                    value={new Date(1985, 9)}
                                    views={['year', 'month']}
                                    fullWidth
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label={t('me:genInfo.height.label')}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">
                                            {t('me:genInfo.height.unit')}
                                        </InputAdornment>, readOnly: true
                                    }}
                                    value={t('me:genInfo.height.amount')}
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label={t('me:genInfo.weight.label')}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">
                                            {t('me:genInfo.weight.unit')}
                                        </InputAdornment>, readOnly: true
                                    }}
                                    value={t('me:genInfo.weight.amount')}
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label={t('me:genInfo.bmi.label')}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">BMI</InputAdornment>,
                                        readOnly: true
                                    }}
                                    value={21.1}
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label={t('me:genInfo.diet.label')}
                                    InputProps={{
                                        endAdornment: i18n.language.indexOf('en') >= 0 ? null :
                                            <InputAdornment position="end">
                                                <Avatar alt="Lacto-ovo Vegetarian" src={lactoOvoIcon}/>
                                            </InputAdornment>, readOnly: true
                                    }}
                                    value={t('me:genInfo.diet.style')}
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider variant='fullWidth'
                                 style={{borderStyle: 'dashed', borderWidth: 1, borderColor: red[300]}}/>
                    </Grid>
                    <Grid container xs={4} alignItems="center" justifyContent="center" alignContent="center">
                        <Typography variant="body2" color='primary' align="center" style={{"width": '100%'}}>
                            上帝
                        </Typography>
                        <br/>
                        <Typography variant="body2" color="primary" align="center" style={{"width": '100%'}}>
                            想要光
                        </Typography>
                        <Typography variant="body2" color="primary" align="center" style={{"width": '100%'}}>
                            于是 便有了光
                        </Typography>
                    </Grid>
                    <Grid container xs={8} alignItems="center" justifyContent="center">
                        <Chip label="Technical Co-Founder" style={{margin: 2}}/>
                        <Chip label="Technical Leader" style={{margin: 2}}/>
                        <Chip label="Scrum Master" style={{margin: 2}}/>
                        <Chip label="Scrum Product Owner" style={{margin: 2}}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider variant='fullWidth'
                                 style={{borderStyle: 'dashed', borderWidth: 1, borderColor: red[300]}}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1" color="textSecondary" component="p">
                            Coding is a lifestyle.
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                            Coding is a philosophy.
                        </Typography>
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

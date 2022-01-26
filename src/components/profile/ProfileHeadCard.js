import React from 'react';

import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
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
import Battery60Icon from '@material-ui/icons/Battery60';
import Battery80Icon from '@material-ui/icons/Battery80';
import Battery90Icon from '@material-ui/icons/Battery90';
import BatteryFullIcon from '@material-ui/icons/BatteryFull';
import {DatePicker} from '@material-ui/pickers';

import {useTranslation} from "react-i18next";

import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import {red, lime} from '@material-ui/core/colors';

import UniformCard from '../UniformCard';
import GeneralHorizontalCrossDivider from '../GeneralHorizontalCrossDivider';

import avatarImage from '../../assets/images/avatar.jpeg'
import lactoOvoIcon from "../../assets/images/lacto-ovo.vegetarian.icon.jpeg"

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 'auto', backgroundColor: lime[300]
    }, avatarImage: {
        height: 0, paddingTop: '133.385%', // 1279x1706 => 1706/1279 => 133.385%
    }, expand: {
        transform: 'rotate(0deg)', marginLeft: 'auto', transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }, expandOpen: {
        transform: 'rotate(180deg)',
    }
}));

export default function ProfileHeadCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const {t, i18n} = useTranslation('me');

    return (<UniformCard className={classes.root}>
        <CardHeader
            avatar={<Avatar aria-label="profile" style={{backgroundColor: red[500]}}>
                P
            </Avatar>}
            disableTypography
            title={<Grid container alignItems="center" style={{marginTop: 10}}>
                <Button size="small" variant="outlined" color="primary">
                    <Typography variant="body1">{t('me:genInfo.name')}</Typography>
                </Button>
                <Breadcrumbs style={{marginLeft: 20}}>
                    <Chip label={t('me:genInfo.domain.levelOne')} size="small" variant="outlined"
                          color="secondary"/>
                    <Chip label={t('me:genInfo.domain.levelTwo')} size="small" variant="outlined"
                          color="secondary"/>
                </Breadcrumbs>
            </Grid>}
            subheader={<Typography variant="body2" color="textSecondary" style={{marginTop: 10}}>
                {t('me:genInfo.motto')}
            </Typography>}
        />
        <CardContent>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <CardMedia
                        className={classes.avatarImage}
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
                    <GeneralHorizontalCrossDivider/>
                </Grid>
                <Grid container xs={4} alignItems="center" justifyContent="center" alignContent="center">
                    <Typography variant="body2" color='primary' align="center" style={{"width": '100%'}}>
                        {t('me:genInfo.bible.genesis.wordOne')}
                    </Typography>
                    <br/>
                    <Typography variant="body2" color="primary" align="center" style={{"width": '100%'}}>
                        {t('me:genInfo.bible.genesis.wordTwo')}
                    </Typography>
                    <Typography variant="body2" color="primary" align="center" style={{"width": '100%'}}>
                        {t('me:genInfo.bible.genesis.wordThree')}
                    </Typography>
                </Grid>
                <Grid container xs={8} alignItems="center" justifyContent="center">
                    <Chip
                        icon={<Battery60Icon/>}
                        label={t('me:genInfo.job.titles.techPartner')}
                        variant="outlined"
                        color="secondary"
                        style={{margin: 3, fontStyle: "italic", fontWeight: "bolder"}}
                        size="small"
                    />
                    <Chip
                        icon={<Battery80Icon/>}
                        label={t('me:genInfo.job.titles.techDirector')}
                        variant="outlined"
                        color="primary"
                        style={{margin: 3, fontStyle: "italic", fontWeight: "bolder"}}
                        size="small"
                    />
                    <Chip
                        icon={<Battery90Icon/>}
                        label={t('me:genInfo.job.titles.developerManager')}
                        variant="outlined"
                        color="primary"
                        style={{margin: 3, fontStyle: "italic", fontWeight: "bolder"}}
                        size="small"
                    />
                    <Chip
                        icon={<Battery60Icon/>}
                        label={t('me:genInfo.job.titles.scrumMaster')}
                        variant="outlined"
                        color="primary"
                        style={{margin: 3, fontStyle: "italic", fontWeight: "bolder"}}
                        size="small"
                    />
                    <Chip
                        icon={<Battery60Icon/>}
                        label={t('me:genInfo.job.titles.scrumProductOwner')}
                        variant="outlined"
                        color="secondary"
                        style={{margin: 3, fontStyle: "italic", fontWeight: "bolder"}}
                        size="small"
                    />
                    <Chip
                        icon={<BatteryFullIcon/>}
                        label={t('me:genInfo.job.titles.architect')}
                        variant="outlined"
                        color="primary"
                        style={{margin: 3, fontStyle: "italic", fontWeight: "bolder"}}
                        size="small"
                    />
                    <Chip
                        icon={<BatteryFullIcon/>}
                        label={t('me:genInfo.job.titles.leadBackendDeveloper')}
                        variant="outlined"
                        style={{margin: 3, fontStyle: "italic", fontWeight: "bolder"}}
                        size="small"
                    />
                </Grid>
                <Grid item xs={12}>
                    <GeneralHorizontalCrossDivider/>
                </Grid>
                <Grid container xs={12} alignItems="center" justifyContent="center">
                    {t('me:genInfo.beliefs.top', {returnObjects: true}).map(belief => (
                        <Typography variant="body1" color="textSecondary" align="center" style={{"width": '100%'}}>
                            {belief}
                        </Typography>))}
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
                {t('me:genInfo.beliefs.pool', {returnObjects: true}).map(belief => (
                    <Typography variant="body2" color="textSecondary" paragraph>
                        {belief}
                    </Typography>))}
            </CardContent>
        </Collapse>
    </UniformCard>)
}

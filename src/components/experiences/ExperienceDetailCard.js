import React, {Fragment} from 'react';

import CardContent from '@material-ui/core/CardContent';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import Link from "@material-ui/core/Link";

import {useTranslation} from "react-i18next";

import {makeStyles} from '@material-ui/core/styles';
import {brown, orange, blue, grey} from '@material-ui/core/colors';

import UniformCard from '../UniformCard'
import GeneralHorizontalCrossDivider from "../GeneralHorizontalCrossDivider";
import UniformInfoItem from "../UniformInfoItem";
import HorizontalPlaceholder from "../HorizontalPlaceholder";
import ExperienceActivity from "./ExperienceActivity";

const useStyles = makeStyles({
    root: {
        backgroundColor: brown[100],
        minHeight: 200
    },
    orgBlockStyle: {
        minHeight: 100, width: '100%', backgroundColor: 'transparent',
        borderRadius: 0,
        borderRightStyle: "solid", borderRightWidth: 4, borderRightColor: orange['A400'],
        borderLeftStyle: 'none', borderTopStyle: 'none', borderBottomStyle: 'none',
        marginRight: 2, paddingRight: 4
    },
    positionBlockStyle: {
        minHeight: 100, width: '100%', backgroundColor: 'transparent',
        borderRadius: 0,
        borderLeftStyle: "solid", borderLeftWidth: 4, borderLeftColor: blue['A100'],
        borderRightStyle: 'none', borderTopStyle: 'none', borderBottomStyle: 'none',
        marginLeft: 2, paddingLeft: 4
    },
    orgNameStyle: {
        width: "100%",
        color: orange['900'],
    },
    positionNameStyle: {
        width: "100%",
        color: blue['800'],
    },
    orgTagStyle: {
        margin: 4
    },
    titleStyle: {
        margin: 4
    }
});

function makeOrgTag(label, className) {

    return (
        <Chip variant='outlined' size='small'
              label={<Typography variant='caption' color="textSecondary">{label}</Typography>}
              className={className}/>
    )
}

function ExperienceDetailCard({detail}) {

    const {
        root, orgBlockStyle, positionBlockStyle, orgNameStyle,
        positionNameStyle, orgTagStyle, titleStyle
    } = useStyles()

    const {t} = useTranslation('experiences');
    const labels = t('experiences:labels', {returnObjects: true})

    const website = detail['organization']['website']

    const generalColor = grey['700']

    return (
        <UniformCard className={root}>
            <CardContent>
                <Grid container spacing={0}>
                    <Grid container xs={6}>
                        <Paper variant='outlined' className={orgBlockStyle}>
                            {website ?
                                <Link href={detail['organization']['website']} underline="always" target="_blank"
                                      rel="noreferrer">
                                    <Typography variant='body1' align='center' className={orgNameStyle}>
                                        {detail['organization']['name']}
                                    </Typography>
                                </Link> :
                                <Typography variant='body1' align='center' className={orgNameStyle}>
                                    {detail['organization']['name']}
                                </Typography>
                            }
                            <Grid container justifyContent='center'>
                                {makeOrgTag(detail['organization']['type'], orgTagStyle)}
                                {makeOrgTag(
                                    `${detail['organization']['staffNumber']} ${labels['organization']['staff']}`,
                                    orgTagStyle)}
                            </Grid>
                            <HorizontalPlaceholder height={10}/>
                            {detail['organization']['brief'].map(item => (
                                <UniformInfoItem key={item} text={item} color={generalColor}/>
                            ))}
                        </Paper>
                    </Grid>
                    <Grid container xs={6}>
                        <Paper variant='outlined' className={positionBlockStyle}>
                            <Typography variant='body2' align='center' className={positionNameStyle}>
                                {detail['position']['department']}
                            </Typography>
                            <Grid container justifyContent='center'>
                                <Typography variant='caption' style={{color: generalColor}}>
                                    {detail['entryDate']} - {detail['leavingDate']}
                                </Typography>
                            </Grid>
                            <Grid container justifyContent='center'>
                                {detail['position']['titles'].map(title => (
                                    <Chip key={detail['organization']['name'] + title} variant='default' size='small'
                                          color='primary'
                                          className={titleStyle}
                                          label={<Typography variant='caption'>{title}</Typography>}/>
                                ))}
                            </Grid>
                            <HorizontalPlaceholder height={5}/>
                            {detail['position']['responsibilities'].map(item => (
                                <UniformInfoItem key={detail['organization']['name'] + item} text={item}
                                                 color={generalColor}/>
                            ))}
                        </Paper>
                    </Grid>
                </Grid>
                {detail['activities'].map(activity => (
                    <Fragment key={activity['name']}>
                        <Grid item xs={12}><GeneralHorizontalCrossDivider/></Grid>
                        <ExperienceActivity activity={activity}/>
                    </Fragment>
                ))}
            </CardContent>
        </UniformCard>
    )
}

export default ExperienceDetailCard

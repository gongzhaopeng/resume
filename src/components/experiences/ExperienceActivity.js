import React from 'react';

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Link from "@material-ui/core/Link";

import {useTranslation} from "react-i18next";

import {makeStyles} from '@material-ui/core/styles';
import {orange, blue, grey} from '@material-ui/core/colors';

import UniformInfoItem from "../UniformInfoItem";
import HorizontalPlaceholder from "../HorizontalPlaceholder";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({});

function ExperienceActivity({activity}) {

    const {} = useStyles()

    const {t} = useTranslation('experiences');
    const labels = t('experiences:labels', {returnObjects: true})

    const generalColor = grey['700']

    return (
        <Grid container xs={12} spacing={0}>
            <Grid container xs={3}>
                <Chip variant='outlined' size='small'
                      label={
                          <Typography variant="caption" style={{color: generalColor}}>
                              {labels['activity']['type'][activity['type']]}
                          </Typography>
                      }/>
            </Grid>
            <Grid container xs={5} alignContent='center' justifyContent='center'>
                <Typography variant='body2' align='center' style={{color: generalColor, fontStyle: 'italic'}}>
                    {activity['name']}
                </Typography>
            </Grid>
            <Grid container xs={4} alignContent='flex-end' justifyContent='flex-end'>
                <Typography variant='caption' style={{color: generalColor}}>
                    {activity['startTime']}-{activity['endTime']}
                </Typography>
            </Grid>
            <Grid container xs={6} justifyContent="center">
                <CardContent style={{paddingLeft: 0, paddingRight: 8, paddingBottom: 0}}>
                    <Typography align={"center"} variant={"caption"} paragraph
                                style={{color: generalColor, width: '100%'}}>
                        /{labels['activity']['brief']}/
                    </Typography>
                    {activity['brief'].map(item => (
                        <UniformInfoItem color={generalColor} text={item}/>
                    ))}
                </CardContent>
            </Grid>
            <Grid container xs={6} justifyContent="center">
                <CardContent style={{paddingLeft: 8, paddingRight: 0, paddingBottom: 0}}>
                    <Typography align={"center"} variant={"caption"} paragraph
                                style={{color: blue['800'], width: '100%'}}>
                        /{labels['activity']['tasks']}/
                    </Typography>
                    <Grid container justifyContent='center'>
                        {activity['roles'].map(role => (
                            <Chip variant='default' size='small' color='primary' style={{margin: 4}}
                                  label={<Typography variant='caption'>{role}</Typography>}/>
                        ))}
                    </Grid>
                    {activity['tasks'].map(item => (
                        <UniformInfoItem color={blue['800']} text={item}/>
                    ))}
                </CardContent>
            </Grid>
            <Grid container xs={6} justifyContent="center">
                {activity['result'] &&
                    <CardContent style={{paddingLeft: 0, paddingRight: 8, paddingBottom: 0}}>
                        <Typography align={"center"} variant={"caption"} paragraph
                                    style={{color: blue['800'], width: '100%'}}>
                            /{labels['activity']['result']}/
                        </Typography>
                        {activity['result'].map(item => (
                            <UniformInfoItem color={blue['800']} text={item}/>
                        ))}
                    </CardContent>
                }
            </Grid>
            <Grid container xs={6} justifyContent="center">
                <CardContent style={{paddingLeft: 8, paddingRight: 0, paddingBottom: 0}}>
                    <Typography align={"center"} variant={"caption"} paragraph
                                style={{color: orange['900'], width: '100%'}}>
                        /{labels['activity']['gains']}/
                    </Typography>
                    {activity['gains'].map(item => (
                        <UniformInfoItem color={orange['900']} text={item}/>
                    ))}
                </CardContent>
            </Grid>
        </Grid>
    )
}

export default ExperienceActivity

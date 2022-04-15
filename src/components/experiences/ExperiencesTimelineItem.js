import React from 'react';

import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from "@material-ui/core/Typography";

import {useTranslation} from "react-i18next";

import {makeStyles} from '@material-ui/core/styles';
import {cyan, brown, purple, grey} from '@material-ui/core/colors';

const useStyles = makeStyles({
    root: {},
});

function ExperiencesTimelineItem({
                                     entryTime, orgName, department, titles, activities,
                                     dotColor = 'grey', connector = true
                                 }) {

    const {root} = useStyles()

    const {t} = useTranslation('experiences');
    const labels = t('experiences:labels', {returnObjects: true})

    return (
        <TimelineItem>
            <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                    2009/07
                </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color={dotColor}/>
                {connector && <TimelineConnector/>}
            </TimelineSeparator>
            <TimelineContent>
                <Typography variant="h6" component="h1">
                    Eat
                </Typography>
            </TimelineContent>
        </TimelineItem>
    )
}

export default ExperiencesTimelineItem

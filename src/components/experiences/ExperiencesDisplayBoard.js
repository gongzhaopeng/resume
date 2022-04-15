import React from 'react';

import CardContent from '@material-ui/core/CardContent';
import Timeline from '@material-ui/lab/Timeline';
import Typography from "@material-ui/core/Typography";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineItem from "@material-ui/lab/TimelineItem";

import {useTranslation} from "react-i18next";

import {makeStyles} from '@material-ui/core/styles';
import {brown, yellow} from '@material-ui/core/colors';

import UniformCard from '../UniformCard'
import ExperiencesTimelineItem from "./ExperiencesTimelineItem";

const useStyles = makeStyles({
    root: {
        backgroundColor: brown[300],
        minHeight: 200
    },
    futureItemSloganStyle: {
        color: yellow['A400'],
        fontStyle: 'italic'
    }
});

function makeExperiencesTimelineItem(experience, dotColor = 'primary',
                                     connector = true) {
    const params = {
        entryTime: experience['entryDate'],
        orgName: experience['organization']['abbrName'],
        titles: experience['position']['titles'],
        dotColor, connector
    };

    return (
        <ExperiencesTimelineItem {...params}/>
    )
}

function ExperiencesDisplayBoard() {

    const {root, futureItemSloganStyle} = useStyles()

    const {t} = useTranslation('experiences');
    const experienceCabinet = t('experiences:experienceCabinet', {returnObjects: true})
    const labels = t('experiences:labels', {returnObjects: true})

    return (
        <UniformCard className={root}>
            <CardContent>
                <Timeline align="alternate">
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color='grey' variant='outlined'/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="body1" className={futureItemSloganStyle}>
                                {labels['timeline']['futureItem']['slogan']}
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    {makeExperiencesTimelineItem(experienceCabinet['BBJY'], 'primary')}
                    {makeExperiencesTimelineItem(experienceCabinet['HQFY'], 'secondary')}
                    {makeExperiencesTimelineItem(experienceCabinet['XRKJ'], 'primary')}
                    {makeExperiencesTimelineItem(experienceCabinet['BYJR'], 'secondary')}
                    {makeExperiencesTimelineItem(experienceCabinet['ZKFL'], 'primary', false)}
                </Timeline>
            </CardContent>
        </UniformCard>
    )
}

export default ExperiencesDisplayBoard

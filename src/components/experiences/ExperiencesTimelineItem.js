import React from 'react';

import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    orgNameStyle: {
        width: '100%',
        fontStyle: "italic"
    },
    titleStyle: {
        margin: 5
    }
});

function ExperiencesTimelineItem({
                                     entryTime, orgName, titles,
                                     dotColor, connector = true
                                 }) {

    const {orgNameStyle, titleStyle} = useStyles()

    return (
        <TimelineItem>
            <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                    {entryTime}
                </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color={dotColor}/>
                {connector && <TimelineConnector/>}
            </TimelineSeparator>
            <TimelineContent>
                <Typography variant="body1" color='textSecondary' className={orgNameStyle}>
                    {orgName}
                </Typography>
                {titles.map(title => (
                    <Chip key={title} size='small' variant='outlined' className={titleStyle}
                          label={
                              <Typography variant='caption' color='textSecondary'>
                                  {title}
                              </Typography>
                          }
                    />
                ))}
            </TimelineContent>
        </TimelineItem>
    )
}

export default ExperiencesTimelineItem

import React from 'react';

import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import Typography from '@material-ui/core/Typography'
import CodeIcon from '@material-ui/icons/Code'
import Rating from '@material-ui/lab/Rating'
import Grid from '@material-ui/core/Grid'
import AlarmOn from '@material-ui/icons/AlarmOn'
import AlarmOff from '@material-ui/icons/AlarmOff'

import {makeStyles} from '@material-ui/core/styles';
import {yellow, cyan, brown, lime} from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    header: {
        height: 50,
        backgroundColor: yellow[600],
        margin: 0,
        padding: 10
    },
    titleText: {
        color: cyan[800],
        fontWeight: 'bolder',
        position: 'relative',
        margin: 'auto'
    },
    content: {
        height: 500,
        backgroundColor: yellow[50],
        padding: 10,
        color: brown[400]
    },
    metricsName: {
        fontWeight: 'bolder',
        borderRight: `2px dashed ${lime[600]}`,
        // textAlign: 'center',
        display: 'block',
        width: 100,
        margin: 0,
        paddingLeft: 5
    }
}))

export function SkillDetailDialog({skillIcon, skillName, onClose}) {

    const {header, titleText, content, metricsName} = useStyles()

    return (
        <Dialog open={true} onClose={onClose} scroll='paper'
                maxWidth='sm' fullWidth>
            <DialogTitle className={header}>
                <Grid container spacing={0}>
                    <Grid item xs={1} align='center'>
                        {skillIcon}
                    </Grid>
                    <Grid item xs={10} align='center'>
                        <Typography className={titleText}>
                            {skillName}
                        </Typography>
                    </Grid>
                </Grid>
            </DialogTitle>
            <DialogContent dividers className={content}>
                <Grid container spacing={0}>
                    <Grid item xs={6}>
                        <Typography variant='button' className={metricsName}>熟悉度</Typography>
                    </Grid>
                    <Grid item xs={6} align='center'>
                        <Rating
                            name="familiarity"
                            readOnly
                            defaultValue={3.5}
                            precision={0.5}
                            icon={<CodeIcon color='secondary'/>}
                            emptyIcon={<CodeIcon/>}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='button' className={metricsName}>近期在用</Typography>
                    </Grid>
                    <Grid item xs={6} align='center'>
                        <AlarmOn color='primary'/>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='button' className={metricsName}>项目经验</Typography>
                    </Grid>
                    <Grid item xs={6} align='center'>
                        <AlarmOff color='disabled'/>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    )
}

export default SkillDetailDialog

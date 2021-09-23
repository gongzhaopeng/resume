import React from 'react';

import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import Typography from '@material-ui/core/Typography'
import CodeIcon from '@material-ui/icons/Code'
import Rating from '@material-ui/lab/Rating'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import AlarmOn from '@material-ui/icons/AlarmOn'
import AlarmOff from '@material-ui/icons/AlarmOff'

import {makeStyles} from '@material-ui/core/styles';
import {brown, cyan, grey, lime, yellow} from '@material-ui/core/colors';

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
        color: brown[400],
        fontWeight: 'bolder',
        borderRight: `2px dashed ${lime[600]}`,
        // textAlign: 'center',
        display: 'block',
        width: 100,
        margin: 0
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
                <Card raised style={{background: 'transparent', padding: 8}}>
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
                </Card>
                <Card variant='outlined'
                      style={{
                          background: 'transparent',
                          marginTop: 10,
                          padding: 8,
                          minHeight: 300,
                          color: grey[600]
                      }}>
                    For example, instances of Employee can be differentiated according to their job, that is, whether
                    they are researchers or administrators, and whether they are financed directly via the university or
                    via a project. Multiple classification means that an object can be an instance of multiple classes
                    whose characteristics the object then has. In Figure 4.26, we have divided the generalization
                    relationships into two groups. The sets Job and Financing form generalization sets which group
                    subclasses according to multiple independent criteria. Generalization sets can be described more
                    precisely by the following constraints.
                    Similarly to the abstract class, an interface also does not have an implementation or any direct
                    instances. An interface represents a contract. The classes that enter into this contract, that is,
                    the classes that implement the interface, obligate themselves to provide the behavior specified by
                    the interface. In contrast to the relationship between an abstract class and its subclasses, an “is
                    a” relationship between an interface and the classes that implement it is not necessary. Operations
                    of interfaces never have an implementation.
                </Card>
            </DialogContent>
        </Dialog>
    )
}

export default SkillDetailDialog

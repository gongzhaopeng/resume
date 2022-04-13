import React from 'react';

import CardContent from '@material-ui/core/CardContent';

import {makeStyles} from '@material-ui/core/styles';
import {cyan} from '@material-ui/core/colors';

import UniformCard from '../UniformCard'

const useStyles = makeStyles(theme => ({
    skillItemChips: {
        display: 'flex',
        flexWrap: "wrap",
        justifyContent: 'center'
    },
}));

function SkillsDisplayBoard() {

    const {skillItemChips} = useStyles()

    return (
        <UniformCard style={{backgroundColor: cyan[300], minHeight: 200}}>
            <CardContent className={skillItemChips}>
            </CardContent>
        </UniformCard>
    )
}

export default SkillsDisplayBoard

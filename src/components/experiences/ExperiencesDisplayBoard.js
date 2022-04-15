import React from 'react';

import CardContent from '@material-ui/core/CardContent';

import {useTranslation} from "react-i18next";

import {makeStyles} from '@material-ui/core/styles';
import {cyan, brown, purple, grey} from '@material-ui/core/colors';

import UniformCard from '../UniformCard'

const useStyles = makeStyles({
    root: {
        backgroundColor: brown[300],
        minHeight: 200
    },
});

function ExperiencesDisplayBoard() {

    const {root} = useStyles()

    const {t} = useTranslation('experiences');
    const experienceCabinet = t('experiences:experienceCabinet', {returnObjects: true})

    return (
        <UniformCard className={root}>
            <CardContent>
            </CardContent>
        </UniformCard>
    )
}

export default ExperiencesDisplayBoard

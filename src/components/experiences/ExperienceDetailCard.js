import React from 'react';

import CardContent from '@material-ui/core/CardContent';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import {useTranslation} from "react-i18next";

import {makeStyles} from '@material-ui/core/styles';
import {brown} from '@material-ui/core/colors';

import UniformCard from '../UniformCard'
import GeneralHorizontalCrossDivider from "../GeneralHorizontalCrossDivider";
import UniformInfoItem from "../UniformInfoItem";

const useStyles = makeStyles({
    root: {
        backgroundColor: brown[100],
        minHeight: 200
    },
});

function ExperienceDetailCard({detail}) {

    const {root} = useStyles()

    const {t} = useTranslation('experiences');
    const labels = t('experiences:labels', {returnObjects: true})

    return (
        <UniformCard className={root}>
            <CardContent>
                <Grid container spacing={0}>
                </Grid>
            </CardContent>
        </UniformCard>
    )
}

export default ExperienceDetailCard

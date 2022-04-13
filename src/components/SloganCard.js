import React from 'react';

import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";

import {makeStyles} from '@material-ui/core/styles';
import {lightGreen} from '@material-ui/core/colors';

import UniformCard from './UniformCard'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: lightGreen[500]
    }, content: {
        minHeight: 80, display: 'flex', flexWrap: "wrap", justifyContent: 'center', alignContent: "center",
    },
}));

function SloganCard({slogan}) {

    const {root, content} = useStyles()

    return (<UniformCard className={root}>
        <CardContent className={content}>
            <Typography variant="caption" color="secondary" align="center">
                {slogan}
            </Typography>
        </CardContent>
    </UniformCard>)
}

export default SloganCard

import React from 'react';

import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import {useTranslation} from "react-i18next";

import {makeStyles} from '@material-ui/core/styles';
import {lime} from '@material-ui/core/colors';

import UniformCard from '../UniformCard';
import SingleLineImageList from "../SingleLineImageList";

import journeyToMarsImage from "../../assets/images/journeyToMars.jpeg"

const runnerImageItems = [{
    img: journeyToMarsImage, title: "Journey to Mars"
}, {
    img: journeyToMarsImage, title: "Journey to Mars"
},]

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: lime[100]
    }
}));

export default function ProfileMusicCard() {
    const classes = useStyles();

    const {t} = useTranslation('me');

    return (<UniformCard className={classes.root}>
        <CardHeader title={t("me:genInfo.music.slogan")}
                    titleTypographyProps={{variant: "button", color: "secondary", align: "center"}}/>
        <CardContent>
            <SingleLineImageList imageItems={runnerImageItems} imgHeight={200}/>
        </CardContent>
    </UniformCard>)
}

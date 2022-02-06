import React from 'react';

import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import {useTranslation} from "react-i18next";

import {makeStyles} from '@material-ui/core/styles';
import {lime} from '@material-ui/core/colors';

import UniformCard from '../UniformCard';
import SingleLineImageList from "../SingleLineImageList";

import iTheThreeOfUs from "../../assets/images/the-three-of-us/i.the-three-of-us.jpeg"
import iiTheThreeOfUs from "../../assets/images/the-three-of-us/ii.the-three-of-us.jpeg"
import iiiTheThreeOfUs from "../../assets/images/the-three-of-us/iii.the-three-of-us.jpeg"
import ivTheThreeOfUs from "../../assets/images/the-three-of-us/iv.the-three-of-us.jpeg"

const runnerImageItems = [{
    img: iTheThreeOfUs, title: "i.the-three-of-us"
}, {
    img: iiTheThreeOfUs, title: "ii.the-three-of-us"
}, {
    img: iiiTheThreeOfUs, title: "iii.the-three-of-us"
}, {
    img: ivTheThreeOfUs, title: "iv.the-three-of-us"
},]

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: lime[100]
    }
}));

export default function ProfileFamilyCard() {
    const classes = useStyles();

    const {t} = useTranslation('me');

    return (<UniformCard className={classes.root}>
        <CardHeader title={t("me:genInfo.family.slogan")}
                    titleTypographyProps={{variant: "button", color: "secondary", align: "center"}}/>
        <CardContent>
            <SingleLineImageList imageItems={runnerImageItems} imgHeight={242}/>
        </CardContent>
    </UniformCard>)
}

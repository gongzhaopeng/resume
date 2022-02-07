import React from 'react';

import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import {useTranslation} from "react-i18next";

import {makeStyles} from '@material-ui/core/styles';
import {lime} from '@material-ui/core/colors';

import UniformCard from '../UniformCard';
import SingleLineImageList from "../SingleLineImageList";

import iMeILoveSoccer from "../../assets/images/i-love-soccer/i.me.i-love-soccer.jpeg"
import iGoatILoveSoccer from "../../assets/images/i-love-soccer/i.goat.i-love-soccer.jpeg"
import iiMeILoveSoccer from "../../assets/images/i-love-soccer/ii.me.i-love-soccer.jpeg"
import iiGoatILoveSoccer from "../../assets/images/i-love-soccer/ii.goat.i-love-soccer.jpeg"
import ronaldoILoveSoccer from "../../assets/images/i-love-soccer/ronaldo.i-love-soccer.jpeg"
import zidaneILoveSoccer from "../../assets/images/i-love-soccer/zidane.i-love-soccer.jpeg"
import ronaldinioILoveSoccer from "../../assets/images/i-love-soccer/ronaldinio.i-love-soccer.jpeg"

const runnerImageItems = [{
    img: iMeILoveSoccer, title: "i.me.i-love-soccer"
}, {
    img: iGoatILoveSoccer, title: "i.goat.i-love-soccer"
}, {
    img: iiMeILoveSoccer, title: "ii.me.i-love-soccer"
}, {
    img: iiGoatILoveSoccer, title: "ii.goat.i-love-soccer"
}, {
    img: ronaldoILoveSoccer, title: "ronaldo.i-love-soccer"
}, {
    img: zidaneILoveSoccer, title: "zidane.i-love-soccer"
}, {
    img: ronaldinioILoveSoccer, title: "ronaldinio.i-love-soccer"
}]

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: lime[100]
    }
}));

export default function ProfileSoccerCard() {
    const classes = useStyles();

    const {t} = useTranslation('me');

    return (<UniformCard className={classes.root}>
        <CardHeader title={t("me:genInfo.soccer.slogan")}
                    titleTypographyProps={{variant: "button", color: "secondary", align: "center"}}/>
        <CardContent>
            <SingleLineImageList imageItems={runnerImageItems} imgHeight={242}/>
        </CardContent>
    </UniformCard>)
}

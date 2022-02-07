import React from 'react';

import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import {useTranslation} from "react-i18next";

import {makeStyles} from '@material-ui/core/styles';
import {lime} from '@material-ui/core/colors';

import UniformCard from '../UniformCard';
import SingleLineImageList from "../SingleLineImageList";

import anYongMusic from "../../assets/images/the-music-i-like/an-yong.music.i-like.jpeg"
import beautifulDayMusic from "../../assets/images/the-music-i-like/beautiful-day.music.i-like.jpeg"
import blowingInTheWindMusic from "../../assets/images/the-music-i-like/blowing-in-the-wind.music.i-like.jpeg"
import cantHelpFallingInLoveMusic
    from "../../assets/images/the-music-i-like/cant-help-falling-in-love.music.i-like.jpeg"
import everyRoseHasItsThornMusic from "../../assets/images/the-music-i-like/every-rose-has-its-thorn.music.i-like.jpeg"
import fadeToBlackMusic from "../../assets/images/the-music-i-like/fade-to-black.music.i-like.jpeg"
import hotelCaliforniaMusic from "../../assets/images/the-music-i-like/hotel-california.music.i-like.jpeg"
import iWantToBreakFreeMusic from "../../assets/images/the-music-i-like/i-want-to-break-free.music.i-like.jpeg"
import inTheEndMusic from "../../assets/images/the-music-i-like/in-the-end.music.i-like.jpeg"
import itsMyLifeMusic from "../../assets/images/the-music-i-like/its-my-life.music.i-like.jpeg"
import janiesGotAGunMusic from "../../assets/images/the-music-i-like/janies-got-a-gun.music.i-like.jpeg"
import letItBeMusic from "../../assets/images/the-music-i-like/let-it-be.music.i-like.jpeg"
import moneytalksMusic from "../../assets/images/the-music-i-like/moneytalks.music.i-like.jpeg"
import motherMusic from "../../assets/images/the-music-i-like/mother.music.i-like.jpeg"
import novemberRainMusic from "../../assets/images/the-music-i-like/november-rain.music.i-like.jpeg"
import setFireToTheRainMusic from "../../assets/images/the-music-i-like/set-fire-to-the-rain.music.i-like.jpeg"
import soundsOfSilenceMusic from "../../assets/images/the-music-i-like/sounds-of-silence.music.i-like.jpeg"
import whereDidYouSleepLastNightMusic
    from "../../assets/images/the-music-i-like/where-did-you-sleep-last-night.music.i-like.jpeg"
import wildChildMusic from "../../assets/images/the-music-i-like/wild-child.music.i-like.jpeg"
import xiYangZhiGeMusic from "../../assets/images/the-music-i-like/xi-yang-zhi-ge.music.i-like.jpeg"
import yaXiYaDeGuErMusic from "../../assets/images/the-music-i-like/ya-xi-ya-de-gu-er.music.i-like.jpeg"

const runnerImageItems = [{
    img: blowingInTheWindMusic, title: "blowing-in-the-wind.music.i-like"
}, {
    img: letItBeMusic, title: "let-it-be.music.i-like"
}, {
    img: fadeToBlackMusic, title: "fade-to-black.music.i-like"
}, {
    img: hotelCaliforniaMusic, title: "hotel-california.music.i-like"
}, {
    img: soundsOfSilenceMusic, title: "sounds-of-silence.music.i-like"
}, {
    img: novemberRainMusic, title: "november-rain.music.i-like"
}, {
    img: cantHelpFallingInLoveMusic, title: "cant-help-falling-in-love.music.i-like"
}, {
    img: yaXiYaDeGuErMusic, title: "ya-xi-ya-de-gu-er.music.i-like"
}, {
    img: wildChildMusic, title: "wild-child.music.i-like"
}, {
    img: beautifulDayMusic, title: "beautiful-day.music.i-like"
}, {
    img: inTheEndMusic, title: "in-the-end.music.i-like"
}, {
    img: itsMyLifeMusic, title: "its-my-life.music.i-like"
}, {
    img: iWantToBreakFreeMusic, title: "i-want-to-break-free.music.i-like"
}, {
    img: xiYangZhiGeMusic, title: "xi-yang-zhi-ge.music.i-like"
}, {
    img: motherMusic, title: "mother.music.i-like"
}, {
    img: janiesGotAGunMusic, title: "janies-got-a-gun.music.i-like"
}, {
    img: moneytalksMusic, title: "moneytalks.music.i-like"
}, {
    img: whereDidYouSleepLastNightMusic, title: "where-did-you-sleep-last-night.music.i-like"
}, {
    img: setFireToTheRainMusic, title: "set-fire-to-the-rain.music.i-like"
}, {
    img: anYongMusic, title: "an-yong.music.i-like"
}, {
    img: everyRoseHasItsThornMusic, title: "every-rose-has-its-thorn.music.i-like"
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
            <SingleLineImageList imageItems={runnerImageItems} imgHeight={326}/>
        </CardContent>
    </UniformCard>)
}

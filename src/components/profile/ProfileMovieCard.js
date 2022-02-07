import React from 'react';

import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import {useTranslation} from "react-i18next";

import {makeStyles} from '@material-ui/core/styles';
import {lime} from '@material-ui/core/colors';

import UniformCard from '../UniformCard';
import SingleLineImageList from "../SingleLineImageList";

import _2001ASpaceOdysseyMovies from "../../assets/images/the-movies-i-like/2001-a-space-odyssey.movies.i-like.jpeg"
import bandOfBrothersMovies from "../../assets/images/the-movies-i-like/band-of-brothers.movies.i-like.jpeg"
import duneMovies from "../../assets/images/the-movies-i-like/dune.movies.i-like.jpeg"
import dunkirkMovies from "../../assets/images/the-movies-i-like/dunkirk.movies.i-like.jpeg"
import forestGumpMovies from "../../assets/images/the-movies-i-like/forrest-gump.movies.i-like.jpeg"
import fuRongZhenMovies from "../../assets/images/the-movies-i-like/fu-rong-zhen.movies.i-like.jpeg"
import gladiatorMovies from "../../assets/images/the-movies-i-like/gladiator.movies.i-like.jpeg"
import gravityMovies from "../../assets/images/the-movies-i-like/gravity.movies.i-like.jpeg"
import huoZheMovies from "../../assets/images/the-movies-i-like/huo-zhe.movies.i-like.jpeg"
import interstellarMovies from "../../assets/images/the-movies-i-like/interstellar.movies.i-like.jpeg"
import laVitaEBellaMovies from "../../assets/images/the-movies-i-like/la-vita-e-bella.movies.i-like.jpeg"
import manOnFireMovies from "../../assets/images/the-movies-i-like/man-on-fire.movies.i-like.jpeg"
import prometheusMovies from "../../assets/images/the-movies-i-like/prometheus.movies.i-like.jpeg"
import pulpFictionMovies from "../../assets/images/the-movies-i-like/pulp-fiction.movies.i-like.jpeg"
import savingPrivateRyanMovies from "../../assets/images/the-movies-i-like/saving-private-ryan.movies.i-like.jpeg"
import schindlersListMovies from "../../assets/images/the-movies-i-like/schindlers-list.movies.i-like.jpeg"
import starTrekMovies from "../../assets/images/the-movies-i-like/star-trek.movies.i-like.jpeg"
import theGodfatherMovies from "../../assets/images/the-movies-i-like/the-godfather.movies.i-like.jpeg"
import theGoodTheBadAndTheUglyMovies
    from "../../assets/images/the-movies-i-like/the-good-the-bad-and-the-ugly.movies.i-like.jpeg"
import theMatrixMovies from "../../assets/images/the-movies-i-like/the-matrix.movies.i-like.jpeg"
import thelmaAndLouiseMovies from "../../assets/images/the-movies-i-like/thelma-and-louise.movies.i-like.jpeg"

const runnerImageItems = [{
    img: forestGumpMovies, title: "forrest-gump.movies.i-like"
}, {
    img: _2001ASpaceOdysseyMovies, title: "2001-a-space-odyssey.movies.i-like"
}, {
    img: thelmaAndLouiseMovies, title: "thelma-and-louise.movies.i-like"
}, {
    img: pulpFictionMovies, title: "pulp-fiction.movies.i-like"
}, {
    img: theGoodTheBadAndTheUglyMovies, title: "the-good-the-bad-and-the-ugly.movies.i-like"
}, {
    img: laVitaEBellaMovies, title: "la-vita-e-bella.movies.i-like"
}, {
    img: bandOfBrothersMovies, title: "band-of-brothers.movies.i-like"
}, {
    img: fuRongZhenMovies, title: "fu-rong-zhen.movies.i-like"
}, {
    img: huoZheMovies, title: "huo-zhe.movies.i-like"
}, {
    img: interstellarMovies, title: "interstellar.movies.i-like"
}, {
    img: savingPrivateRyanMovies, title: "saving-private-ryan.movies.i-like"
}, {
    img: dunkirkMovies, title: "dunkirk.movies.i-like"
}, {
    img: gravityMovies, title: "gravity.movies.i-like"
}, {
    img: starTrekMovies, title: "star-trek.movies.i-like"
}, {
    img: theMatrixMovies, title: "the-matrix.movies.i-like"
}, {
    img: theGodfatherMovies, title: "the-godfather.movies.i-like"
}, {
    img: schindlersListMovies, title: "schindlers-list.movies.i-like"
}, {
    img: gladiatorMovies, title: "gladiator.movies.i-like"
}, {
    img: manOnFireMovies, title: "man-on-fire.movies.i-like"
}, {
    img: duneMovies, title: "dune.movies.i-like"
}, {
    img: prometheusMovies, title: "prometheus.movies.i-like"
},]

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: lime[100]
    }
}));

export default function ProfileMovieCard() {
    const classes = useStyles();

    const {t} = useTranslation('me');

    return (<UniformCard className={classes.root}>
        <CardHeader title={t("me:genInfo.movie.slogan")}
                    titleTypographyProps={{variant: "button", color: "secondary", align: "center"}}/>
        <CardContent>
            <SingleLineImageList imageItems={runnerImageItems} imgHeight={194}/>
        </CardContent>
    </UniformCard>)
}

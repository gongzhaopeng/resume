import React, {Fragment} from 'react';

import {useTranslation} from "react-i18next";

import ExperiencesDisplayBoard from "./ExperiencesDisplayBoard";
import SloganCard from "../SloganCard";

function Experiences() {

    const {t} = useTranslation('experiences');
    const skillCabinet = t('experiences:experienceCabinet', {returnObjects: true})
    const slogans = t('experiences:slogans', {returnObjects: true})

    return (
        <Fragment>
            <SloganCard slogan={slogans[0]}/>
            <ExperiencesDisplayBoard/>
        </Fragment>
    )
}

export default Experiences

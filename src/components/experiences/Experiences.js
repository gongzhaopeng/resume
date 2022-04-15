import React, {Fragment} from 'react';

import {useTranslation} from "react-i18next";

import ExperiencesDisplayBoard from "./ExperiencesDisplayBoard";
import SloganCard from "../SloganCard";
import ExperienceDetailCard from "./ExperienceDetailCard";

function Experiences() {

    const {t} = useTranslation('experiences');
    const experienceCabinet = t('experiences:experienceCabinet', {returnObjects: true})
    const slogans = t('experiences:slogans', {returnObjects: true})

    return (
        <Fragment>
            <SloganCard slogan={slogans[0]}/>
            <ExperiencesDisplayBoard/>
            <SloganCard slogan={slogans[1]}/>
            <ExperienceDetailCard detail={experienceCabinet['BBJY']}/>
            <SloganCard slogan={slogans[2]}/>
            <ExperienceDetailCard detail={experienceCabinet['HQFY']}/>
            <SloganCard slogan={slogans[3]}/>
            <ExperienceDetailCard detail={experienceCabinet['XRKJ']}/>
            <SloganCard slogan={slogans[4]}/>
            <ExperienceDetailCard detail={experienceCabinet['BYJR']}/>
            <SloganCard slogan={slogans[5]}/>
            <ExperienceDetailCard detail={experienceCabinet['ZKFL']}/>
        </Fragment>
    )
}

export default Experiences

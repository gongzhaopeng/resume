import React, {Fragment} from 'react';

import {useTranslation} from "react-i18next";

import ExperiencesDisplayBoard from "./ExperiencesDisplayBoard";
import SloganCard from "../SloganCard";
import ExperienceDetailCard from "./ExperienceDetailCard";

import sundialModelPart1Image from
        '../../assets/images/activities/org-benbenedu/product-sundial/part-1.model.domain.sundial.benbenedu.cn.png'
import sundialModelPart2Image from
        '../../assets/images/activities/org-benbenedu/product-sundial/part-2.model.domain.sundial.benbenedu.cn.png'
import sundialImplementationViewImage from
        '../../assets/images/activities/org-benbenedu/product-sundial/implementation-view.sundial.benbenedu.cn.png'
import sundialProcessViewImage from
        '../../assets/images/activities/org-benbenedu/product-sundial/process-view.sundial.benbenedu.cn.png'

const sundialDesignImageList = {
    rowHeight: 50,
    imageItems: [
        {
            title: "part-1.model.domain.sundial.benbenedu.cn",
            img: sundialModelPart1Image,
            cols: 4, rows: 2
        },
        {
            title: "part-2.model.domain.sundial.benbenedu.cn",
            img: sundialModelPart2Image,
            cols: 5, rows: 2
        },
        {
            title: "implementation-view.sundial.benbenedu.cn",
            img: sundialImplementationViewImage,
            cols: 5, rows: 3
        },
        {
            title: "process-view.sundial.benbenedu.cn",
            img: sundialProcessViewImage,
            cols: 4, rows: 3
        }
    ]
}

function Experiences() {

    const {t} = useTranslation('experiences');
    const experienceCabinet = t('experiences:experienceCabinet', {returnObjects: true})
    const slogans = t('experiences:slogans', {returnObjects: true})

    experienceCabinet['BBJY']['activities'][0]['designImageList'] = sundialDesignImageList

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

import React, {Fragment} from 'react';

import {useTranslation} from "react-i18next";

import SkillsDisplayBoard from "./SkillsDisplayBoard";
import SloganCard from "../SloganCard";
import SkillDetailCard from "./SkillDetailCard";
import skillToLogoDict from "./skillToLogoDict";

function Skills() {

    const {t} = useTranslation('skills');
    const skillCabinet = t('skills:skillCabinet', {returnObjects: true})
    const slogans = t('skills:slogans', {returnObjects: true})

    return (
        <Fragment>
            <SloganCard slogan={slogans[0]}/>
            <SkillsDisplayBoard/>
            <SloganCard
                slogan={slogans[1]}/>
            <SkillDetailCard logo={skillToLogoDict.architectureAndDesign.img}
                             logoHeightRatio={skillToLogoDict.architectureAndDesign.heightRatio}
                             detail={skillCabinet['architectureAndDesign']}
            />
        </Fragment>
    )
}

export default Skills

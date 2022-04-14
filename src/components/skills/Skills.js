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
            <SloganCard slogan={slogans[1]}/>
            <SkillDetailCard logo={skillToLogoDict.javaBackendDev.img}
                             logoHeightRatio={skillToLogoDict.javaBackendDev.heightRatio}
                             detail={skillCabinet['javaBackendDev']}/>
            <SloganCard slogan={slogans[2]}/>
            <SkillDetailCard logo={skillToLogoDict.webFrontendDev.img}
                             logoHeightRatio={skillToLogoDict.webFrontendDev.heightRatio}
                             detail={skillCabinet['webFrontendDev']}/>
            <SloganCard slogan={slogans[3]}/>
            <SkillDetailCard logo={skillToLogoDict.architectureAndDesign.img}
                             logoHeightRatio={skillToLogoDict.architectureAndDesign.heightRatio}
                             detail={skillCabinet['architectureAndDesign']}/>
            <SloganCard slogan={slogans[4]}/>
            <SkillDetailCard logo={skillToLogoDict.solutionBuilding.img}
                             logoHeightRatio={skillToLogoDict.solutionBuilding.heightRatio}
                             detail={skillCabinet['solutionBuilding']}/>
            <SloganCard slogan={slogans[5]}/>
            <SkillDetailCard logo={skillToLogoDict.processControl.img}
                             logoHeightRatio={skillToLogoDict.processControl.heightRatio}
                             detail={skillCabinet['processControl']}/>
            <SkillDetailCard logo={skillToLogoDict.techTeamManagement.img}
                             logoHeightRatio={skillToLogoDict.techTeamManagement.heightRatio}
                             detail={skillCabinet['techTeamManagement']}/>
        </Fragment>
    )
}

export default Skills

import React from 'react';

import CardContent from '@material-ui/core/CardContent';

import {makeStyles} from '@material-ui/core/styles';
import {cyan, brown, purple, grey} from '@material-ui/core/colors';

import UniformCard from '../UniformCard'
import SkillMiniCard from "./SkillMiniCard";

import archAndDesignLogo from "../../assets/images/skills/logo/software-architecture-and-design.skills.logo.png";

const useStyles = makeStyles(theme => ({
    skillItemChips: {
        display: 'flex',
        flexWrap: "wrap",
        justifyContent: 'center'
    },
}));

function SkillsDisplayBoard() {

    const {skillItemChips} = useStyles()

    return (
        <UniformCard style={{backgroundColor: cyan[300], minHeight: 200}}>
            <CardContent className={skillItemChips}>
                <SkillMiniCard logo={archAndDesignLogo} logoHeightRatio={1.1}
                               name="Technical Team Management"
                               nameColor={purple[300]} rating={4.5}/>
                <SkillMiniCard logo={archAndDesignLogo} logoHeightRatio={1.1}
                               name="Software Solution Building"
                               nameColor={brown[300]} rating={4.5}/>
                <SkillMiniCard logo={archAndDesignLogo} logoHeightRatio={1.1}
                               name="Java Backend Dev"
                               nameColor={grey[300]} rating={4.5}/>
            </CardContent>
        </UniformCard>
    )
}

export default SkillsDisplayBoard

import React, {Fragment} from 'react';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import {useTranslation} from "react-i18next";

import {cyan} from '@material-ui/core/colors';

import SkillsDisplayBoard from "./SkillsDisplayBoard";
import UniformCard from '../UniformCard'
import SloganCard from "../SloganCard";

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
            <UniformCard style={{backgroundColor: cyan[100], height: 200}}>
                <CardContent>
                    <Typography>
                        Python is all around!
                    </Typography>
                </CardContent>
            </UniformCard>
        </Fragment>
    )
}

export default Skills

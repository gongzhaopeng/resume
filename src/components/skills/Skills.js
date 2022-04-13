import React, {Fragment} from 'react';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import {cyan} from '@material-ui/core/colors';

import SkillsHeadBoard from './SkillsHeadBoard'
import UniformCard from '../UniformCard'
import SloganCard from "../SloganCard";

function Skills() {

    return (
        <Fragment>
            <SloganCard slogan={"三人行 必有我师焉"}/>
            <SkillsHeadBoard/>
            <SloganCard
                slogan={"Iterative development acknowledges that we will probably get things wrong before we get them right and that we will do things poorly before we do them well."}/>
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

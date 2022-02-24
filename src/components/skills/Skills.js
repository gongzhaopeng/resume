import React, {Fragment} from 'react';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import {cyan} from '@material-ui/core/colors';

import SkillsHeadBoard from './SkillsHeadBoard'
import UniformCard from '../UniformCard'

function Skills() {

    return (
        <Fragment>
            <SkillsHeadBoard/>
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

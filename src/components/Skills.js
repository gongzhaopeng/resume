import React, {Fragment} from 'react';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import {makeStyles} from '@material-ui/core/styles';
import {cyan} from '@material-ui/core/colors';

import UniformCard from './UniformCard'

function Skills() {

    return (
        <Fragment>
            <UniformCard style={{backgroundColor: cyan[300], height: 200}}>
                <CardContent>
                    <Typography>
                        Java is all around!
                    </Typography>
                </CardContent>
            </UniformCard>
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

import React, {Fragment} from 'react';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import {deepPurple} from '@material-ui/core/colors';

import UniformCard from './UniformCard';

function Experiences() {

    return (
        <Fragment>
            <UniformCard style={{backgroundColor: deepPurple[300], height: 200}}>
                <CardContent>
                    <Typography>
                        Roadmap...
                    </Typography>
                </CardContent>
            </UniformCard>
            <UniformCard style={{backgroundColor: deepPurple[100], height: 200}}>
                <CardContent>
                    <Typography>
                        Timeline...
                    </Typography>
                </CardContent>
            </UniformCard>
        </Fragment>
    )
}

export default Experiences

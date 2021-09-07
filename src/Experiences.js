import React, {Fragment} from 'react';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import {brown} from '@material-ui/core/colors';

import UniformCard from './UniformCard';

function Experiences() {

    return (
        <Fragment>
            <UniformCard style={{backgroundColor: brown[300], height: 200}}>
                <CardContent>
                    <Typography>
                        Just do it!
                    </Typography>
                </CardContent>
            </UniformCard>
            <UniformCard style={{backgroundColor: brown[100], height: 200}}>
                <CardContent>
                    <Typography>
                        Never give up!
                    </Typography>
                </CardContent>
            </UniformCard>
        </Fragment>
    )
}

export default Experiences

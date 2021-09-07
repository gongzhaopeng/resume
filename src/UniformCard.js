import React, {Fragment} from 'react';

import Divider from '@material-ui/core/Divider'
import Card from '@material-ui/core/Card';

function UniformCard({children, ...rest}) {

    return (
        <Fragment>
            <Divider style={{height: 8}}/>
            <Card raised={true} square={false} {...rest}>
                {children}
            </Card>
        </Fragment>
    )
}

export default UniformCard

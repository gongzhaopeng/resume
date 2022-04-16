import React from 'react';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: ({height}) => ({
        width: "100%",
        height: height
    })
});

function HorizontalPlaceholder({height}) {

    const {root} = useStyles({height})

    return (
        <div className={root}/>
    )
}

export default HorizontalPlaceholder
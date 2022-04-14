import React from 'react';

import Typography from "@material-ui/core/Typography";

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: ({color}) => ({
        width: '100%',
        color: color,
        borderColor: color,
        borderStyle: "dashed",
        borderWidth: 1,
        borderRadius: 10,
        padding: 2
    })
});

function UniformInfoItem({color, text}) {

    const {root} = useStyles({color})

    return (
        <Typography align={"center"} variant={"caption"} paragraph className={root}>
            {text}
        </Typography>
    )
}

export default UniformInfoItem
import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    loading: {
        backgroundColor: 'red'
    }
})

export function LoadingIndicator() {

    const {loading} = useStyles()

    return (
        <CircularProgress color='secondary' className={loading}/>
    )
}

export default LoadingIndicator
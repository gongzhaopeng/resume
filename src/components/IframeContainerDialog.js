import React from 'react';

import Dialog from '@material-ui/core/Dialog';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    iframe: {
        width: '100%',
        minHeight: 600
    }
})

export function IframeContainerDialog({title, url, onClose}) {

    const {iframe} = useStyles()

    return (
        <Dialog title={title} fullWidth open={true} onClose={onClose}>
            <iframe
                src={url}
                className={iframe}
                frameBorder={0}
                seamless={true}
            />
        </Dialog>
    )
}

export default IframeContainerDialog
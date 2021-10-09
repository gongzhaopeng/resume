import React from 'react';

import Dialog from '@material-ui/core/Dialog';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    iframe: {
        width: '100%',
        minHeight: 600
    }
}))

export function IframeContainerDialog({url, title}) {

    const {iframe} = useStyles()

    return (
        <Dialog fullWidth open={true}>
            {/*<AppBar>*/}
            {/*    <Toolbar>*/}
            {/*        <IconButton edge='start'>*/}
            {/*            <CloseIcon/>*/}
            {/*        </IconButton>*/}
            {/*        <Typography>*/}
            {/*            {title}*/}
            {/*        </Typography>*/}
            {/*    </Toolbar>*/}
            {/*</AppBar>*/}
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
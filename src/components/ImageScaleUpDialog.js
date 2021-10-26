import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import CircularProgress from '@material-ui/core/CircularProgress';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    dialog: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    loading: {
        backgroundColor: 'red'
    },
    img: ({scaleUpRatio, showLoading}) => ({
        width: `${100 * scaleUpRatio}%`,
        display: showLoading ? 'none' : 'block'
    })
}))

export function ImageScaleUpDialog({image, title, scaleUpRatio, onClose}) {

    const [showLoading, setShowLoading] = React.useState(true);

    const {dialog, loading, img} = useStyles({scaleUpRatio, showLoading})

    const onImageLoad = () => {
        setShowLoading(false)
    }

    return (
        <Dialog fullWidth open={true} onClose={onClose} className={dialog}>
            {showLoading && (
                <CircularProgress color='secondary' className={loading}/>
            )}
            <img
                alt={title}
                src={image}
                className={img}
                onLoad={onImageLoad}
            />
        </Dialog>
    )
}

export default ImageScaleUpDialog
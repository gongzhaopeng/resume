import React, {useEffect, useRef} from 'react';

import Dialog from '@material-ui/core/Dialog';

import {makeStyles} from '@material-ui/core/styles';

import LoadingIndicator from "./LoadingIndicator";

const useStyles = makeStyles({
    dialog: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    img: ({scaleUpRatio, showLoading}) => ({
        width: `${100 * scaleUpRatio}%`,
        display: showLoading ? 'none' : 'block'
    })
})

export function ImageScaleUpDialog({image, title, scaleUpRatio, onClose}) {

    const rootRef = useRef(null);

    const [showLoading, setShowLoading] = React.useState(true);

    const {dialog, img} = useStyles({scaleUpRatio, showLoading})

    const onImageLoad = () => {
        setShowLoading(false)
    }

    useEffect(() => {
        if (!showLoading) {
            const paperElem = rootRef.current.querySelector(".MuiDialog-paper")
            paperElem.scrollLeft = (paperElem.scrollWidth - paperElem.offsetWidth) / 2.0
        }
    })

    return (
        <Dialog fullWidth open={true} onClose={onClose} className={dialog} ref={rootRef}>
            {showLoading && (
                <LoadingIndicator/>
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
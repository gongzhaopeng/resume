import React from 'react';

import ImageList from "@material-ui/core/ImageList"
import ImageListItem from "@material-ui/core/ImageListItem"

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', overflow: 'hidden'
    }, imageList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        width: 359
    }
}));

export default function SingleLineImageList({imageItems, imgHeight}) {
    const classes = useStyles();

    return (<div className={classes.root}>
        <ImageList className={classes.imageList} cols={1.1} gap={4} rowHeight={imgHeight}>
            {imageItems.map(item => (
                <ImageListItem key={item.img}>
                    <img src={item.img} alt={item.title} style={{height: imgHeight, width: 322}}/>
                </ImageListItem>
            ))}
        </ImageList>
    </div>);
}
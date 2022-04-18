import React from 'react';

import ImageList from "@material-ui/core/ImageList"
import ImageListItem from "@material-ui/core/ImageListItem"
import ImageListItemBar from "@material-ui/core/ImageListItemBar";

import {makeStyles} from '@material-ui/core/styles';
import * as url from "url";

const imageListWidth = 359;
const imageListCols = 9;

const useStyles = makeStyles({
    root: {
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around',
        overflow: 'hidden', backgroundColor: 'transparent'
    }, imageList: {
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        width: imageListWidth
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, ' +
            'rgba(0,0,0,0.2) 70%, rgba(0,0,0,0) 100%)',
    }
});

export default function DesignImageList({rowHeight, imageItems}) {
    const classes = useStyles();

    const onClickImageListItem = (url) => {
        console.log(url)
        window.open(url, '_blank')
    }

    return (
        <div className={classes.root}>
            <ImageList className={classes.imageList} cols={imageListCols} gap={4} rowHeight={rowHeight}>
                {imageItems.map(item => (
                    <ImageListItem key={item.img} cols={item.cols} rows={item.rows}
                                   onClick={onClickImageListItem.bind(null, item.img)}>
                        <img src={item.img} alt={item.title}
                             style={{width: imageListWidth / imageListCols * item.cols}}/>
                        <ImageListItemBar
                            title={item.title}
                            position='top'
                            className={classes.titleBar}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
}
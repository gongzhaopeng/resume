import React from 'react';

import Chip from "@material-ui/core/Chip";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import WebIcon from "@material-ui/icons/Web";
import ErrorIcon from '@material-ui/icons/Error';
import Link from "@material-ui/core/Link";

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        margin: 5
    }
});

function UniformResourceItem({type, name, url}) {

    const {root} = useStyles()

    const chipParams = {color: 'primary'}

    if (type === 'book') {
        chipParams.icon = <MenuBookIcon/>
        chipParams.label = name
    } else if (type === 'website') {
        name = name || url
        chipParams.icon = <WebIcon/>
        chipParams.label =
            <Link href={url} underline="always" target="_blank" rel="noreferrer">
                {name}
            </Link>
    } else {
        chipParams.icon = <ErrorIcon/>
        chipParams.label = `Unsupported Type: ${type}`
        chipParams.color = 'secondary'
    }

    return <Chip size='medium' color={chipParams.color} variant='outlined' clickable={false}
                 icon={chipParams.icon} className={root} label={chipParams.label}/>
}

export default UniformResourceItem
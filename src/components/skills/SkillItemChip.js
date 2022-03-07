import React from 'react';

import Chip from '@material-ui/core/Chip'
import Avatar from "@material-ui/core/Avatar";

import {makeStyles} from '@material-ui/core/styles';
import clsx from "clsx"
import {orange} from '@material-ui/core/colors';

const useStyles = makeStyles({
    root: {
        margin: 10,
        fontWeight: 'bolder'
    },
    blinkingSkillItem: {
        animation: `$blink infinite 1500ms linear`,
    },
    "@keyframes blink": {
        "0%": {
            opacity: 0,
            backgroundColor: 'transparent'
        },
        "%20": {
            opacity: 1,
            backgroundColor: orange[400]
        },
        "100%": {
            opacity: 1,
            backgroundColor: orange[600]
        }
    }
})

export function SkillItemChip({logoImg, logoWidthRatio, skillName, selected, blinking, ...rest}) {

    const {root, blinkingSkillItem} = useStyles()

    return <Chip
        size="medium"
        avatar={<Avatar src={logoImg} variant='rounded' style={{width: logoWidthRatio * 26, height: 26}}/>}
        label={skillName}
        clickable
        variant={selected ? 'default' : 'outlined'}
        className={clsx(root, {[blinkingSkillItem]: blinking})}
        {...rest}
    />
}

export default SkillItemChip

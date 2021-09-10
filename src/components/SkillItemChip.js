import React from 'react';

import Chip from '@material-ui/core/Chip'

export function SkillItemChip({skillIcon, skillName, color}) {

    return <Chip
        // variant="outlined"
        size="medium"
        icon={skillIcon}
        label={skillName}
        clickable
        color={color}
        style={{margin: 10}}
    />
}

export default SkillItemChip

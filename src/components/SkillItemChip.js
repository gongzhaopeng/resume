import React from 'react';

import Chip from '@material-ui/core/Chip'

export function SkillItemChip({skillIcon, skillName, ...rest}) {

    return <Chip
        // variant="outlined"
        size="medium"
        icon={skillIcon}
        label={skillName}
        clickable
        style={{margin: 10}}
        {...rest}
    />
}

export default SkillItemChip

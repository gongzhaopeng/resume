import React from 'react';

import Chip from '@material-ui/core/Chip'

export function SkillItemChip({skillIcon, skillName, selected, ...rest}) {

    return <Chip
        // variant="outlined"
        size="medium"
        icon={skillIcon}
        label={skillName}
        clickable
        variant={selected ? 'default' : 'outlined'}
        style={{margin: 10, fontWeight: 'bold'}}
        {...rest}
    />
}

export default SkillItemChip

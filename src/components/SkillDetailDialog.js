import React from 'react';

import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'

import {makeStyles} from '@material-ui/core/styles';
import {cyan} from '@material-ui/core/colors';

export function SkillDetailDialog({skillName, onClose, ...rest}) {

    return (
        <Dialog open={skillName != null} onClose={onClose}>
            <DialogTitle>{skillName}</DialogTitle>
        </Dialog>
    )
}

export default SkillDetailDialog

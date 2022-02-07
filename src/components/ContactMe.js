import React from 'react';

import Fab from '@material-ui/core/Fab';
import CenterFocusStrongRoundedIcon from '@material-ui/icons/CenterFocusStrongRounded'

import {useTranslation} from 'react-i18next';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: "45%",
        fontWeight: 'bolder'
    }
}));

function ContactMe() {

    const {t} = useTranslation();

    const onClickFab = () => {
    };

    const {fab} = useStyles();

    return (
        <Fab variant="extended" color="primary" className={fab} onClick={onClickFab}>
            <CenterFocusStrongRoundedIcon/>
            {t("common:contact.label")}
        </Fab>
    );
}

export default ContactMe
import React from 'react';

import Fab from '@material-ui/core/Fab';
import Avatar from '@material-ui/core/Avatar';

import {useTranslation} from 'react-i18next';

import {makeStyles} from '@material-ui/core/styles';
import {amber} from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        left: theme.spacing(2),
        fontWeight: 'bolder'
    },
    avatar: {
        backgroundColor: amber[800]
    }
}));

function LanguageToggle() {

    const {t, i18n} = useTranslation();

    const onClickFab = () => {
        const targetLng = i18n.language.indexOf('en') >= 0 ? 'zh' : 'en'
        i18n.changeLanguage(targetLng).then(() => {
        })
    };

    const {fab, avatar} = useStyles();

    return (
        <Fab color="secondary" size="medium" className={fab} onClick={onClickFab}>
            <Avatar variant="circular" className={avatar}>
                {t("common:language.switchMark")}
            </Avatar>
        </Fab>
    );
}

export default LanguageToggle
import React, {Fragment} from 'react';

import Fab from '@material-ui/core/Fab';
import CenterFocusStrongRoundedIcon from '@material-ui/icons/CenterFocusStrongRounded'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Grid from "@material-ui/core/Grid";
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import SmartphoneRoundedIcon from '@material-ui/icons/SmartphoneRounded';
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import Typography from '@material-ui/core/Typography';

import {useTranslation} from 'react-i18next';

import {makeStyles} from '@material-ui/core/styles';
import {yellow} from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
    fab: {
        position: 'fixed', bottom: theme.spacing(2), right: "45%", fontWeight: 'bolder', zIndex: 1000
    }, content: {
        backgroundColor: yellow[50], padding: 10
    }
}));

function ContactMe() {

    const {fab, content} = useStyles()
    const [showContactInfo, setShowContactInfo] = React.useState(false);

    const onClickFab = () => {
        setShowContactInfo(!showContactInfo)
    };

    const onCloseDialog = () => {
        setShowContactInfo(false)
    }

    const {t, i18n} = useTranslation();

    return (
        <Fragment>
            <Fab variant="extended" color="primary" className={fab} onClick={onClickFab}>
                <CenterFocusStrongRoundedIcon/>
                <Typography style={{marginLeft: 4}}>{t("common:contact.label")}</Typography>
            </Fab>,
            <Dialog open={showContactInfo} onClose={onCloseDialog} scroll='paper'
                    maxWidth='sm' fullWidth>
                <DialogContent dividers className={content}>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <Grid container justifyContent="center" alignContent="center"
                                  style={{height: '100%'}}>
                                <LocationOnRoundedIcon color="primary"/>
                            </Grid>
                        </Grid>
                        <Grid item xs={9}>
                            <Breadcrumbs>
                                {i18n.language.indexOf('en') >= 0 &&
                                    <Typography variant="caption" color="primary">
                                        {t("common:contact.location.country")}
                                    </Typography>
                                }
                                <Typography variant="caption" color="primary">
                                    {t("common:contact.location.city")}
                                </Typography>
                                <Typography variant="caption" color="primary">
                                    {t("common:contact.location.district")}
                                </Typography>
                                <Typography variant="caption" color="primary">
                                    {t("common:contact.location.street")}
                                </Typography>
                            </Breadcrumbs>
                        </Grid>
                        <Grid item xs={3}>
                            <Grid container justifyContent="center"><EmailRoundedIcon color="primary"/></Grid>
                        </Grid>
                        <Grid item xs={9}>
                            <Typography variant="body1" color="primary">
                                {t("common:contact.email")}
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Grid container justifyContent="center"><SmartphoneRoundedIcon color="primary"/></Grid>
                        </Grid>
                        <Grid item xs={9}>
                            <Typography variant="body1" color="primary">
                                {t("common:contact.mobile")}
                            </Typography>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </Fragment>
    );
}

export default ContactMe
import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';

import {makeStyles} from '@material-ui/core/styles'
import {green} from '@material-ui/core/colors';

import Profile from "./Profile";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        maxWidth: 500,
        margin: 'auto'
    },
});

function Resume() {

    const classes = useStyles();
    const [tabIndex, setTabIndex] = React.useState(0);

    const handleTabChange = (event, newTabIndex) => {
        setTabIndex(newTabIndex);
    };

    return (
        <React.Fragment>
            <CssBaseline/>
            <Container style={{backgroundColor: green[100]}}>
                <Paper square className={classes.root}>
                    <Tabs
                        value={tabIndex}
                        onChange={handleTabChange}
                        variant="fullWidth"
                        indicatorColor="secondary"
                        textColor="secondary"
                        aria-label="icon label tabs example"
                    >
                        <Tab icon={<PhoneIcon/>} label="RECENTS"/>
                        <Tab icon={<FavoriteIcon/>} label="FAVORITES"/>
                        <Tab icon={<PersonPinIcon/>} label="NEARBY"/>
                    </Tabs>
                </Paper>
            </Container>
        </React.Fragment>
    )
}

export default Resume

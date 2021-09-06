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
    canvas: {
        backgroundColor: green[100],
        minHeight: 5000,
        maxWidth: '100%',
        flexGrow: 1,
        margin: 0,
        padding: 0
    },
    contentField: {
        maxWidth: 600,
        padding: 0
    }
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
            <Container className={classes.canvas}>
                <Container className={classes.contentField}>
                    <Paper square>
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
                    <Profile>
                    </Profile>
                </Container>
            </Container>
        </React.Fragment>
    )
}

export default Resume

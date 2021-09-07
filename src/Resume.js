import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonPinRoundedIcon from '@material-ui/icons/PersonPinRounded';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import FingerprintIcon from '@material-ui/icons/Fingerprint';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import {makeStyles} from '@material-ui/core/styles'
import {brown, cyan, green, lime} from '@material-ui/core/colors';

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
    contentArea: {
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
                <Container className={classes.contentArea}>
                    <Paper square>
                        <Tabs
                            value={tabIndex}
                            onChange={handleTabChange}
                            variant="fullWidth"
                            indicatorColor="secondary"
                            textColor="secondary"
                            aria-label="main navigating tabs"
                        >
                            <Tab icon={<PersonPinRoundedIcon style={{color: lime[400]}}/>} label="ME"/>
                            <Tab icon={<BeenhereIcon style={{color: cyan[400]}}/>} label="SKILLS"/>
                            <Tab icon={<FingerprintIcon style={{color: brown[400]}}/>} label="EXPERIENCES"/>
                        </Tabs>
                    </Paper>
                    <Router>
                        <Switch>
                            <Route path='/skills'>
                                <p>TODO::SKILLS</p>
                            </Route>
                            <Route path='/experiences'>
                                <p>TODO::EXPERIENCES</p>
                            </Route>
                            <Route path='/'>
                                <Profile>
                                </Profile>
                            </Route>
                        </Switch>
                    </Router>
                </Container>
            </Container>
        </React.Fragment>
    )
}

export default Resume

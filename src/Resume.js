import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonPinRoundedIcon from '@material-ui/icons/PersonPinRounded';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import FingerprintIcon from '@material-ui/icons/Fingerprint';

import {HashRouter as Router, Redirect, Route, Switch, useHistory, useParams} from 'react-router-dom'

import {makeStyles} from '@material-ui/core/styles'
import {brown, cyan, green, lime} from '@material-ui/core/colors';

import Profile from './Profile';
import Skills from './Skills'
import Experiences from './Experiences'

const topics = ['me', 'skills', 'experiences']
const globalDefaultTopicIndex = 0
const globalDefaultTopic = topics[globalDefaultTopicIndex]

const useStyles = makeStyles({
    canvas: {
        backgroundColor: green[50],
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

function ResumeContent() {

    let {topic} = useParams()
    let tabIndex = topics.indexOf(topic)
    if (tabIndex < 0) tabIndex = globalDefaultTopicIndex

    let history = useHistory()
    const handleTabChange = (event, newTabIndex) => {
        if (newTabIndex === tabIndex) return

        history.push(`/${topics[newTabIndex]}`)
    }

    const {contentArea} = useStyles();

    return (
        <Container className={contentArea}>
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
            <Switch>
                <Route path={`/${topics[0]}`}>
                    <Profile/>
                </Route>
                <Route path={`/${topics[1]}`}>
                    <Skills/>
                </Route>
                <Route path={`/${topics[2]}`}>
                    <Experiences/>
                </Route>
                <Route path='/'>
                    <Redirect to={{pathname: `/${globalDefaultTopic}`}}/>
                </Route>
            </Switch>
        </Container>
    )
}

function Resume() {

    const {canvas} = useStyles();

    return (
        <React.Fragment>
            <CssBaseline/>
            <Container className={canvas}>
                <Router>
                    <Switch>
                        <Route path='/:topic'>
                            <ResumeContent/>
                        </Route>
                        <Route path='/'>
                            <Redirect to={{pathname: `/${globalDefaultTopic}`}}/>
                        </Route>
                    </Switch>
                </Router>
            </Container>
        </React.Fragment>
    )
}

export default Resume

import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonPinRoundedIcon from '@material-ui/icons/PersonPinRounded';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import Typography from "@material-ui/core/Typography";

import {HashRouter as Router, Redirect, Route, Switch, useHistory, useParams} from 'react-router-dom'

import {makeStyles} from '@material-ui/core/styles'
import {brown, cyan, green, lime, deepOrange} from '@material-ui/core/colors';

import {ScrollToTopAnyway} from './components/ScrollToTop'
import Profile from './components/Profile';
import Skills from './components/Skills'
import Experiences from './components/Experiences'

const topics = ['me', 'skills', 'experiences']
const globalDefaultTopicIndex = 0
const globalDefaultTopic = topics[globalDefaultTopicIndex]

const contentAreaMaxWidth = 600
const useStyles = makeStyles(theme => ({
    canvas: {
        backgroundColor: green[50],
        minHeight: 50000,
        maxWidth: '100%',
        flexGrow: 1,
        margin: 0,
        padding: 0
    },
    contentArea: {
        maxWidth: contentAreaMaxWidth,
        padding: 0
    },
    appBar: {
        position: 'fixed',
        maxWidth: contentAreaMaxWidth
    },
    offsetBeneathAppBar: theme.mixins.toolbar,
    bottomWord: {
        ...theme.typography.h4,
        fontVariant: 'petite-caps',
        background: 'transparent',
        padding: theme.spacing(1),
        color: deepOrange[600],
    }
}));

function ResumeContent() {

    let {topic} = useParams()
    let tabIndex = topics.indexOf(topic)
    if (tabIndex < 0) tabIndex = globalDefaultTopicIndex

    let history = useHistory()
    const handleTabChange = (event, newTabIndex) => {
        // if (newTabIndex === tabIndex) return

        history.push(`/${topics[newTabIndex]}`)
    }

    const {contentArea, appBar, offsetBeneathAppBar} = useStyles();

    return (
        <Container className={contentArea}>
            <AppBar position='static' color="default" className={appBar}>
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
            </AppBar>
            <div className={offsetBeneathAppBar}/>
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

    const {canvas, bottomWord} = useStyles();

    return (
        <React.Fragment>
            <CssBaseline/>
            <Container className={canvas}>
                <Router>
                    <ScrollToTopAnyway/>
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
            <Typography align="center" className={bottomWord}>
                May the force be with you!
            </Typography>
        </React.Fragment>
    )
}

export default Resume

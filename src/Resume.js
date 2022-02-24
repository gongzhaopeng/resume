import React, {Suspense} from 'react';

import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonPinRoundedIcon from '@material-ui/icons/PersonPinRounded';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import Typography from "@material-ui/core/Typography";
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/NavigationRounded';
import BubbleChartIcon from '@material-ui/icons/BubbleChartRounded';

import {HashRouter as Router, Redirect, Route, Switch, useHistory, useParams} from 'react-router-dom'

import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import zhLocale from 'date-fns/locale/zh-CN';
import enLocale from 'date-fns/locale/en-US';

import {useTranslation} from 'react-i18next';

import {makeStyles} from '@material-ui/core/styles'
import {brown, cyan, green, lime, deepOrange, deepPurple} from '@material-ui/core/colors';

import ScrollToTop from './components/ScrollToTop'
import Profile from './components/profile/Profile';
import Skills from './components/skills/Skills'
import Experiences from './components/Experiences'
import Career from './components/Career'
import MetaDesign from "./components/MetaDesign";
import LanguageToggle from './components/LanguageToggle'
import ContactMe from './components/ContactMe'

const homeTopics = ['me', 'skills', 'experiences', 'career']
const globalDefaultTopicIndex = 0
const globalDefaultTopic = homeTopics[globalDefaultTopicIndex]
const metaDesignTopic = 'meta-design'

const contentAreaMaxWidth = 700
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
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        fontWeight: 'bolder',
        zIndex: 1000
    },
    bottomWord: {
        ...theme.typography.h4,
        fontVariant: 'petite-caps',
        background: 'transparent',
        padding: theme.spacing(1),
        color: deepOrange[600],
    }
}));

function CustomFab({fabAtHome, onClick}) {

    const {fab} = useStyles();

    const fabProps = {
        color: 'default',
        text: 'meta',
        icon: <NavigationIcon/>
    };
    if (!fabAtHome) {
        fabProps.color = 'secondary';
        fabProps.text = 'home';
        fabProps.icon = <BubbleChartIcon/>;
    }

    return (
        <Fab variant="extended" color={fabProps.color} className={fab} onClick={onClick}>
            {fabProps.icon}
            {fabProps.text}
        </Fab>
    )
}

function ResumeContent() {

    let {topic} = useParams()
    const isMetaDesignTopic = (topic === metaDesignTopic)
    let tabIndex = homeTopics.indexOf(topic)
    if (tabIndex < 0) {
        if (isMetaDesignTopic) tabIndex = false
        else tabIndex = globalDefaultTopicIndex
    }

    let history = useHistory()
    const handleTabChange = (event, newTabIndex) => {
        // if (newTabIndex === tabIndex) return

        history.push(`/${homeTopics[newTabIndex]}`)
    }

    const {contentArea, appBar, offsetBeneathAppBar} = useStyles();

    const {t, i18n} = useTranslation('common');

    function determineLocale() {
        return i18n.language.indexOf('en') >= 0 ? enLocale : zhLocale;
    }

    const onClickFab = isFabAtHome => {
        if (isFabAtHome)
            history.push(`/${metaDesignTopic}`)
        else
            history.push(`/`)
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={determineLocale()}>
            <Container className={contentArea}>
                <AppBar position='static' color="default" className={appBar}>
                    <Tabs
                        centered={true}
                        value={tabIndex}
                        onChange={handleTabChange}
                        variant="fullWidth"
                        indicatorColor="secondary"
                        textColor="secondary"
                        aria-label="main navigating tabs"
                    >
                        <Tab icon={<PersonPinRoundedIcon style={{color: lime[400]}}/>}
                             label={t('common:aspects.me.name')}/>
                        <Tab icon={<BeenhereIcon style={{color: cyan[400]}}/>}
                             label={t('common:aspects.skills.name')}/>
                        <Tab icon={<FingerprintIcon style={{color: brown[400]}}/>}
                             label={t('common:aspects.experiences.name')}/>
                        <Tab icon={<AllInclusiveIcon style={{color: deepPurple[400]}}/>}
                             label={t('common:aspects.career.name')}/>
                    </Tabs>
                </AppBar>
                <div className={offsetBeneathAppBar}/>
                <Switch>
                    <Route path={`/${homeTopics[0]}`}>
                        <Profile/>
                    </Route>
                    <Route path={`/${homeTopics[1]}`}>
                        <Skills/>
                    </Route>
                    <Route path={`/${homeTopics[2]}`}>
                        <Experiences/>
                    </Route>
                    <Route path={`/${homeTopics[3]}`}>
                        <Career/>
                    </Route>
                    <Route path={`/${metaDesignTopic}`}>
                        <MetaDesign/>
                    </Route>
                    <Route path='/'>
                        <Redirect to={{pathname: `/${globalDefaultTopic}`}}/>
                    </Route>
                </Switch>
                <CustomFab fabAtHome={!isMetaDesignTopic} onClick={onClickFab.bind(null, !isMetaDesignTopic)}/>
                <LanguageToggle/>
                <ContactMe/>
            </Container>
        </MuiPickersUtilsProvider>
    )
}

function Resume() {

    const {canvas, bottomWord} = useStyles();

    return (
        <Suspense fallback={null}>
            <CssBaseline/>
            <Container className={canvas}>
                <Router>
                    <ScrollToTop/>
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
        </Suspense>
    )
}

export default Resume

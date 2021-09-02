import React from "react";

import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

import logo from './logo.svg';
import './App.css';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 500,
    },
    list: {
        width: '100%',
        maxWidth: 160,
        backgroundColor: theme.palette.background.paper,
    }
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

function App() {

    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline/>
            <h1>WELCOME TO MY ZONE!</h1>
            <Container className={classes.root}>
                <Typography component="div" style={{backgroundColor: '#cfe8fc', height: '100vh'}}>
                    TRY YOU BEST!
                </Typography>
            </Container>
            <Container className={classes.list}>
                <div>
                    <List component="nav">
                        <ListItem button>
                            <ListItemIcon>
                                <InboxIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Inbox"/>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <DraftsIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Drafts"/>
                        </ListItem>
                    </List>
                    <Divider/>
                    <List component="nav">
                        <ListItem button>
                            <ListItemText primary="Trash"/>
                        </ListItem>
                        <ListItemLink href="#simple-list">
                            <ListItemText primary="Spam"/>
                        </ListItemLink>
                    </List>
                </div>
            </Container>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        JUST DO IT!
                    </a>
                </header>
            </div>
        </React.Fragment>
    )
}

export default App;

import React from "react";

import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'

import logo from './logo.svg';
import './App.css';

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500,
    },
});

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

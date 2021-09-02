import React from "react";

import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'

import Profile from "./Profile";

import './Resume.css'

function Resume() {

    return (
        <React.Fragment>
            <CssBaseline/>
            <Container style={{
                backgroundColor: 'lightblue'
            }}>
                <Profile/>
            </Container>
            <Container style={{
                width: '100%',
                minHeight: '500px',
                boxAlign: 'center',
                backgroundColor: 'grey',
            }}>
                <Typography style={{textAlign: 'center', backgroundColor: 'pink'}}>
                    HERE IS MY PLAYGROUND.
                </Typography>
                <Typography style={{
                    textAlign: 'center',
                    minHeight: '60px',
                    backgroundColor: 'blueviolet'
                }}>
                    WELCOME.
                </Typography>
            </Container>
            {/*TODO*/}
        </React.Fragment>
    )
}

export default Resume

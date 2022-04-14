import React from 'react';

import CardContent from '@material-ui/core/CardContent';
import Grid from "@material-ui/core/Grid";

import {useTranslation} from "react-i18next";

import {makeStyles} from '@material-ui/core/styles';
import {cyan, brown, purple, grey} from '@material-ui/core/colors';

import UniformCard from '../UniformCard'
import SkillMiniCard from "./SkillMiniCard";

import skillToLogoDict from "./skillToLogoDict";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: cyan[300],
        minHeight: 200
    },
}));

function SkillsDisplayBoard() {

    const {root} = useStyles()

    const {t} = useTranslation('skills');
    const skillCabinet = t('skills:skillCabinet', {returnObjects: true})

    return (
        <UniformCard className={root}>
            <CardContent>
                <Grid container spacing={0}>
                    <Grid item xs={3}/>
                    <Grid container xs={6} alignContent="center" justifyContent="center">
                        <SkillMiniCard logo={skillToLogoDict.techTeamManagement.img}
                                       name={skillCabinet['techTeamManagement'].name}
                                       nameColor={purple[300]}
                                       rating={skillCabinet['techTeamManagement'].rate['comprehensive']}
                        />
                    </Grid>
                    <Grid item xs={3}/>
                </Grid>
            </CardContent>
            <CardContent>
                <Grid container spacing={0}>
                    <Grid container xs={6} alignContent="center" justifyContent="center">
                        <SkillMiniCard logo={skillToLogoDict.solutionBuilding.img}
                                       name={skillCabinet['solutionBuilding'].name}
                                       nameColor={brown[300]}
                                       rating={skillCabinet['solutionBuilding'].rate['comprehensive']}
                        />
                    </Grid>
                    <Grid container xs={6} alignContent="center" justifyContent="center">
                        <SkillMiniCard logo={skillToLogoDict.processControl.img}
                                       name={skillCabinet['processControl'].name}
                                       nameColor={brown[300]}
                                       rating={skillCabinet['processControl'].rate['comprehensive']}
                        />
                    </Grid>
                </Grid>
            </CardContent>
            <CardContent>
                <Grid container spacing={0}>
                    <Grid item xs={3}/>
                    <Grid container xs={6} alignContent="center" justifyContent="center">
                        <SkillMiniCard logo={skillToLogoDict.architectureAndDesign.img}
                                       name={skillCabinet['architectureAndDesign'].name}
                                       nameColor={grey[300]}
                                       rating={skillCabinet['architectureAndDesign'].rate['comprehensive']}
                        />
                    </Grid>
                    <Grid item xs={3}/>
                </Grid>
            </CardContent>
            <CardContent>
                <Grid container spacing={0}>
                    <Grid container xs={6} alignContent="center" justifyContent="center">
                        <SkillMiniCard logo={skillToLogoDict.javaBackendDev.img}
                                       name={skillCabinet['javaBackendDev'].name}
                                       nameColor={grey[300]}
                                       rating={skillCabinet['javaBackendDev'].rate['comprehensive']}
                        />
                    </Grid>
                    <Grid container xs={6} alignContent="center" justifyContent="center">
                        <SkillMiniCard logo={skillToLogoDict.webFrontendDev.img}
                                       name={skillCabinet['webFrontendDev'].name}
                                       nameColor={grey[300]}
                                       rating={skillCabinet['webFrontendDev'].rate['comprehensive']}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </UniformCard>
    )
}

export default SkillsDisplayBoard

import React from 'react';

import CardContent from '@material-ui/core/CardContent';
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import {useTranslation} from "react-i18next";

import {makeStyles} from '@material-ui/core/styles';
import {cyan, brown, green, blue, purple} from '@material-ui/core/colors';

import UniformCard from '../UniformCard'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: cyan[100],
        minHeight: 200
    },
    logoStyle: ({logoHeightRatio}) => ({
        width: 200, height: 200 * logoHeightRatio
    }),
}));

function SkillDetailCard({logo, logoHeightRatio, detail}) {

    const {root, logoStyle} = useStyles({logoHeightRatio})

    const {t} = useTranslation('skills');
    const labels = t('skills:labels', {returnObjects: true})

    return (
        <UniformCard className={root}>
            <CardContent>
                <Grid container spacing={0}>
                    <Grid container xs={7} alignContent="center" justifyContent="center">
                        <CardMedia
                            image={logo}
                            title={detail['name']}
                            className={logoStyle}
                        />
                    </Grid>
                    <Grid container xs={5} alignContent={"center"}>
                        <Grid container xs={12} justifyContent={"center"}>
                            <Typography color={"secondary"} variant={"button"} align={"center"} paragraph>{detail['name']}</Typography>
                        </Grid>
                        <Grid item xs={6} style={{color: brown['A400']}}>
                            <Grid container xs={12} justifyContent={"center"}>
                                <Typography variant={"caption"} align={"center"}>
                                    {labels['rate']['ability']}
                                </Typography>
                            </Grid>
                            <Grid container xs={12} justifyContent={"center"}>
                                <Typography variant={"caption"} align={"center"}>
                                    {detail['rate']['ability']}/5
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} style={{color: green[800]}}>
                            <Grid container xs={12} justifyContent={"center"}>
                                <Typography variant={"caption"} align={"center"}>
                                    {labels['rate']['interest']}
                                </Typography>
                            </Grid>
                            <Grid container xs={12} justifyContent={"center"}>
                                <Typography variant={"caption"} align={"center"}>
                                    {detail['rate']['interest']}/5
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} style={{color: blue[800]}}>
                            <Grid container xs={12} justifyContent={"center"}>
                                <Typography variant={"caption"} align={"center"}>
                                    {labels['rate']['knowledge']}
                                </Typography>
                            </Grid>
                            <Grid container xs={12} justifyContent={"center"}>
                                <Typography variant={"caption"} align={"center"}>
                                    {detail['rate']['knowledge']}/5
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} style={{color: purple['A400']}}>
                            <Grid container xs={12} justifyContent={"center"}>
                                <Typography variant={"caption"} align={"center"}>
                                    {labels['rate']['practice']}
                                </Typography>
                            </Grid>
                            <Grid container xs={12} justifyContent={"center"}>
                                <Typography variant={"caption"} align={"center"}>
                                    {detail['rate']['practice']}/5
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </UniformCard>
    )
}

export default SkillDetailCard

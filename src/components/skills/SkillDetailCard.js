import React from 'react';

import CardContent from '@material-ui/core/CardContent';
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import {useTranslation} from "react-i18next";

import {makeStyles} from '@material-ui/core/styles';
import {cyan, brown, green, deepOrange, purple} from '@material-ui/core/colors';

import UniformCard from '../UniformCard'
import GeneralHorizontalCrossDivider from "../GeneralHorizontalCrossDivider";
import UniformInfoItem from "../UniformInfoItem";
import UniformResourceItem from "../UniformResourceItem";

const useStyles = makeStyles({
    root: {
        backgroundColor: cyan[100],
        minHeight: 200
    },
    logoStyle: ({logoHeightRatio}) => ({
        width: 200, height: 200 * logoHeightRatio
    }),
});

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
                            <Typography color={"secondary"} variant={"button"} align={"center"}
                                        paragraph>{detail['name']}</Typography>
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
                        <Grid item xs={6} style={{color: deepOrange['A400']}}>
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
                    <Grid item xs={12}><GeneralHorizontalCrossDivider/></Grid>
                    <Grid container xs={6} justifyContent="center" alignContent={'flex-start'}>
                        <CardContent style={{paddingLeft: 0, paddingRight: 8, paddingBottom: 0}}>
                            <Typography align={"center"} variant={"button"} paragraph
                                        style={{color: deepOrange['A400'], width: '100%'}}>
                                /{labels['techStack']}/
                            </Typography>
                            {detail['techStack'].map(techItem => (
                                <UniformInfoItem key={'techStack' + techItem} color={deepOrange['A400']}
                                                 text={techItem}/>
                            ))}
                        </CardContent>
                    </Grid>
                    <Grid container xs={6} justifyContent="center" alignContent={'flex-start'}>
                        <CardContent style={{paddingLeft: 8, paddingRight: 0, paddingBottom: 0}}>
                            <Typography align={"center"} variant={"button"} paragraph
                                        style={{color: purple['A400'], width: '100%'}}>
                                /{labels['coreCompetence']}/
                            </Typography>
                            {detail['coreCompetence'].map(competenceItem => (
                                <UniformInfoItem key={'coreCompetence' + competenceItem} color={purple['A400']}
                                                 text={competenceItem}/>
                            ))}
                        </CardContent>
                    </Grid>
                    <Grid item xs={12}><GeneralHorizontalCrossDivider/></Grid>
                    <Grid container xs={12} justifyContent="space-evenly" alignContent={'center'}>
                        <Typography align={"center"} variant={"button"} paragraph
                                    color='primary' style={{width: '100%'}}>
                            /{labels['favoriteResources']}/
                        </Typography>
                        {detail['favoriteResources'].map(resourceItem => (
                            <UniformResourceItem key={'favoriteResources' + (resourceItem.name || resourceItem.url)}
                                                 {...resourceItem}/>
                        ))}
                    </Grid>
                </Grid>
            </CardContent>
        </UniformCard>
    )
}

export default SkillDetailCard

import React from 'react';

import Card from '@material-ui/core/Card';
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Rating from '@material-ui/lab/Rating'

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: 140, backgroundColor: "transparent"
    },
    logoStyle: ({logoHeightRatio}) => ({
        width: 58.33, height: 58.33 * logoHeightRatio
    }),
    nameStyle: ({nameColor}) => ({
        color: nameColor,
        fontWeight: "bolder"
    })
})

function SkillMiniCard({logo, logoHeightRatio, name, nameColor, rating}) {

    const {root, logoStyle, nameStyle} = useStyles({logoHeightRatio, nameColor})

    return (
        <Card elevation={0} className={root}>
            <Grid container>
                <Grid container xs={5} alignContent="center" justifyContent="center">
                    <CardMedia
                        image={logo}
                        title={name}
                        className={logoStyle}
                    />
                </Grid>
                <Grid container xs={7} alignContent="center" justifyContent="center">
                    <Typography variant="caption" align="center" className={nameStyle}>
                        {name}
                    </Typography>
                </Grid>
                <Grid container xs={12} alignContent="center" justifyContent="center">
                    <Rating
                        name="comprehensive rating"
                        readOnly
                        defaultValue={rating}
                        precision={0.5}
                        size="small"
                    />
                </Grid>
            </Grid>
        </Card>
    )
}

export default SkillMiniCard

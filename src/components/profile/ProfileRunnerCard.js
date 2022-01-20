import React from 'react';

import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import {useTranslation} from "react-i18next";

import {makeStyles} from '@material-ui/core/styles';
import {lime} from '@material-ui/core/colors';

import UniformCard from '../UniformCard';
import SingleLineImageList from "../SingleLineImageList";

import runnerRunLevelsCardImage from "../../assets/images/runner/card.run-levels.runner.jpeg"
import runnerRunLevelsDetailImage from "../../assets/images/runner/detail.run-levels.runner.jpeg"
import runnerAchievementsPersonalRecordsImage
    from "../../assets/images/runner/personal-records.achievements.runner.jpeg"
import runnerActivityStatisticsImage from "../../assets/images/runner/statistics.activity.runner.jpeg"
import runnerAchievementsStreaksImage from "../../assets/images/runner/streaks.achievements.runner.jpeg"
import runnerAchievementsTrophiesImage from "../../assets/images/runner/trophies.achievements.runner.jpeg"

const runnerImageItems = [{
    img: runnerRunLevelsCardImage, title: "card.run-levels.runner"
}, {
    img: runnerAchievementsPersonalRecordsImage, title: "personal-records.achievements.runner"
}, {
    img: runnerActivityStatisticsImage, title: "statistics.activity.runner"
}, {
    img: runnerAchievementsStreaksImage, title: "streaks.achievements.runner"
}, {
    img: runnerRunLevelsDetailImage, title: "detail.run-levels.runner"
}, {
    img: runnerAchievementsTrophiesImage, title: "trophies.achievements.runner"
},]

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: lime[100]
    }
}));

export default function ProfileRunnerCard() {
    const classes = useStyles();

    const {t} = useTranslation('me');

    return (<UniformCard className={classes.root}>
        <CardHeader title={t("me:genInfo.runner.slogan")}
                    titleTypographyProps={{variant: "button", color: "secondary", align: "center"}}/>
        <CardContent>
            <SingleLineImageList imageItems={runnerImageItems} imgHeight={700}/>
        </CardContent>
    </UniformCard>)
}

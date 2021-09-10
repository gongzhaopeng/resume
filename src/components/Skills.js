import React, {Fragment} from 'react';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import EmojiSymbolsIcon from '@material-ui/icons/EmojiSymbols';
import CloudDoneIcon from '@material-ui/icons/CloudDone';
import CropIcon from '@material-ui/icons/Crop';
import SvgIcon from '@material-ui/core/SvgIcon'

import {makeStyles} from '@material-ui/core/styles';
import {cyan} from '@material-ui/core/colors';

import UniformCard from './UniformCard'
import SkillItemChip from './SkillItemChip'

import {ReactComponent as SpringLogo} from '../assets/images/logos/spring-logo.svg'

const useStyles = makeStyles(theme => ({
    skillItemChips: {
        display: 'flex',
        flexWrap: "wrap",
        justifyContent: 'center'
    }
}));

function Skills() {

    const {skillItemChips} = useStyles()

    return (
        <Fragment>
            <UniformCard style={{backgroundColor: cyan[300], height: 200}}>
                <CardContent className={skillItemChips}>
                    <SkillItemChip
                        skillIcon={<EmojiSymbolsIcon/>}
                        skillName='Microservice Architecture'
                        color='secondary'
                    />
                    <SkillItemChip
                        skillIcon={<CloudDoneIcon/>}
                        skillName='Kubernetes'
                        color='primary'
                    />
                    <SkillItemChip
                        skillIcon={<CropIcon/>}
                        skillName='Node.js'
                        color='default'
                    />
                    <SkillItemChip
                        // skillIcon={<CloudDoneIcon/>}
                        skillIcon={<SvgIcon component={SpringLogo} viewBox="0 0 97.1 97.1"/>}
                        skillName='Spring Framework'
                        color='primary'
                    />
                    <SkillItemChip
                        skillIcon={<EmojiSymbolsIcon/>}
                        skillName='Spring Cloud'
                        color='secondary'
                    />
                </CardContent>
            </UniformCard>
            <UniformCard style={{backgroundColor: cyan[100], height: 200}}>
                <CardContent>
                    <Typography>
                        Python is all around!
                    </Typography>
                </CardContent>
            </UniformCard>
        </Fragment>
    )
}

export default Skills

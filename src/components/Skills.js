import React, {Fragment} from 'react';

import {shuffler} from 'd3-array'
import {randomLcg} from 'd3-random'

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import EmojiSymbolsIcon from '@material-ui/icons/EmojiSymbols';
import CloudDoneIcon from '@material-ui/icons/CloudDone';
import CropIcon from '@material-ui/icons/Crop';
import Avatar from '@material-ui/core/Avatar'
import SvgIcon from '@material-ui/core/SvgIcon'

import {makeStyles} from '@material-ui/core/styles';
import {cyan} from '@material-ui/core/colors';

import UniformCard from './UniformCard'
import SkillItemChip from './SkillItemChip'

import {ReactComponent as SpringLogo} from '../assets/images/logos/spring-logo.svg'

const skillsData = [
    {name: 'Microservice Architecture', color: 'secondary', logo: null},
    {name: 'Kubernetes', color: 'primary', logo: <CloudDoneIcon/>},
    {name: 'Node.js', color: 'default', logo: <CropIcon/>},
    {name: 'Spring Framework', color: 'primary', logo: <SvgIcon component={SpringLogo} viewBox="0 0 97.1 97.1"/>},
    {name: 'Spring Cloud', color: 'secondary', logo: <EmojiSymbolsIcon/>}
]
const random = randomLcg()
const shuffle = shuffler(random);
shuffle(skillsData)

const useStyles = makeStyles(theme => ({
    skillItemChips: {
        display: 'flex',
        flexWrap: "wrap",
        justifyContent: 'center'
    },
    letterSkillLogo: {
        width: theme.spacing(3),
        height: theme.spacing(3),
        // textTransform: 'uppercase'
    }
}));

function Skills() {

    const {skillItemChips, letterSkillLogo} = useStyles()

    return (
        <Fragment>
            <UniformCard style={{backgroundColor: cyan[300], height: 200}}>
                <CardContent className={skillItemChips}>
                    {skillsData.map(({name, color, logo}) => {
                        if (!logo)
                            logo = <Avatar className={letterSkillLogo}>{name.charAt(0)}</Avatar>

                        return <SkillItemChip
                            key={name}
                            skillIcon={logo}
                            skillName={name}
                            color={color}
                        />
                    })}
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

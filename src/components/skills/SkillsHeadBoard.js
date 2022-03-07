import React from 'react';

import {shuffler} from 'd3-array'
import {randomInt, randomLcg} from 'd3-random'

import CardContent from '@material-ui/core/CardContent';

import {makeStyles} from '@material-ui/core/styles';
import {cyan} from '@material-ui/core/colors';

import UniformCard from '../UniformCard'
import SkillItemChip from './SkillItemChip'
import SkillDetailDialog from './SkillDetailDialog'

import javaBackendDevLogo from '../../assets/images/skills/logo/java-backend-dev.skills.logo.png'

const skillsData = [
    {
        name: 'Java后端开发',
        color: 'secondary',
        logo: {
            img: javaBackendDevLogo,
            widthRatio: 640 / 400
        }
    }
]
const skillsNameToData = skillsData.reduce((previousValue, currentValue) => {
    previousValue[currentValue.name] = currentValue
    return previousValue
}, {})
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

function SkillsHeadBoard() {

    const {skillItemChips} = useStyles()

    function selectBlinkingSkill() {
        return skillsData[randomInt.source(random)(0, skillsData.length)()].name
    }

    const [popoverSkill, setPopoverSkill] = React.useState(null);
    const [blinkingSkill, setBlinkingSkill] = React.useState(selectBlinkingSkill());

    const onClickSkillItemChip = name => {
        setPopoverSkill(name)
        setBlinkingSkill(null)
    }

    const onCloseSkillDetailDialog = () => {
        setPopoverSkill(null)
        setBlinkingSkill(selectBlinkingSkill())
    }

    return (
        <UniformCard style={{backgroundColor: cyan[300], minHeight: 200}}>
            <CardContent className={skillItemChips}>
                {skillsData.map(({name, color, logo}) => {
                    return <SkillItemChip
                        key={name}
                        logoImg={logo.img}
                        logoWidthRatio={logo.widthRatio}
                        skillName={name}
                        selected={name === popoverSkill}
                        blinking={name === blinkingSkill}
                        color={color}
                        onClick={onClickSkillItemChip.bind(null, name)}
                    />
                })}
                {popoverSkill && (
                    <SkillDetailDialog logoImg={skillsNameToData[popoverSkill].logo.img}
                                       logoWidthRatio={skillsNameToData[popoverSkill].logo.widthRatio}
                                       skillName={popoverSkill}
                                       onClose={onCloseSkillDetailDialog}>
                        {skillsNameToData[popoverSkill].detail}
                    </SkillDetailDialog>
                )}
            </CardContent>
        </UniformCard>
    )
}

export default SkillsHeadBoard

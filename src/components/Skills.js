import React, {Fragment} from 'react';

import {shuffler} from 'd3-array'
import {randomInt, randomLcg} from 'd3-random'

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar'
import SvgIcon from '@material-ui/core/SvgIcon'

import {makeStyles} from '@material-ui/core/styles';
import {cyan} from '@material-ui/core/colors';

import UniformCard from './UniformCard'
import SkillItemChip from './SkillItemChip'
import SkillDetailDialog from './SkillDetailDialog'

import {ReactComponent as SpringLogo} from '../assets/images/logos/spring-logo.svg'
import {ReactComponent as MicroserviceLogo} from '../assets/images/logos/microservice-logo.svg'
import {ReactComponent as SpringCloudLogo} from '../assets/images/logos/spring-cloud.logo.svg'
import {ReactComponent as KubernetesLogo} from '../assets/images/logos/kubernetes-logo.svg'
import {ReactComponent as NodejsLogo} from '../assets/images/logos/node-js-logo.svg'

const skillsData = [
    {
        name: 'Spring Framework',
        color: 'secondary',
        logo: <SvgIcon component={SpringLogo} viewBox="0 0 97.1 97.1"/>,
        detail: [
            <Typography>For example, instances of Employee can be differentiated according to their job, that is,
                whether they are researchers or administrators, and whether they are financed directly via the
                university or
                via a project. Multiple classification means that an object can be an instance of multiple classes
                whose characteristics the object then has. In Figure 4.26, we have divided the generalization
                relationships into two groups. The sets Job and Financing form generalization sets which group
                subclasses according to multiple independent criteria. Generalization sets can be described more
                precisely by the following constraints.
                Similarly to the abstract class, an interface also does not have an implementation or any direct
                instances. An interface represents a contract. The classes that enter into this contract, that is,
                the classes that implement the interface, obligate themselves to provide the behavior specified by
                the interface. In contrast to the relationship between an abstract class and its subclasses, an “is
                a” relationship between an interface and the classes that implement it is not necessary. Operations
                of interfaces never have an implementation.</Typography>,
            <Typography>GOAL....................</Typography>
        ]
    },
    {
        name: 'Microservice Architecture',
        color: 'primary',
        logo: <SvgIcon component={MicroserviceLogo} viewBox="0 0 292.3 304.4"/>,
        detail: [
            <Typography>GOAL....................</Typography>
        ]
    },
    {
        name: 'Spring Cloud',
        color: 'secondary',
        logo: <SvgIcon component={SpringCloudLogo} viewBox="0 0 271 239"/>,
        detail: [
            <Typography>GOAL....................</Typography>
        ]
    },
    {
        name: 'Kubernetes',
        color: 'default',
        logo: <SvgIcon component={KubernetesLogo} viewBox="0 0 68 66"/>,
        detail: [
            <Typography>GOAL....................</Typography>
        ]
    },
    {
        name: 'Node.js',
        color: 'default',
        logo: <SvgIcon component={NodejsLogo} viewBox="0 0 442.37 270.929"/>,
        detail: [
            <Typography>GOAL....................</Typography>
        ]
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

function Skills() {

    const {skillItemChips, letterSkillLogo} = useStyles()

    function selectBlinkingSkill() {
        return skillsData[randomInt.source(random)(0, skillsData.length)()].name
        return null
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
        <Fragment>
            <UniformCard style={{backgroundColor: cyan[300], minHeight: 200}}>
                <CardContent className={skillItemChips}>
                    {skillsData.map(({name, color, logo}) => {
                        if (!logo)
                            logo = <Avatar className={letterSkillLogo}>{name.charAt(0)}</Avatar>

                        return <SkillItemChip
                            key={name}
                            skillIcon={logo}
                            skillName={name}
                            selected={name === popoverSkill}
                            blinking={name === blinkingSkill}
                            color={color}
                            onClick={onClickSkillItemChip.bind(null, name)}
                        />
                    })}
                    {popoverSkill && (
                        <SkillDetailDialog skillIcon={skillsNameToData[popoverSkill].logo}
                                           skillName={popoverSkill}
                                           onClose={onCloseSkillDetailDialog}>
                            {skillsNameToData[popoverSkill].detail}
                        </SkillDetailDialog>
                    )}
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

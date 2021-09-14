import React, {Fragment} from 'react';

import {shuffler} from 'd3-array'
import {randomLcg} from 'd3-random'

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
    {name: 'Spring Framework', color: 'secondary', logo: <SvgIcon component={SpringLogo} viewBox="0 0 97.1 97.1"/>},
    {
        name: 'Microservice Architecture',
        color: 'primary',
        logo: <SvgIcon component={MicroserviceLogo} viewBox="0 0 292.3 304.4"/>
    },
    {name: 'Spring Cloud', color: 'secondary', logo: <SvgIcon component={SpringCloudLogo} viewBox="0 0 271 239"/>},
    {name: 'Kubernetes', color: 'default', logo: <SvgIcon component={KubernetesLogo} viewBox="0 0 68 66"/>},
    {name: 'Node.js', color: 'default', logo: <SvgIcon component={NodejsLogo} viewBox="0 0 442.37 270.929"/>}
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

    const [popoverSkill, setPopoverSkill] = React.useState(null);

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
                            color={color}
                            onClick={() => {
                                setPopoverSkill(name)
                            }}
                        />
                    })}
                    {popoverSkill && (
                        <SkillDetailDialog skillName={popoverSkill}
                                           onClose={() => setPopoverSkill(null)}>
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

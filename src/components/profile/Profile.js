import React, {Fragment} from 'react';

import ProfileHeadCard from './ProfileHeadCard'
import ProfileRunnerCard from "./ProfileRunnerCard";
import ProfileEducationCard from "./ProfileEducationCard"

export default function Profile() {

    return (<Fragment>
        <ProfileHeadCard/>
        <ProfileRunnerCard/>
        <ProfileEducationCard/>
    </Fragment>);
}

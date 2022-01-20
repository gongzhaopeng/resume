import React, {Fragment} from 'react';

import ProfileHeadCard from './ProfileHeadCard'
import ProfileRunnerCard from "./ProfileRunnerCard";

export default function Profile() {

    return (<Fragment>
        <ProfileHeadCard/>
        <ProfileRunnerCard/>
    </Fragment>);
}

import React, {Fragment} from 'react';

import ProfileHeadCard from './ProfileHeadCard'
import ProfileRunnerCard from "./ProfileRunnerCard";
import ProfileEducationCard from "./ProfileEducationCard"
import ProfileFamilyCard from './ProfileFamilyCard'
import ProfileSoccerCard from './ProfileSoccerCard'
import ProfileMovieCard from './ProfileMovieCard'
import ProfileMusicCard from './ProfileMusicCard'

export default function Profile() {

    return (<Fragment>
        <ProfileHeadCard/>
        <ProfileRunnerCard/>
        <ProfileEducationCard/>
        <ProfileFamilyCard/>
        <ProfileSoccerCard/>
        <ProfileMovieCard/>
        <ProfileMusicCard/>
    </Fragment>);
}

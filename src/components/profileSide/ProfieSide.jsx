import React from 'react';
import './profileSide.css';
import LogoSearch from '../LogoSearch/LogoSearch';
import ProfileCard from '../ProfileCard/ProfileCard';
import FollowersCard from '../FollowersCard/FollowersCard';

const ProfieSide = () => {
  	return (
		<div className='ProfileSide'>
			ProfileSide
			<LogoSearch/>
			<ProfileCard/>
			<FollowersCard/>
		</div>
  	)
}

export default ProfieSide
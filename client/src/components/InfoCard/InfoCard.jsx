import React, { useState } from 'react';
import "./InfoCard.css";
import {UilPen} from "@iconscout/react-unicons";
import ProfileModal from '../ProfileModal/ProfileModal';

const InfoCard = () => {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<div className='InfoCard'>
			<div className='infoHead'>
				<h4>Your Info</h4>
				<div>
					<UilPen width='2rem' height='1.2rem' onClick={() => setModalOpen(true)}/>
					<ProfileModal open={modalOpen} setOpen={setModalOpen}/>
				</div>
			</div>
			<div className='info'>
				<span>
					<b>Status</b>
				</span>
				<span> in Relationship</span>
			</div>
			<div className='info'>
				<span>
					<b>Lives in</b>
				</span>
				<span> New York</span>
			</div>		
			<div className='info'>
				<span>
					<b>Works at</b>
				</span>
				<span> Netflix, Inc.</span>
			</div>	
			<button className='button logout-button'>Logout</button>
		</div>
	)
}

export default InfoCard
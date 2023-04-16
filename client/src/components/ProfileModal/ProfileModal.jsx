import React, { useState } from 'react';
import "./ProfileModal.css";
import {Modal, useMantineTheme} from "@mantine/core";

const ProfileModal = ({modalOpen, setModalOpen}) => {
	const theme = useMantineTheme();

	return (
		<Modal
			overlayColor={theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.dark[2]}
			overlayOpacity={0.55}
			overlayBlur={3}
			size='55%'
			opened={modalOpen}
			onClose={() => setModalOpen(false)}
		>
			<form className='infoForm'>
				<h3>Your Info</h3>
				<div>
					<input 
						className='infoInput' 
						name='firstname' 
						placeholder='First Name'
					/>
					<input 
						className='infoInput' 
						name='lastname' 
						placeholder='Last Name'
					/>
				</div>
				<div>
					<input 
						className='infoInput' 
						name='worksAt' 
						placeholder='Works At'
					/>
					<input 
						className='infoInput' 
						name='relationship' 
						placeholder='Relationship Status'
					/>
				</div>
				<div>
					<input 
						className='infoInput' 
						name='livesIn' 
						placeholder='Lives In'
					/>
					<input 
						className='infoInput' 
						name='country' 
						placeholder='Country'
					/>
				</div>
				<div>
					Profile Image
					<input
						type='file'
						name='profileImg'
					/>
					Cover Image 
					<input
						type='file'
						name='coverImg'
					/>
				</div>
				<button className='button infoButton'>Update</button>
			</form>
		</Modal>
	)
}

export default ProfileModal
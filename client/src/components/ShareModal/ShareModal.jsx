import React from 'react';
import "./ShareModal.css";
import {Modal, useMantineTheme} from "@mantine/core";
import PostShare from '../PostShare/PostShare';


const ShareModal = ({modalOpen, setModalOpen}) => {
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
		<PostShare/>
		</Modal>
	)
}

export default ShareModal
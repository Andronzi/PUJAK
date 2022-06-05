import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Div } from '@vkontakte/vkui';
import GameConfig from '../otherComponents/GameConfig.js'
import "../base.css"

const Home = ({ id, go }) => {
	const [visible, setVisible] = useState(false)

	return <Panel id={id}>
		<PanelHeader>Находка Шпиона</PanelHeader>
		
		<GameConfig go={go} visible={visible} onClose={() => setVisible(false)}/>	
		<Group header={<Header mode="secondary">Menu</Header>} hidden={visible}>
			<Div style={{height: "100%"}}>
				<Button className='mrgn' stretched size="l" mode="secondary" onClick={() => setVisible(true)}>
					New game
				</Button>
				<Button className='mrgn' stretched size="l" mode="secondary" onClick={go} data-to="locations">
					Show me locations
				</Button>
			</Div>
		</Group>
	</Panel>
}

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;

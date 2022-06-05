import React, { useState, useEffect, useCallback } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { 
	View, 
	ScreenSpinner, 
	AdaptivityProvider, 
	AppRoot, 
	ConfigProvider, 
	SplitLayout, 
	SplitCol, 
	Button,
	Panel 
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home.js';
import LocationsPreview from "./panels/LocationsPreview.js"
import Game from "./panels/Game.js"
import GameEnd from "./panels/GameEnd.js"

const App = () => {
	const [scheme, setScheme] = useState('bright_light')
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				setScheme(data.scheme)
			}
		});

		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = useCallback(e => {
		setActivePanel(e.currentTarget.dataset.to)
	}, [setActivePanel])

	const goDirect = useCallback(id => (() => {
		setActivePanel(id)
	}), [setActivePanel])

	return (
		<ConfigProvider scheme={scheme}>
			<AdaptivityProvider>
				<AppRoot >
					<SplitLayout popout={popout} >
						<SplitCol>
							<View activePanel={activePanel}>
								<Home id='home' go={go} />

								<LocationsPreview id="locations" go={go} goBack="home" />
								
								<Game id="game" goDirect={goDirect("gameEnd")}/>

								<GameEnd />
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;

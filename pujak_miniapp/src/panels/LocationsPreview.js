import React, { createContext, useContext } from "react"
import { Panel, PanelHeader, PanelHeaderBack, View } from '@vkontakte/vkui';
import { v4 } from "uuid"

const pathes = []

function requireAll(r) {
    r.keys().forEach((...a) => {
        const module = r(...a);
        
        for(let i in module){
            pathes.push(module[i]);
        }
    });
};

requireAll(require.context('../img/locations', false, /\.jpg$/));

export const locationsContext = createContext(pathes.map(path => ({ id: v4(), src: path })))  


const LocationsPreview = ({ id, go, goBack }) => {
    const locations = useContext(locationsContext)

    return (
        <Panel id={id} style={{height: "100%"}}>
            <PanelHeader left={<PanelHeaderBack onClick={go} data-to={goBack}/>}>
			    Go back
		    </PanelHeader>
            <div style={{height: "100%"}}>
                <ul className="scrollable">
                    {locations.map(obj => <li key={obj.id}>
                        <img className="listImg" src={obj.src} />
                    </li>)}
                </ul>
            </div>
        </Panel>
    )
}

export default LocationsPreview
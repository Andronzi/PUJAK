import React, { useContext, useState, useCallback, useEffect } from "react"
import { Panel, PanelHeader, Button, Group, View } from '@vkontakte/vkui';
import playerContext from "../hooks/playerContext";
import { locationsContext } from "./LocationsPreview";

const Game = ({id, goDirect}) => {
    const pContext = useContext(playerContext)
    const locContext = useContext(locationsContext)

    const [activePanel, setActivePanel] = useState({ id: "broadcastScreen", index: 0})
    const [timer, setTimer] = useState({ timeLeft: 0, interval: null })
    const [imgSrc, setImgSrc] = useState(0)
    
    const gameEnd = useCallback(() => {
        clearInterval(timer.interval)
        goDirect()
    }, [])

    useEffect(() => {
        const tick = () => {
            if (timer.timeLeft < 0) {
                gameEnd();
            }

            setTimer(prev => ({
                timeLeft: prev.timeLeft - 1000,
                interval: prev.interval
            }))
        }

        if (!timer.interval) {
            setTimer({
                timeLeft: 60000 * pContext.names.length,
                interval: setInterval(tick, 1000)
            })
        } else {
            setTimer({
                timeLeft: timer.timeLeft,
                interval: setInterval(tick, 1000)
            })
        }
    }, [])
    
    return (
        <Panel id={id}>
            <PanelHeader>{`time: ${timer && timer.timeLeft / 1000 }`}</PanelHeader>
            <Group>
                <View activePanel={activePanel.id} style={{ margin: "10px"}}>
                    <Panel id="broadcastScreen">
                        <div className="overlapper">
                            <h2>{`Передайте телефон игроку ${pContext.names[activePanel.index]}`}</h2>
                            <Button className="mrgn" onClick={() => {
                                setActivePanel(prev => ({...prev, id: "location"}))
                                setImgSrc(locContext[Math.floor(locContext.length * Math.random())].src)
                            }}>
                                Ready
                            </Button>
                        </div>
                    </Panel>
                    <Panel id="location">
                        <div style={{ display:"flex", justifyContent: "center"}}>
                            <div>
                                <div>
                                    { pContext.roles[activePanel.index] 
                                    ? <h1>  _ Вы шпион _</h1>
                                    : <img className="listImg" src={imgSrc}/> }
                                </div>
                                <Button stretched size="l" className="mrgn" onClick={() => {
                                    setActivePanel(prev => ({
                                        index: (prev.index + 1) % pContext.names.length, 
                                        id: "broadcastScreen"
                                    }))
                                }}>
                                    Next
                                </Button>
                            </div>
                        </div>
                    </Panel>
                </View>
            </Group>
        </Panel>
    )
}

export default Game;
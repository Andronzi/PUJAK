import React, { useContext, useState, useEffect } from "react"
import playerContext from "../hooks/playerContext"

const GameEnd = ({}) => {
    const pContext = useContext(playerContext)
    const [lightIndicator, setLightIndicator] = useState({ interval: null, level: 0 })

    useEffect(() => {
        if (lightIndicator.interval) {
            clearInterval(lightIndicator.interval)
        }
        lightIndicator.interval = setInterval(() => {
            setLightIndicator(prev => ({...prev, level: !prev.level}))
            bridge.send("VKWebAppFlashSetLevel", {"level": lightIndicator.level});
        }, 400)
    }, [])

    return <Panel id="gameEnd">
        <h2>END</h2>
        <ul className="scrollable">
            { pContext.roles.map((r, i) => <li>
                <a>{ `${pContext.names[i]} был ${r ? "Шпиомом" : "Обычным игроком"}`  }</a>
            </li>)}
        </ul>
    </Panel>
} 

export default GameEnd
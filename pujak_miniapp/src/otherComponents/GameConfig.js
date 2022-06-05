import React, { useState, useCallback, useContext, useEffect } from "react"
import { ModalCardBase, Input, Button } from '@vkontakte/vkui';
import playerContext from "../hooks/playerContext";
import "../base.css"
import { Checkbox } from "@vkontakte/vkui/dist/components/Checkbox/Checkbox";

const GameConfig = ({ go, onClose, visible }) => {
    const [playersCount, setPlayersCount] = useState(3)
    const pContext = useContext(playerContext)
    const [names, setNames] = useState(pContext.names)
    const [roles, setRoles] = useState(pContext.roles)

    useEffect(() => {
        pContext.names = [];
        pContext.scores = [];
        pContext.roles = [];
        for (let i = 0; i < playersCount; ++i) {
            pContext.names.push("default_name")
            pContext.scores.push(0)
            pContext.roles.push(0)
        }
    }, [playersCount])

    const createPlayerInputs = useCallback(() => {
        const inputs = [];

        for (let i = 0; i < playersCount; ++i) {
            inputs.push(
                <div key={i} style={{ display: "flex" }}>
                    <Checkbox value={roles[i]} onChange={e => {
                        setRoles(prev => {
                            prev[i] = +e.target.checked
                            pContext.roles = [...prev]
                            return pContext.roles
                        })
                    }}/>
                    <Input 
                        onChange={({ target }) => setNames(prev => {
                            const newPlayers = [...prev]
                            newPlayers[i] = target.value 
                            pContext.names = [...newPlayers]
                            return pContext.names
                        })}  
                        value={names[i] !== "default_name" ? names[i] : ""}
                        placeholder={`Player name ${i}`}
                    />
                </div> 
            )
        }

        return inputs
    }, [playersCount, names])

    const startGame = useCallback(e => {
        if (!roles.find(el => el === 1)) {
            setRoles(prev => {
                prev[Math.floor(Math.random() * prev.length)] = 1
                return prev;
            })
        }
        go(e)
    }, [go, roles, setRoles])

    return (
        <ModalCardBase 
            style={{ height: "300px" }}
            hidden={!visible} 
            onClose={onClose} 
            header="Config your game" 
            actions={
                <Button 
                    mode="secondary"
                    title="Start game"
                    onClick={startGame}
                    data-to="game"
                >
                    Start game
                </Button>
            }
        >
            <div className="scrollable" style={{ height: "250px" }}>
                <a className="mrgn">Players count</a>
                <Input 
                    onChange={({ target }) => setPlayersCount(target.value)} 
                    aria-label="Players count" 
                    value={playersCount}
                    title="Players count"
                    style={{ marginBottom: "5px" }}
                />
                <h4>Is Spy | Player name</h4>
                <div style={{ marginBottom: "30px" }}>
                    { createPlayerInputs() }
                </div>
            </div>
        </ModalCardBase>
    )
}

export default GameConfig
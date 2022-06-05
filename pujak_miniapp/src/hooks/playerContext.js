import React, { createContext } from "react"

const playerContext = createContext({ names: [], scores: [], roles: [] })

export default playerContext;
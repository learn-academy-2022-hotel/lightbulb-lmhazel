import React, { useState } from "react"
import "./App.css"
import LightSwitch from "./components/LightSwitch"

const App = () => {
  const [lightSwitchStatus, setLightSwitchStatus] = useState("off");
  const [changeBackground, setChangeBackground] = useState("white")

  return (
    <>
      <h1>Lightbulb Challenge</h1>
      <LightSwitch />
      <LightSwitch />
      <LightSwitch />
    </>
  )
}

export default App



import React, { useState } from "react"
import lightOff from "../assets/lightOff.png"
import lightOn from "../assets/lightOn.png"
import switchOff from "../assets/switchOff.png"
import switchOn from "../assets/switchOn.png"

const LightSwitch = () => {
  const [lightSwitchStatus, setLightSwitchStatus] = useState("off")
  const [changeBackground, setChangeBackground] = useState("white")

  const changeStatus = () => {
    setLightSwitchStatus(lightSwitchStatus === "off" ? "on" : "off")
    setChangeBackground(changeBackground === "white" ? "yellow" : "white")
  }
  
  return (
    <>
      <div 
        // <img
        // src="../assets/lightOff.png"
        // alt="car"
        // />
      className="lightbulb"
      onClick = {changeStatus}
      style={{
        backgroundColor: changeBackground
      }}
      //style={{ backgroundImage: `url(${lightSwitchStatus})`}}
      >
      {lightSwitchStatus}
      </div>
    </>
  )
}

export default LightSwitch

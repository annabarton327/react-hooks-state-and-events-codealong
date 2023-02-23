import React, { useState } from "react";

function Toggle() {

  const [saysOff, buttonIsOff] = useState(true)
  const color = saysOff ? "white" : "red"

  function clickEvent(event) {
      buttonIsOff(!saysOff)

  }


    return (

    <button  style={{ background: color }} onClick={clickEvent}>{saysOff ? "OFF" : "ON"}</button>

    )
}

export default Toggle;

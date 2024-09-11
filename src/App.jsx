import React, { useState } from "react";




export default () => {
  const [ clicks, setClicks ] = useState(0);
  return <h1 onClick={ e => setClicks(clicks + 1)} >
    Hello, click me {clicks}
  </h1>;
}
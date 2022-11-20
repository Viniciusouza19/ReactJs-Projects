import React, { useEffect, useState } from "react";
import "../../css/responsive.css";
import "../../css/style.css";
import Navbar from "../Navbar/Navbar";
export default function Home() {
  let date = new Date();
  const [hours, setHoursState] = useState("00");
  const [seconds, setSecondsState] = useState("00");
  const [minutes, setMinutesState] = useState("00");
  useEffect(() => {
    setTimeout(() => {
      setSecondsState(date.getSeconds());
      setMinutesState(date.getMinutes());
      setHoursState(date.getHours());
    }, 1000);
  }, [date, seconds, minutes, hours]);
  return (
    <div className="container">
      <Navbar />
      <div className="containerRelogio">
        <div className="h">
          <p id="hours">{hours.toString().padStart(2, "0")}</p>
        </div>
        <h1 className="separadores">:</h1>
        <div className="h">
          <p id="minutes">{minutes.toString().padStart(2, "0")}</p>
        </div>
        <h1 className="separadores">:</h1>
        <div className="h">
          <p id="seconds">{seconds.toString().padStart(2, "0")}</p>
        </div>
      </div>
    </div>
  );
}

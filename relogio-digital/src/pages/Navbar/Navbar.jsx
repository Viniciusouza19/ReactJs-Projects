import React, { useEffect, Fragment } from "react";
import axios from "../../../node_modules/axios/lib/axios";

export default function Navbar() {
  const [location, setLocation] = React.useState(false);
  const [wheather, setWheather] = React.useState(false);

  let getWheather = async (lat, long) => {
    let res = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          lat: lat,
          lon: long,
          appid: "3f2c1f28b434c1bfa0bf61c8fd8cb93b",
          units: "metric",
        },
      }
    );
    setWheather(res.data);
    console.log(wheather);
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      getWheather(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    });
  }, []);
  if (location == false) {
    return <Fragment></Fragment>;
  } else {
    return (
      <Fragment>
        <div
          className="container"
          style={{
            position: "absolute",
            background: "rgba(0,0,0,0.5)",
            width: "600px",
            height: "130px",
            top: "23%",
            borderRadius: "10px",
            color: "white",
          }}
        >
          <h2 style={{ textAlign: "center" }}>{wheather["name"]}</h2>
          <h3 style={{ textAlign: "center" }}></h3>
        </div>
      </Fragment>
    );
  }
}

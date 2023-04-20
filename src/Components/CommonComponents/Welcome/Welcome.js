import React, { useEffect, useState } from "react";
import "./welcome.css";
import night from "../../../assets/images/night.jpeg";
import morning from "../../../assets/images/morning.webp";
import afternoon from "../../../assets/images/afternoon.webp";
import evening from "../../../assets/images/evening.webp";
import { isExpired, decodeToken } from "react-jwt";
export default function Welcome() {
  var [decodedData, setFullData] = useState();
  var [date, setDate] = useState();
  const [banner, setBanner] = useState();
  const [wish, setWish] = useState();
  useEffect(() => {
    var token = localStorage.getItem("token");
    console.log(decodeToken(token));
    setFullData(decodeToken(token));

    var date = new Date();
    setDate(date.toString().substring(0, 25));

    if (date.getHours() >= 5 && date.getHours <= 12) {
      setWish("Good morning");
      setBanner(morning);
    } else if (date.getHours() >= 12 && date.getHours() <= 16) {
      setWish("Good afternoon");
      setBanner(afternoon);
    } else if (date.getHours() >= 16 && date.getHours() <= 20) {
      setWish("Good evening");
      setBanner(evening);
    } else {
      setWish("Good night");
      setBanner(night);
    }
  }, []);
  return (
    <div>
      {decodedData && (
        <div className="welcome-container">
          <div className="banner">
            <img src={banner}></img>
          </div>
          <div className="overlay">
            <div className="basicDetails">
              {wish} &nbsp; {decodedData.userexist.FullName}!!
            </div>
            <div className="date">{date}</div>
          </div>
        </div>
      )}
    </div>
  );
}

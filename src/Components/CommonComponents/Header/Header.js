import React, { useContext, useEffect, useState } from "react";
import "./header.css";
import bell from "../../../assets/images/new.svg";

import SearchIcon from "@mui/icons-material/Search";
import { isExpired, decodeToken } from "react-jwt";
import { searchContext } from "../../../Context/searchContext";

export default function Header() {
  var [decodedData, setFullData] = useState();
  const [imgpath, setImgPath] = useState();
  const { searchVariable, updateSearchVariable } = useContext(searchContext);
  const handleChange = (e) => {
    updateSearchVariable(e.target.value);
  };

  useEffect(() => {
    var token = localStorage.getItem("token");
    console.log(decodeToken(token));
    setFullData(decodeToken(token));
    setImgPath("");
  }, []);
  return (
    <div>
      <header>
        <input
          type="text"
          className="header-input"
          placeholder="🔍 Search"
          onChange={handleChange}
        ></input>
        <div className="user-details">
          <img className="notification" src={bell}></img>
          <p className="user-name">{decodedData?.userexist.FullName}</p>

          <div className="dp">
            <img
              src={`/${decodedData?.userexist.avatar}`}
              style={{ height: "45px", width: "45px" }}
            ></img>
          </div>
        </div>
      </header>
    </div>
  );
}

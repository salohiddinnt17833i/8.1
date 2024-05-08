import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import logo from "../../assets/logo.svg";
import main from "../../assets/main.svg";
import user from "../../assets/user.svg";
import tracking from "../../assets/tracking.svg";
import redirect from "../../assets/redirect.svg";
import description from "../../assets/description.svg";
import profile from "../../assets/Profile.svg";

import "./Header.css";

function Header() {
  const [name, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div className="bg">
        <div className="container header">
          <div>
            <a href="#" className="logo">
              <img src={logo} alt="" />
              <span className="projectName">Loyiha nomi</span>
            </a>
          </div>

          <ul className="nav">
            <li>
              <a href="#" className="tab text-[#0062FF]">
                <img src={main} alt="" />
                Asosiy
              </a>
            </li>
            <li>
              <a href="#" className="tab">
                <img src={user} alt="" />
                Mijozlar bazasi
              </a>
            </li>
            <li>
              <a href="#" className="tab">
                <img src={tracking} alt="" />
                Tracking loyihalari
              </a>
            </li>
            <li>
              <a href="#" className="tab">
                <img src={description} alt="" />
                Sharh olish loyihalari
              </a>
            </li>
            <li>
              <a href="#" className="tab">
                <img src={redirect} alt="" />
                Redirect loyihalari
              </a>
            </li>
          </ul>

          <div className="select">
            <a href="#"><img src={profile} alt="" /></a>
           <p> Austin Robertson</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

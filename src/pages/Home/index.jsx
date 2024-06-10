import { act, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../routes/app.routes";

import { IoIosNotifications } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

import logoHand from "../../assets/svgs/hand.svg";

import "./styles.css";
import { Input } from "../../components/input";
import { BtnMenu } from "../../components/btnMenu";

export function Home() {
  const [activeLink, setActiveLink] = useState("Explore");
  const navigate = useNavigate();

  const handleSetActive = (link, path) => {
    setActiveLink(link);
    navigate(path);
  };

  return (
    <div>
      <div className="navbar-container">
        <div className="navbar-item navbar-left">
          <img src={logoHand} alt="Logo" className="logo me-3" />
          <h1 className="m-0 fw-medium">Tech-Squad</h1>
        </div>

        <div className="navbar-item navbar-center">
          <Input icon={CiSearch} placeholder="Search" />
        </div>

        <div className="navbar-item navbar-right btn-container">
          <button className="btn-notification">
            <IoIosNotifications size={30} className="bell" />
          </button>

          <BtnMenu user={"Admin"} icon={IoIosArrowDown} />
        </div>
      </div>

      <div className="navigation-container">
        <div className="tab-container">
          <input
            type="radio"
            name="tab"
            id="tab1"
            className="tab tab--1"
            checked={activeLink === "Explore"}
            readOnly
          />
          <label
            className="tab_label"
            for="tab1"
            onClick={() => handleSetActive("Explore", "/")}
          >
            Explore
          </label>

          <input
            type="radio"
            name="tab"
            id="tab2"
            className="tab tab--2"
            checked={activeLink === "Make questions"}
            readOnly
          />
          <label
            className="tab_label"
            for="tab2"
            onClick={() => handleSetActive("Make questions", "/make-questions")}
          >
            Make questions
          </label>

          <input
            type="radio"
            name="tab"
            id="tab3"
            className="tab tab--3"
            checked={activeLink === "Settings"}
            readOnly
          />
          <label
            className="tab_label"
            for="tab3"
            onClick={() => handleSetActive("Settings", "/settings")}
          >
            Settings
          </label>

          <div className="indicator"></div>
        </div>
      </div>

      <AppRoutes />

      <Outlet />
    </div>
  );
}

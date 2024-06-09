import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
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

  const handleSetActive = (link) => {
    setActiveLink(link);
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
          <button className="btn-notication">
            <IoIosNotifications size={30} />
          </button>

          <BtnMenu user={"Admin"} icon={IoIosArrowDown} />
        </div>
      </div>

      <div className="navigation-container">
        <ul className="nav nav-underline">
          <li className="nav-item">
            <Link
              to="/"
              className={`custom-nav-link ${
                activeLink === "Explore" ? "custom-active" : ""
              }`}
              onClick={() => handleSetActive("Explore")}
            >
              Explore
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/make-questions"
              className={`custom-nav-link ${
                activeLink === "Make questions" ? "custom-active" : ""
              }`}
              onClick={() => handleSetActive("Make questions")}
            >
              Make questions
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/settings"
              className={`custom-nav-link ${
                activeLink === "Settings" ? "custom-active" : ""
              }`}
              onClick={() => handleSetActive("Settings")}
            >
              Settings
            </Link>
          </li>
        </ul>
      </div>

      <AppRoutes />

      <Outlet />
    </div>
  );
}

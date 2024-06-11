import { act, useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../routes/app.routes";

import { IoIosNotifications } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

import logoHand from "../../assets/svgs/hand.svg";

import "./styles.css";
import { Input } from "../../components/input";
import { BtnMenu } from "../../components/btnMenu";

export function Home() {
  const [activeLink, setActiveLink] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedActiveLink = localStorage.getItem("activeLink");
    if (storedActiveLink) {
      setActiveLink(storedActiveLink);
      navigate(getPath(storedActiveLink));
    }
  }, []);

  const handleSetActive = (link, path) => {
    setActiveLink(link);
    localStorage.setItem("activeLink", link);
    navigate(getPath(link));
  };

  const getPath = (link) => {
    switch (link) {
      case "Explore":
        return "/";
      case "Make questions":
        return "/make-questions";
      case "Settings":
        return "/settings";
      case "Information":
        return "/info";
      default:
        return "/";
    }
  };

  const isRouteInfo = location.pathname === "/info";

  return (
    <div>
      <div className="navbar-container">
        <div
          className="navbar-item navbar-left"
          onClick={() => handleSetActive("Explore", "/")}
        >
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

      {!isRouteInfo && (
        <>
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
                onClick={() =>
                  handleSetActive("Make questions", "/make-questions")
                }
              >
                Make questions
              </label>

              <div className="indicator"></div>
            </div>
          </div>
        </>
      )}

      <AppRoutes />

      <Outlet />
    </div>
  );
}

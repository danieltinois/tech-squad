import { useEffect, useRef, useState } from "react";
import "./styles.css";
import { DarkLightIcon } from "../iconsMenu/darkLightIcon";
import { LanguageIcon } from "../iconsMenu/languageIcon";
import { LogOutIcon } from "../iconsMenu/logOutIcon";

export function BtnMenu({ icon: Icon, user, ...rest }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHoveredButton, setIsHoveredButton] = useState(null);
  const dropdownRef = useRef();

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target))
      setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`dropdown-container ${isOpen ? "open" : ""}`}
      ref={dropdownRef}
      {...rest}
    >
      <button className="btn-menu" onClick={toggleDropDown}>
        <img
          src="https://avatars.githubusercontent.com/u/99421761?s=400&u=dd76f7f8c19436a56e670ddc9e9bd3eb7410cc0d&v=4"
          alt="User"
        />
        <span className="user-name">{user}</span>
        {Icon && (
          <Icon
            size={18}
            className={`dropdown-icon ${isOpen ? "rotate" : ""}`}
          />
        )}
      </button>
      <div className="dropdown-options">
        <button
          className="option"
          onMouseEnter={() => setIsHoveredButton("dark/light")}
          onMouseLeave={() => setIsHoveredButton(null)}
        >
          <DarkLightIcon isHovered={isHoveredButton === "dark/light"} />
          dark/light
        </button>
        <button
          className="option"
          onMouseEnter={() => setIsHoveredButton("language")}
          onMouseLeave={() => setIsHoveredButton(null)}
        >
          <LanguageIcon isHovered={isHoveredButton === "language"} />
          english
        </button>
        <button
          className="option"
          onMouseEnter={() => setIsHoveredButton("logOut")}
          onMouseLeave={() => setIsHoveredButton(null)}
        >
          <LogOutIcon isHovered={isHoveredButton === "logOut"} />
          log out
        </button>
      </div>
    </div>
  );
}

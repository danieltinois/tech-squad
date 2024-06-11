import { useEffect, useState } from "react";
import { PostForm } from "../../components/postForm";
import "./styles.css";

import { CiWarning } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";

export function MakeQuestions() {
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setShowAlert(true);
  }, []);

  useEffect(() => {
    document.title = "Make Questions - Tech Squad";
  }, []);

  useEffect(() => {
    const storedActiveLink = localStorage.getItem("activeLink");
    if (storedActiveLink) {
      navigate(getPath(storedActiveLink));
    }
  }, []);

  const handleNavInfo = (link, path) => {
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

  return (
    <div className="container">
      <div
        className={`alert-info mt-4 ${showAlert ? "slide-down-fade-in" : ""} `}
      >
        <span>
          <CiWarning size={20} /> Atenção: Pedimos encarecidamente que{" "}
          <button
            className="info-link"
            onClick={() => handleNavInfo("Information", "/info")}
          >
            <a href="/info">leia isso antes</a>
          </button>{" "}
          de fazer sua primeira publicação.
        </span>
      </div>

      <PostForm />
    </div>
  );
}

import { useEffect, useState } from "react";
import { PostForm } from "../../components/postForm";
import "./styles.css";

import { CiWarning } from "react-icons/ci";

export function MakeQuestions() {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setShowAlert(true);
  }, []);

  useEffect(() => {
    document.title = "Make Questions - Tech Squad";
  }, []);
  return (
    <div className="container">
      <div
        className={`alert-info p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3 mt-4 ${
          showAlert ? "slide-down-fade-in" : ""
        } `}
      >
        <span>
          <CiWarning /> Atenção: Pedimos encarecidamente que{" "}
          <a className="info-link">leia isso antes</a> de fazer sua primeira
          publicação.
        </span>
      </div>

      <PostForm />
    </div>
  );
}

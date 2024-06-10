import "./styles.css";

import { InputQuestion } from "../../components/inputQuestion";
import { Post } from "../../components/post";
import { useEffect } from "react";

export function Explore() {
  useEffect(() => {
    document.title = "Explore - Tech Squad";
  }, []);

  return (
    <div className="div-container">
      <div className="content">
        <div className="input-box">
          <InputQuestion title="Post an article to help our community members" />
        </div>

        <div className="post-container">
          <Post />
        </div>
      </div>
    </div>
  );
}

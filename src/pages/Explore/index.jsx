import { useEffect } from "react";

import "./styles.css";

import { Post } from "../../components/post";

export function Explore() {
  useEffect(() => {
    document.title = "Explore - Tech Squad";
  }, []);

  return (
    <div className="div-container">
      <div className="content">
        <div className="post-container">
          <Post />
        </div>
      </div>
    </div>
  );
}

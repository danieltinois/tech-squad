import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import "./styles.css";

export function TextEditor() {
  const [body, setBody] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      [{ "code-block": null }], // Adicionando o botão para inserção de bloco de código
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "code-block", // Adicionando o formato de bloco de código
  ];

  const handleQuill = (value) => {
    setBody(value);
  };

  return (
    <div>
      <ReactQuill
        value={body}
        onChange={handleQuill}
        modules={modules}
        formats={formats}
        className="react-quill"
        theme="snow"
      />
    </div>
  );
}

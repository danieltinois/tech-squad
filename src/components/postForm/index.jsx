import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import "./styles.css";
import { useNavigate } from "react-router-dom";

export function PostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode enviar os dados para o backend.
    console.log("Title:", title);
    console.log("Body:", body);
  };

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
      [{ "code-block": null }],
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
    "code-block",
  ];

  const handleQuill = (value) => {
    setBody(value);
  };

  const handleBackExplore = () => {
    navigate("/");
  };

  return (
    <div>
      <div>
        <h1 className="my-4">
          Crie uma publicação! <span className="wave">👋</span>
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Título *</label>
          <input
            type="text"
            className="form-control input-title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group my-4">
          <label htmlFor="content">Corpo da publicação *</label>

          <ReactQuill
            value={body}
            onChange={handleQuill}
            modules={modules}
            formats={formats}
            className="react-quill"
            theme="snow"
          />
        </div>

        <div className="my-4 btn-group">
          <button type="submit" className="btn-publisher">
            Publicar
          </button>
          <button type="reset" className="btn-cancel-custom">
            <a href="/make-questions">Cancelar</a>
          </button>
        </div>
        <p className="mt-3">
          Os campos marcados com um asterisco (*) são obrigatórios.
        </p>
      </form>
    </div>
  );
}

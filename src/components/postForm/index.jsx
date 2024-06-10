import React, { useState } from "react";

import "./styles.css";
import { TextEditor } from "../textEditor";

export function PostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [source, setSource] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode enviar os dados para o backend.
    console.log("Title:", title);
    console.log("Content:", content);
    console.log("Source:", source);
  };

  return (
    <div className="container">
      <h1 className="my-4">
        Faça uma pergunta! <span className="wave">👋</span>
      </h1>
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

          <TextEditor />
        </div>

        <div className="my-4 btn-group">
          <button type="submit" className="btn-publisher">
            Publicar
          </button>
          <button type="button" className="btn-cancel-custom">
            Cancelar
          </button>
        </div>
        <p className="mt-3">
          Os campos marcados com um asterisco (*) são obrigatórios.
        </p>
      </form>
    </div>
  );
}

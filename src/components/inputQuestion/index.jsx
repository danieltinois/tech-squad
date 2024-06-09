import iconFileImg from "../../assets/svgs/icons/iconFileImg.svg";
import iconGif from "../../assets/svgs/icons/iconGif.svg";
import iconEmoji from "../../assets/svgs/icons/iconEmoji.svg";

import "./styles.css";

export function InputQuestion({ title }) {
  return (
    <div className="d-flex align-items-center custom-search-container">
      <img
        className="custom-user-image rounded-circle"
        src="https://avatars.githubusercontent.com/u/99421761?s=400&u=dd76f7f8c19436a56e670ddc9e9bd3eb7410cc0d&v=4"
        alt="Image profile"
      />

      <div className="custom-search-input-group">
        <input
          placeholder={title}
          type="text"
          className="form-control custom-search-input"
        />

        <div className="input-group-append custom-input-group-append">
          <button
            className="btn-outline-secondary custom-btn-icon"
            type="button"
          >
            <img src={iconFileImg} alt="File" className="custom-icon-img" />
          </button>

          <button
            className="btn-outline-secondary custom-btn-icon"
            type="button"
          >
            <img src={iconGif} alt="Gif" className="custom-icon-img" />
          </button>

          <button
            className="btn-outline-secondary custom-btn-icon"
            type="button"
          >
            <img src={iconEmoji} alt="Emoji" className="custom-icon-img" />
          </button>
        </div>
      </div>
    </div>
  );
}

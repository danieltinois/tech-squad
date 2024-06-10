import React, { useState } from "react";
import "./styles.css";

import { ShareIcon } from "../icons/share";
import { DonationIcon } from "../icons/dolar";
import { SaveIcon } from "../icons/bookmark";
import { CommentIcon } from "../icons/chat";
import { LikeIcon } from "../icons/favorite";

export function Post() {
  const [isHoveredButton, setIsHoveredButton] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [likes, setLikes] = useState(180);

  const handleLikeClick = (e) => {
    if (e.target.checked) {
      setLikes((prevLikes) => prevLikes + 1);
    } else {
      setLikes((prevLikes) => prevLikes - 1);
    }
  };

  const contentPost =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat incidunt earum facilis maiores illo nobis possimus dolorum qui dolore esse consequatur porro explicabo autem sapiente in dolorem, error repudiandae minus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum eos provident deserunt pariatur debitis soluta aperiam, ut voluptates aliquid iusto laudantium hic, porro vitae veniam repellat consectetur, odit quae! Nam!";

  const truncatedContentPost = isExpanded
    ? contentPost
    : contentPost.slice(0, 150);

  return (
    <div className="custom-post-container">
      <div className="container profile">
        <div className="row">
          <div className="col-12">
            <div className="card-custom mb-3">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <a href="#">
                    <img
                      src="https://i.pinimg.com/originals/91/06/fd/9106fde88b0fdf39d4793fa145299da9.jpg"
                      alt=""
                      className="img-profile"
                    />
                  </a>
                  <div className="flex-fill ps-2">
                    <div className="fw-bold mb-1">
                      <a href="#" className="text-decoration-none text-dark">
                        User1
                      </a>
                    </div>
                    <div className="small text-body text-opacity-50">
                      <img
                        src="https://avatars.githubusercontent.com/u/99421761?s=400&u=dd76f7f8c19436a56e670ddc9e9bd3eb7410cc0d&v=4"
                        width="30"
                        alt=""
                        className="img-approved-profile me-1"
                      />
                      <span className="approved-span-profile">
                        Approved by admin
                      </span>{" "}
                      | 1 day ago
                    </div>
                  </div>
                </div>
                <h4>Post title</h4>
                <div className="truncated-text">
                  <p>
                    {truncatedContentPost}
                    {!isExpanded && (
                      <button
                        className="btn-custom-isExpanded"
                        onClick={() => setIsExpanded(true)}
                      >
                        ...view more
                      </button>
                    )}
                  </p>
                </div>

                <div className="full-img-container">
                  <img
                    src="https://s.zst.com.br/cms-assets/2020/11/soquete.jpg"
                    alt=""
                    className="full-img"
                  />
                </div>

                <div className="my-3 text-body text-opacity-50">
                  <span>{likes} likes</span>
                  <span className="separation-point">.</span>
                  <span>21 comments</span>
                </div>

                <div className="d-flex justify-content-between btn-custom-post">
                  <div className="btn-group-principal">
                    <button
                      onMouseEnter={() => setIsHoveredButton("like")}
                      onMouseLeave={() => setIsHoveredButton(null)}
                    >
                      <label class="container-heart">
                        <input type="checkbox" onChange={handleLikeClick} />
                        <div class="checkmark">
                          <LikeIcon
                            className="icon"
                            isHovered={isHoveredButton === "like"}
                          />
                        </div>
                        Like
                      </label>
                    </button>
                    <button
                      onMouseEnter={() => setIsHoveredButton("comment")}
                      onMouseLeave={() => setIsHoveredButton(null)}
                    >
                      <CommentIcon
                        className="icon"
                        isHovered={isHoveredButton === "comment"}
                      />
                      Comment
                    </button>
                    <button
                      onMouseEnter={() => setIsHoveredButton("save")}
                      onMouseLeave={() => setIsHoveredButton(null)}
                    >
                      <label for="checkboxInput" class="bookmark">
                        <input type="checkbox" id="checkboxInput" />
                        <SaveIcon
                          className="svgIcon"
                          isHovered={isHoveredButton === "save"}
                        />
                        Save
                      </label>
                    </button>
                    <button
                      onMouseEnter={() => setIsHoveredButton("donate")}
                      onMouseLeave={() => setIsHoveredButton(null)}
                    >
                      <DonationIcon
                        className="icon"
                        isHovered={isHoveredButton === "donate"}
                      />
                      Donate
                    </button>
                  </div>

                  <button
                    onMouseEnter={() => setIsHoveredButton("share")}
                    onMouseLeave={() => setIsHoveredButton(null)}
                  >
                    <ShareIcon
                      className="icon"
                      isHovered={isHoveredButton === "share"}
                    />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

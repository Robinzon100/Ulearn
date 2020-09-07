import React, { Fragment } from "react";

import { ThumbsUp, ThumbsDown } from "react-feather";

import Stars from "components/global_components/svg/stars/Stars";

interface CommentCards {
  name: string;
  registrationDay: number;
  addedComment: string;
}

const comment_cards: React.FC<CommentCards> = ({
  name,
  registrationDay,
  addedComment,
}) => {
  return (
    <Fragment>
      <div className="comment">
        <div className="comment__pic"></div>

        <div className="comment__text">
          <div className="about-user">
            <div className="about-user__name">
              <p>{name}</p>
            </div>

            <div className="about-user__time">
              <p>({registrationDay} წლის წინ)</p>
            </div>
          </div>

          <div className="about-user__raiting">
            <Stars />
          </div>
          <div className="added-comment">
            <p>{addedComment}</p>
          </div>

          <div className="like">
            <div className="like__thumbs-up">
              <ThumbsUp />
            </div>
            <div className="like__thumbs-down">
              <ThumbsDown />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default comment_cards;

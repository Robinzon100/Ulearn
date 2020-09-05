import React, { Fragment, useState } from "react";
import Input from "components/global_components/inputs/input";

interface Props {
  name: string;
  // raiting:
  comment: string;
}

const InputCommentCards: React.FC<Props> = ({ name, comment }) => {
  const [placeHolder, setPlaceHolder] = useState<string>(
    "მოძებნე სასურველი კურსი"
  );

  return (
    <Fragment>
      <div className="add_comment">
        <div className="add_comment--picture dummy_pics"></div>
        <div className="add_comment--input">
          <div className="about_user">
            <div className="about_user--name">
              <p className="heading-semi-bold-Noto paragraph-medium ">
                ბარკალა დორუჩოღლუ
              </p>
            </div>
            <div className="about_user--star">აქ იქნება ვარსკვლავები</div>
          </div>

          <div className="comment_field">
            <Input placeHolder={placeHolder} />
          </div>

          <div className="add_btn btn btn-green">
            <a href="#">
              <p className="heading-semi-bold-Noto paragraph-medium ">
                დაკომენტარება
              </p>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default InputCommentCards;

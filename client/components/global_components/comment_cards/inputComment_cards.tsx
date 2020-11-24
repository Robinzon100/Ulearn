import React, { Fragment, useState } from "react";
import Input from "components/global_components/inputs/input";
import { NextLink } from "components/utils/NextLink";

import Stars from "components/global_components/svg/Stars"

interface Props {
    name: string;
    rating:number
}

const InputCommentCards: React.FC<Props> = ({ name,rating },props) => {
    const [placeHolder, setPlaceHolder] = useState<string>(
        "მოძებნე სასურველი კურსი"
    );

    return (
        <Fragment>
            <div className="add_comment">
                <div className="add_comment--picture dummy_pics"></div>
                <div className="add_comment--input">
                    <div className="about_user">
                        <h1>{name}</h1>

                        <div className="about_user--star">
                            {/* <Stars    StarWidth={17} numberOfStars={rating} /> */}
                        </div>
                    </div>

                    <div className="comment_field">
                        <Input placeHolder={placeHolder} />
                    </div>

                    <div className="add_btn btn btn-green">
                        <NextLink route="#">
                            <p>დაკომენტარება</p>
                        </NextLink>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default InputCommentCards;

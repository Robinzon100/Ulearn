
import * as React from "react";
import Input from "components/lib/inputs/Input";
import NextLink from "components/utils/nextLink/NextLink";
import Stars from "components/lib/svg/Stars";

interface Props {
    id: number,
    name: string;
    rating: number
}

const InputCommentCards = ({id,name,rating}:Props) => {

    return (

        <div className="add_comment" key={id}>
            <div className="add_comment--picture dummy_pics"></div>
            <div className="add_comment--input">
                <div className="about_user">
                    <h1>{name}</h1>

                    <div className="about_user--star">
                        <Stars  StarWidth={17} numberOfStars={rating} />
                    </div>
                </div>

                <div className="comment_field">
                    <Input
                        color="white"
                        size="large"
                        type="text"
                        placeHolder="მოძებნე სასურველი კურსი"
                        className=""
                        width="100%" />
                </div>

                <div className="add_btn btn Green">
                    <NextLink route="">
                        <p>დაკომენტარება</p>
                    </NextLink>
                </div>
            </div>
        </div>

    );
};

export default InputCommentCards;

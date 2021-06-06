
import * as React from "react";
import TextArea from "components/lib/textarea/TextArea";
import Stars from "components/lib/svg/Stars";
import Button from "../button/Button";




interface IInputCommentCards {
    id?: number,
    name?: string;
    rating?: number;
    imageUrl?:string
}





const InputCommentCards = ({id,name,rating}:IInputCommentCards) => {

    return (

        <div className="add_comment" key={id}>
            <div
                className="add_comment--picture"
                // style={{ backgroundImage: `url(${imageUrl && imageUrl})` }}
            />
            <div className="add_comment--input">
                <div className="about_user">
                    <h1>{name}</h1>

                    <div className="about_user--star">
                        <Stars  starWidth={17} numberOfStars={rating} />
                    </div>
                </div>

                <div className="comment_field">
                    <TextArea
                        isFocused={false}
                        minHeight="15rem"
                        color="white"
                        size="large"
                        type="text"
                        placeHolder="დაწერეთ კონენტარი"
                        className="f-size-p5 f-weight-m send-answer-input"
                        width="100%" 
                    />
                </div>

                <div className="add_btn">
                <Button
                  color="green"
                  size="medium"
                  disabled={false}
                  loading={false}
                  width="25rem">
                  <p className="f-weight-r f-size-p6">დაკომენტარება</p>
                </Button>
                </div>
            </div>
        </div>

    );
};

export default InputCommentCards;

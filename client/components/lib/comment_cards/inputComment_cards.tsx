
import TextArea from "components/lib/textarea/TextArea";
import Stars from "components/lib/svg/Stars";
import Button from "../button/Button";
import { useState } from "react";
import HoverableStars from 'components/lib/svg/HoverableStars';




interface IInputCommentCards {
    id?: number;
    full_name?: string;
    rating?: number;
    image_url?: string;
    getCommentBody?: any;
    onClick?: any
    getCurrentRating?: any
    addComment?: any
}





const InputCommentCards = (
    { id, full_name, image_url, rating, getCommentBody, getCurrentRating, addComment }: IInputCommentCards) => {


    const [answer, setAnswer] = useState("");

    // === GETTING CURRENT COMMENT BODY
    const setCommentBody = () => {
        getCommentBody(answer)
    };

    return (

        <div className="add_comment" key={id}>
            <div
                className="add_comment--picture"
                style={{
                    backgroundImage: `url(${image_url ?
                        process.env.BACK_END_URL + '/api/images/' + image_url :
                        '/pictures/unregistered_user.svg'
                        })`
                }}
            />
            <div className="add_comment--input">
                <div className="about_user">
                    <h1>{full_name}</h1>

                    <div className="about_user--star">
                        <HoverableStars
                            starWidth={20}
                            numberOfStars={rating}
                            // getCurrentRating={ }
                        />
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
                        onChange={(e) => setAnswer(e.target.value)}
                    />
                </div>

                <div className="add_btn">
                    <Button
                        onClick={() => { addComment(); setCommentBody() }}
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

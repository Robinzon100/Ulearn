
import TextArea from "components/lib/textarea/TextArea";
import HoverableStars from "components/lib/svg/HoverableStars";
import Button from "../button/Button";
import { useState } from "react";




interface IInputCommentCards {
    id?: number;
    name?: string;
    rating?: number;
    imageUrl?: string;
    onChange?: any;
    onClick?:any
}





const InputCommentCards = ({ id, name, imageUrl, onChange, }: IInputCommentCards) => {
    //   const [userCommentValue, setUserCommentValue] = useState("")


    const [answer, setAnswer] = useState("");


    const handleSubmit = () => {
        // onClick()
        onChange(answer)
    };

    return (

        <div className="add_comment" key={id}>
            <div
                className="add_comment--picture"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="add_comment--input">
                <div className="about_user">
                    <h1>{name}</h1>

                    <div className="about_user--star">
                    <HoverableStars starWidth={20} numberOfStars={4} />
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
                        onClick={() => handleSubmit()}
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

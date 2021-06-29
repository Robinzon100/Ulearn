
import TextArea from "components/lib/textarea/TextArea";
import Button from "../button/Button";
import { useState } from "react";
import HoverableStars from 'components/lib/svg/HoverableStars';
import { useCommentStore } from '../../../mobx/commentContext';
import { observer } from "mobx-react-lite";
import { authenticatedRequest } from '../../utils/auth/tokenValidations';
import { postComment } from "actions/client/course/course.index.action";




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





const InputCommentCards = observer(({ id, full_name, image_url, rating, getCommentBody, getCurrentRating, addComment }: IInputCommentCards) => {
    const { commentStore } = useCommentStore()
    const [error, setError] = useState(false)


    const handleComment = async () => {
        if (commentStore.currentComment.text.length <= 0) {
            setError(true)
        }

        setError(false)
        const newComment = await authenticatedRequest(postComment, {
            courseId: commentStore.courseId,
            comment: {
                text: commentStore.currentComment.text,
                rating: commentStore.currentComment.rating
            }
        }, null)

        console.log(newComment);


        if (newComment.statusCode != 403) {
            commentStore.ratingComments.unshift(newComment)
            commentStore.currentComment.text = ''
            commentStore.currentComment.rating = 0
        } else {
            setError(true)
        }
    }


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
                            numberOfStars={commentStore.currentComment.rating}
                            getCurrentRating={(rating) => {
                                commentStore.currentComment.rating = rating
                            }}
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
                        onChange={(e) => {
                            commentStore.currentComment.text = e.target.value
                        }}
                    />
                    {error && (
                        <p className="form_errors f-size-p6 f-weight-r">
                            თქვენ უკვე მიეცით შეფასება ამ კურს ან ცარიელია კომენტარი ველი
                        </p>
                    )}
                </div>

                <div className="add_btn">
                    <Button
                        onClick={() => {
                            handleComment()
                        }}
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
})

export default InputCommentCards;

import React, { Fragment } from 'react'

import { ThumbsUp,ThumbsDown} from 'react-feather';

import Stars from "components/global_components/stars/stars";

export default function comment_cards() {
    return (
        <Fragment>
            <div className="comment">
                <div className="comment__pic"></div>

                <div className="comment__text">
                    <div className="about-user">
                        <div className="about-user__name">
                            <p className="heading-semi-bold-Noto paragraph-regular">სახელა სახელაშვილი</p>
                        </div>



                        <div className="about-user__time">
                            <p className="paragraph-light-Noto paragraph-medium-small">(1 წლის წინ)</p>
                        </div>
                    </div>

                    <div className="about-user__raiting">
                        <Stars/>

                    </div>
                    <div className="added-comment">
                        <p className="paragraph-regular-Noto paragraph-medium-small">
                            ეს ძალიან მომეწონა ეს კურსი და ეხლა თამამად შემიძლია ვთვა რომ ვარ javascript დეველოპერი და სამსახურსაც ადვიალდ ვიშოვი ამ ინდუსტრიაში, დიდი მადლობა ბექას რომ წარგივდგინა ასეთი კარგი კურსი ვიდეობი იყო გასაგები და რაც მთავარია ქართულად რამაც ძალიან დამეხმარა
                            </p>
                    </div>

                    <div className="like">
                        <div className="like__thumbs-up">
                            <ThumbsUp/>
                        </div>
                        <div className="like__thumbs-down">
                            <ThumbsDown/>
                        </div>
                    </div>


                </div>
            </div>
        </Fragment>
    )
}

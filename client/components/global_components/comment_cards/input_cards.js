import React, { Fragment,useState } from 'react'
import Input from "components/global_components/inputs/input";



export default function input_cards(

) {
    const [placeHolder, setPlaceHolder] = useState("მოძებნე სასურველი კურსი")

    return (
        <Fragment>
            <div className="add_comment">
                <div className="add_comment--picture dummy_pics"></div>
                <div className="add_comment--input">
                    <div className="about_user">
                        <div className="about_user--name">
                            <p className="heading-semi-bold-Noto paragraph-medium ">ბარკალა დორუჩოღლუ</p>
                        </div>
                        <div className="about_user--star">აქ იქნება ვარსკვლავები</div>
                    </div>

                    <div className="comment_field">
                        {/* //! აქ კომპონენტად ჩადე ინფუთი. ჩვეულებრივი ინფუთის კომპონენეტი შექმენი */}

                        <Input placeHolder={placeHolder} />
                    </div>

                    <div className="add_btn btn btn-green">
                        <a href="#">
                            <p className="heading-semi-bold-Noto paragraph-medium ">დაკომენტარება</p>
                        </a>

                    </div>

                </div>
            </div>
        </Fragment>
    )
}

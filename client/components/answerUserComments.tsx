import React, { useState } from 'react'
import Input from "components/global_components/Inputs/Input";


interface answerUserComments {
    id: number
}


const answerUserComments: React.FC<answerUserComments> = ({ id },props) => {
    const [placeHolder, setPlaceHolder] = useState<string>("დაწერე რაც გინდა");

    const [answerComment, setAnswerComment] = useState(false);
   

    const handleSetAnswerComment = () => {
        setAnswerComment((answerComment) => !answerComment)
    }

    return (
        <>
            <div className="user-answer" onClick={(handleSetAnswerComment)} key={props.id}>

                {!answerComment ?
                    <div className="user-answer--heading" >
                        <p className="btn blackheading-bold paragraph-medium-small">
                            პასუხის გაცემა
                    </p>
                    </div>
                    :
                    null
                }
            </div>
            <div >
                {answerComment ?
                    <div className="user-answer--input">
                        <Input 
                        placeHolder={placeHolder} 
                        type='text'/>
                        <div className="user-answer--input__btn" onClick={(handleSetAnswerComment)}>
                            <p className="btn primary heading-bold paragraph-medium-small">
                                პასუხი
                            </p>
                        </div>
                    </div>
                    : null
                }
            </div>

        </>
    )
}


export default answerUserComments;
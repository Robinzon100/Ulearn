import {useState} from 'react'
import Input from "components/lib/inputs/Input";


interface answerUserComments {
    id: number
}

const answerUserComments = ({id}:answerUserComments) => {
    const [answerComment, setAnswerComment] = useState(false);
    
    const handleSetAnswerComment = () => {
        setAnswerComment((answerComment) => !answerComment)
    }

    return (
        <>
            <div className="user-answer" onClick={(() => handleSetAnswerComment())} key={id}>

                {!answerComment ?
                    <div className="user-answer--heading" >
                        <p className="btn blackbold f-size-p5">
                            პასუხის გაცემა
                        </p>
                    </div> : null
                }
            </div>
            <div >
                {answerComment ?
                    <div className="user-answer--input">
                        <Input
                            color="red"
                            size="large"
                            type="text"
                            placeHolder="მოძებნე სასურველი კურსი"
                            className=""
                            width="100%"
                        // disabled={true}
                        />
                        <div className="user-answer--input__btn" onClick={(handleSetAnswerComment)}>
                            <p className="btn primary bold f-size-p5">
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
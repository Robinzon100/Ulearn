
import { Edit3, Trash2, ChevronDown } from "react-feather";
import { useState } from "react";

import Input from "components/lib/inputs/Input"
import Button from "components/lib/button/Button"

interface IChangeName {
    chapterNumber: number;
    chapterName: string;
    onClick?: any;
    onToggle?: any;
    chapterId?: number;
    videoId?: number;
}




const SylabusChangeName = ({ chapterName, chapterNumber, onClick, onToggle, chapterId, videoId }: IChangeName) => {

    const [isEditable, setIsEditable] = useState(false);
    const [inputParams, setInputParams] = useState({ chapterName: chapterName, chapterId: 0, videoId: 0 })

    const getInputValue = () => {
        console.log(inputParams)
    }

    return (
        <>
            <div className="add-new-chapter">

                <div className="change-chapter_name">


                    <div className="chapter-name">



                        <p className="f-size-p3 f-weight-bl chapter-title">
                            <span className="f-size-h7 f-weight-b">
                                {chapterNumber}.
                            </span>

                            {isEditable === false &&
                                inputParams.chapterName
                            }
                        </p>




                        {isEditable &&
                            <div className="change-name-input">
                                <Input
                                    autoComplate="off"
                                    className={`f-size-p6 f-weight-b chapter-input `}
                                    color="white"
                                    size="medium"
                                    type="text"
                                    onChange={(e) => setInputParams({ chapterName: e.target.value, chapterId, videoId })}
                                    placeHolder={chapterName}
                                    width="100%"
                                    isFocused={true}
                                    maxLength={50}
                                    readonly={!isEditable ? true : false}
                                />



                                <Button
                                    color="black"
                                    size="small"
                                    className="editable-btn"
                                    disabled={false}
                                    loading={false}
                                    width="50%"
                                    onClick={() => { getInputValue(); setIsEditable(false) }}>
                                    <p className="f-weight-r f-size-p5">შენახვა</p>
                                </Button>
                            </div>

                        }




                    </div>

                    {isEditable === false &&
                        <div className="pencil" onClick={() => setIsEditable(true)}>
                            <Edit3 style={{ opacity: "60%" }} />
                        </div>
                    }

                </div>



                <div className="delete-dropdown">

                    <div className="dropdown" onClick={onToggle}>
                        <ChevronDown
                            color={"var(--secondary-darkest-gray)"}
                            style={{ opacity: "60%" }}
                            size={35}
                        />
                    </div>

                    <div className="delete" onClick={() => onClick()}>
                        <Trash2 color={"var(--primary-white)"} size={25} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default SylabusChangeName

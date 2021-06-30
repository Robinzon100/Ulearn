
import { Edit3, Trash2, ChevronDown } from "react-feather";
import { useState } from "react";

import Input from "components/lib/inputs/Input"
import Button from "components/lib/button/Button"
import { observer } from 'mobx-react-lite';
import { useNewCourseStore } from '../../../../../mobx/newCourseStateContext';

interface IChangeName {
    chapterNumber?: number;
    onClick?: any;
    onToggle?: any;
    chapterId?: number;
    videoId?: number;
}




const SylabusChangeName = observer(({ chapterNumber, onClick, onToggle, chapterId, videoId }: IChangeName) => {
    const [isEditable, setIsEditable] = useState(false);
    let { newCourseStore } = useNewCourseStore()



    return (
        <>
            {newCourseStore.newCourseData.curriculum && (
                <div className="add-new-chapter">
                    <div className="change-chapter_name">
                        <div className="chapter-name">
                            <p className="f-size-p3 f-weight-bl chapter-title">
                                <span className="f-size-h7 f-weight-b">
                                    {chapterNumber}.
                                </span>

                                {isEditable === false &&
                                    (
                                        newCourseStore.newCourseData
                                            .curriculum[chapterId]
                                            .sub_videos[videoId] == undefined
                                            ?
                                            newCourseStore.newCourseData
                                                .curriculum[chapterId].name
                                            :
                                            newCourseStore.newCourseData
                                                .curriculum[chapterId]
                                                .sub_videos[videoId].name
                                    )
                                }
                            </p>

                            {isEditable &&
                                <div className="change-name-input">
                                    <Input
                                        placeholderColor="red"
                                        autoComplate="off"
                                        // className={`f-size-p6 f-weight-m chapter-input `}
                                        color="white"
                                        size="medium"
                                        type="text"
                                        maxWidth="22rem"
                                        onChange={(e) => {
                                            newCourseStore.newCourseData
                                                .curriculum[chapterId]
                                                .sub_videos[videoId] == undefined
                                                ?
                                                newCourseStore.newCourseData
                                                    .curriculum[chapterId].name = e.target.value
                                                :
                                                newCourseStore.newCourseData
                                                    .curriculum[chapterId]
                                                    .sub_videos[videoId].name = e.target.value
                                        }}
                                        placeHolder={
                                            newCourseStore.newCourseData
                                                .curriculum[chapterId]
                                                .sub_videos[videoId] == undefined
                                                ?
                                                newCourseStore.newCourseData
                                                    .curriculum[chapterId].name
                                                :
                                                newCourseStore.newCourseData
                                                    .curriculum[chapterId]
                                                    .sub_videos[videoId].name
                                        }
                                        width="100%"
                                        value={
                                            newCourseStore.newCourseData
                                                .curriculum[chapterId]
                                                .sub_videos[videoId] == undefined
                                                ?
                                                newCourseStore.newCourseData
                                                    .curriculum[chapterId].name
                                                :
                                                newCourseStore.newCourseData
                                                    .curriculum[chapterId]
                                                    .sub_videos[videoId].name
                                        }
                                        isFocused={true}
                                        maxLength={50}
                                        readonly={!isEditable ? true : false}
                                    />



                                    <Button
                                        color="black"
                                        size="mini"
                                        className="editable-btn"
                                        disabled={false}
                                        loading={false}
                                        width="50%"
                                        onClick={() => { setIsEditable(false) }}>
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
            )}
        </>
    )
})

export default SylabusChangeName

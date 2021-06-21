import { Upload } from "react-feather";
import { useEffect, useState } from "react";



import Button from "components/lib/button/Button";
import SylabusVideoComponent from "components/pages/video-upload/tabs-content/sylabus/SylabusVideo.component";
import ChangeChapterName from "components/pages/video-upload/tabs-content/sylabus/SylabusChangeName.component";




const Sylabus = ({data}) => {
    const [addComponent, setAddNewComponent] = useState(1);


    const add = () => {
        setAddNewComponent(addComponent + 1)
    }

    const remove = () => {
        setAddNewComponent(addComponent - 1)
    }



    return (
        <>
            <section className="sylabus">
                <div className="sylabus-container">
                    <div className="sylabus-video-add-btn">
                        <Button
                            color="blue"
                            size="medium"
                            onClick={() => add()}
                            disabled={false}
                            loading={false}
                            width="25rem"
                            icon={<Upload size={22} />}
                            type="submit">
                            <p className="f-weight-r f-size-p5">დამატება</p>
                        </Button>
                    </div>


                    {[...Array(addComponent)].map((el, i) => (
                        <div className="" key={i}>

                            <div className="new-chapter" >

                                <ChangeChapterName
                                    chapterNumber={i + 1}
                                    chapterName={"თავის სახელი"}
                                    onClick={() => remove()}
                                />

                                <SylabusVideoComponent id={i} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Sylabus;

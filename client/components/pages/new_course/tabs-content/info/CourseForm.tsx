import { Zap, Clipboard, X, Upload } from "react-feather"
import { useEffect, useState } from "react"


/// ===== COMPONENTS
import Input from "components/lib/inputs/Input"
import Select from "components/lib/select/select"
import InputAdder from "components/lib/input-adder-component/InputAdder.component"
import FileUpload from "components/lib/upload/FileUpload"





import SelectJson from "../../../../../public/json/Select.json";
import dynamic from "next/dynamic";
const RichTextEditor = dynamic(() =>
    import('components/lib/rich-text-editor/RichTextEditor'),
    { ssr: false }
)



import { getAllCategories } from "actions/client/categories.action";
import { authenticatedRequest } from "components/utils/auth/tokenValidations"
import { postCourseImage } from "actions/client/course/newCourse/courseInfo.action"
import { useNewCourseStore } from "mobx/newCourseStateContext"
import { observer } from "mobx-react-lite"




const CourseForm = observer(() => {
    let { newCourseStore } = useNewCourseStore()
    const [mainCategories, setMainCategories] = useState<any>([])
    const [subCategories, setSubCategories] = useState<any>([])
    const [fileUploadError, setFileUploadError] = useState("");
    const [, setFile] = useState({ file: "", base64: "" });
    const [fileLoading, setFileLoading] = useState(false);

    useEffect(() => {
        fetchCategories()
    }, [])





    // ==== ==== WHAT-WILL-YOU-LEARN HANDLER
    const inputValuesHandler = (e, index) => {
        newCourseStore.newCourseData.courseInfo
            .what_will_you_learn[index] = e.target.value;
    }

    const addInputHandler = () => {
        newCourseStore.newCourseData.courseInfo.what_will_you_learn.push('')
    }


    const deleteInputHandler = (index: number) => {
        newCourseStore.newCourseData.courseInfo
            .what_will_you_learn.splice(index, 1)
    }


    // ==== ==== CATEGORY
    const CourseCategoryFormHandler = (value?, field?: string) => {
        newCourseStore.newCourseData.courseInfo[field] = value
    }


    // ==== ==== INPUTS
    const CourseInputFormHandler = (e?, field?: string) => {
        newCourseStore.newCourseData.courseInfo[field] = e.target.value
    }



    // === === IMAGE UPLOAD HANDLER
    const imageOnChangeHandler = async (e) => {
        if (!fileUploadError) {
            setFileLoading(true)

            const imgForm = new FormData();
            imgForm.append('course_image', e.currentTarget.files[0]);
            const { fileKey } = await authenticatedRequest(postCourseImage, imgForm, null);

            if (fileKey)
                newCourseStore.newCourseData.courseInfo.image_url = fileKey;
            setFileLoading(false)
        }
    }



    /// ===== FETCH CATEGOREIS
    const fetchCategories = async () => {
        const { categories: { main_categories, sub_categories } } = await getAllCategories();
        setMainCategories(main_categories)
        setSubCategories(sub_categories)
    }



    return (
        <>{newCourseStore.newCourseData &&
            <div className="text-editor">
                <div className="text-editor__container">





                    {/* ///  NAME */}
                    <div className="name">
                        <div className="heading">
                            <h1 className="f-size-p5 f-weight-bl">დასახელება</h1>
                        </div>

                        <Input
                            size="large"
                            name="name"
                            width="100%"
                            type="text"
                            onChange={(e) => CourseInputFormHandler(e, "title")}
                            value={newCourseStore.newCourseData.courseInfo.title}
                            placeHolder="ისწავლეთ თუ როგორ გახდეთ javascript დეველოპერი"
                            color="white"
                            minLength={20}
                            maxLength={100}
                        />
                    </div>









                    {/* ///  short-description */}
                    <div className="short-description">
                        <div className="heading">
                            <h1 className="f-size-p5 f-weight-bl">მოკლე აღწერა</h1>
                        </div>

                        <Input
                            size="large"
                            name="short-description"
                            onChange={(e) => CourseInputFormHandler(e, "description")}
                            value={newCourseStore.newCourseData.courseInfo.description}
                            width="100%"
                            type="text"
                            placeHolder="ამ კურსში ისწავლით,თუ როგორ გახდეთ დეველოპერი..."
                            color="white"
                            minLength={30}
                            maxLength={250}
                        />
                    </div>









                    {/* ///  detailed-description */}
                    <div className="detailed-description">
                        <div className="heading">
                            <h1 className="f-size-p5 f-weight-bl">დეტალური აღწერა</h1>
                        </div>
                        <RichTextEditor onSave={(editorContent) => {
                            newCourseStore.newCourseData
                                .courseInfo.detailed_description = editorContent
                        }} />
                    </div>









                    {/* ///  categories-selects */}
                    <div className="categories-selects">
                        <div className="heading">
                            <h1 className="f-size-p5 f-weight-bl">კატეგორიები</h1>
                        </div>


                        <div className="categories-selects__container">
                            <Select
                                size="small"
                                placeHolder="მთავარი კატეგორია"
                                id={1}
                                name="main_categories"
                                minHeight="19rem"
                                options={mainCategories}
                                // defaultValue={
                                //     newCourseStore.newCourseData.courseInfo.main_category_id &&
                                //     mainCategories[+newCourseStore.newCourseData.courseInfo.main_category_id - 1].name
                                // }
                                onChange={(value) =>
                                    CourseCategoryFormHandler(value, "main_category_id")
                                }
                                icon={<Zap size={25} />}
                                color="green"
                                loading={false}
                                disabled={false}
                                width="43%"
                            />

                            <Select
                                size="small"
                                placeHolder="ქვე კატეგორია"
                                id={2}
                                name="sub_categories"
                                minHeight="19rem"
                                onChange={(value) =>
                                    CourseCategoryFormHandler(value, "sub_category_id")
                                }

                                options={
                                    subCategories
                                        .filter(el => el.main_category_id
                                            == newCourseStore.newCourseData.courseInfo
                                                .main_category_id)}
                                icon={<Zap size={25} />}
                                color="green"
                                loading={false}
                                disabled={
                                    newCourseStore.newCourseData.courseInfo
                                        .main_category_id.length <= 0}
                                width="43%"
                            />
                        </div>
                    </div>









                    {/* ///  what will you learn */}
                    <div className="what-will-you-learn">
                        <div className="heading">
                            <h1 className="f-size-p5 f-weight-bl">რას ისწავლიან თქვენი კურსით?</h1>
                        </div>

                        <div className="container">
                            {newCourseStore.newCourseData.courseInfo.what_will_you_learn.map((el, i) => (
                                <Input
                                    key={i}
                                    id={i}
                                    onChange={(e) => inputValuesHandler(e, i)}
                                    value={el}
                                    size="large"
                                    name="what-you-learn"
                                    width="100%"
                                    type="text"
                                    placeHolder="ამ კურსში ისწავლით,თუ როგორ გახდეთ დეველოპერი..."
                                    color="white"
                                    minLength={10}
                                    maxLength={70}
                                    iconRight={i > 2 &&
                                        <X size="30" style={{ cursor: "pointer" }}
                                            onClick={() => deleteInputHandler(i)} />
                                    }
                                />
                            ))}

                            {newCourseStore.newCourseData.courseInfo.what_will_you_learn.length <= 5 ?
                                <InputAdder
                                    minHeight="8rem"
                                    onClick={() => addInputHandler()}
                                />
                                : <h1 className="form_errors f-size-p6 f-weight-r">
                                    ინფუთების რაოდენობა არ უნდა აჭარბებდეს 6 და არ უნდა იყოს ნაკლები 3
                                </h1>
                            }
                        </div>


                    </div>









                    {/* ///  difficulty */}
                    <div className="difficulty">
                        <div className="heading">
                            <h1 className="f-size-p5 f-weight-bl">სირთულე</h1>
                        </div>

                        <Select
                            size="small"
                            placeHolder="კურსის სირთულე"
                            id={3}
                            name="difficulty"
                            minHeight="19rem"
                            options={SelectJson.difficulty}
                            defaultValue={
                                newCourseStore.newCourseData.courseInfo.difficulty &&
                                SelectJson.difficulty[+newCourseStore.newCourseData.courseInfo.difficulty - 1].name
                            }
                            onChange={(value) => CourseCategoryFormHandler(value, "difficulty")}
                            icon={<Clipboard size={25} />}
                            color="green"
                            loading={false}
                            disabled={false}
                            width="43%"
                        />
                    </div>












                    {/* ///  course-image */}
                    <div className="course-image">
                        <div className="heading">
                            <h1 className="f-size-p5 f-weight-bl">
                                კურსის სურათი
                            </h1>
                            <h2 className="f-size-p7 f-weight-bl">(სურათი უნდა იყოს 300კბ ნაკლები)</h2>
                        </div>

                        <div className="course-image__container">
                            <FileUpload
                                height="18rem"
                                uploadSize={300}
                                disabled={false}
                                isLoading={fileLoading}
                                icon={<Upload size={20} />}
                                onError={(errorType) => setFileUploadError(errorType)}
                                fileProperties={
                                    (file, base64) =>
                                        setFile({ file, base64 })
                                }
                                accept=".png,.jpg"
                                onChange={(e) => {
                                    imageOnChangeHandler(e)
                                }}
                            />

                            <div className="thumbnail"
                                style={
                                    { backgroundImage: `url(${process.env.BACK_END_URL}/api/images/${newCourseStore.newCourseData.courseInfo.image_url})` }
                                }
                            />
                        </div>

                    </div>



                    <div className="fileUpload-errors">
                        <p className="form_errors f-size-p6 f-weight-r">
                            {fileUploadError}
                        </p>
                    </div>

                </div>
            </div>
        }
        </>
    )
})

export default CourseForm

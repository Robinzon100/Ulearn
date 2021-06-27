import { Zap, Clipboard, X } from "react-feather"
import { useEffect, useState } from "react"


/// ===== COMPONENTS
import Input from "components/lib/inputs/Input"
import Select from "components/lib/select/select"
import InputAdder from "components/lib/input-adder-component/InputAdder.component"
import Button from "components/lib/button/Button"


import SelectJson from "../../../../../public/json/Select.json";
// import RichTextEditor from "components/lib/rich-text-editor/RichTextEditor";
import dynamic from "next/dynamic";
const RichTextEditor = dynamic(() =>
    import('components/lib/rich-text-editor/RichTextEditor'),
    { ssr: false }
)



import { getAllCategories } from "actions/client/categories.action";




const CourseForm = () => {


    const [courseForm, setCourseForm] = useState({
        title: "",
        description: "",
        detailed_description: "",
        what_will_you_learn: ["", "", ""],
        main_category_id: "",
        sub_category_id: "",
        difficulty: ""
    })

    const [mainCategories, setMainCategories] = useState<any>([])
    const [subCategories, setSubCategories] = useState<any>([])


    useEffect(() => {
        fetchCategories()
    }, [])




    //  ===== ADDING WHAT-WILL-YOU-LEARN INPUTS
    const addInputHandler = () => {
        courseForm.what_will_you_learn.push("")
        setCourseForm(courseForm => ({ ...courseForm }))
    }



    //  ===== DELETING WHAT-WILL-YOU-LEARN INPUTS
    const deleteInputHandler = (index: number) => {
        let deleted = [...courseForm.what_will_you_learn];
        deleted.splice(index, 1);

        courseForm.what_will_you_learn = deleted
        setCourseForm(courseForm => ({ ...courseForm }))
    }


    // ==== ==== WHAT-WILL-YOU-LEARN HANDLER
    const inputValuesHandler = (e, index) => {
        courseForm.what_will_you_learn[index] = e.target.value;
        setCourseForm(courseForm => ({ ...courseForm }))
    }



    // ==== ==== CATEGORY
    const CourseCategoryFormHandler = (value?, field?: string) => {
        setCourseForm({ ...courseForm, [field]: value })
    }


    // ==== ==== INPUTS
    const CourseInputFormHandler = (e?, field?: string) => {
        setCourseForm({ ...courseForm, [field]: e.target.value })
    }




    // === === SUBMIT COURSEFORM OBJECT
    const submitHandler = () => {
        console.log(courseForm)
    }




    /// ===== FETCH CATEGOREIS
    const fetchCategories = async () => {
        const { categories: { main_categories, sub_categories } } = await getAllCategories();

        setMainCategories(main_categories)
        setSubCategories(sub_categories)
    }




    return (
        <>
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
                            value={courseForm.title}
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
                            value={courseForm.description}
                            width="100%"
                            type="text"
                            placeHolder="ამ კურსში ისწავლით,თუ როგორ გახდეთ დეველოპერი..."
                            color="white"
                            minLength={20}
                            maxLength={100}
                        />
                    </div>




                    {/* ///  detailed-description */}
                    <div className="detailed-description">
                        <div className="heading">
                            <h1 className="f-size-p5 f-weight-bl">დეტალური აღწერა</h1>
                        </div>

                        <RichTextEditor />

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
                                            == courseForm.main_category_id)}
                                icon={<Zap size={25} />}
                                color="green"
                                loading={false}
                                disabled={courseForm.main_category_id.length <= 0}
                                width="43%"
                            />
                        </div>
                    </div>



                    {/* ///  categories-selects */}
                    <div className="what-will-you-learn">
                        <div className="heading">
                            <h1 className="f-size-p5 f-weight-bl">კატეგორიები</h1>
                        </div>

                        <div className="container">
                            {courseForm.what_will_you_learn.map((el, i) => (
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

                            {courseForm.what_will_you_learn.length <= 5 ?
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
                            onChange={(value) => CourseCategoryFormHandler(value, "difficulty")}
                            icon={<Clipboard size={25} />}
                            color="green"
                            loading={false}
                            disabled={false}
                            width="43%"
                        />
                    </div>



                </div>






                <Button
                    className="course-form-btn"
                    width="35rem"
                    size="large"
                    color="black"
                    onClick={() => submitHandler()}
                // route="#"
                >
                    <p className="f-weight-r f-size-p4 ">გაგზავნა</p>
                </Button>




            </div>
        </>
    )
}

export default CourseForm
